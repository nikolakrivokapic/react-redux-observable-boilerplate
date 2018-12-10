import {fromEventPattern, Observable} from 'rxjs';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootEpic from './epics';
import Actions from './constants/actions';

const {CapiAdapter} = window.simcapi;

export default class Store {
    static configureStore() {
        Store.capiModel = new CapiAdapter.CapiModel(rootReducer(null, {}));
        const epicMiddleware = createEpicMiddleware();

        Store.redux = createStore(rootReducer, composeWithDevTools(
            applyMiddleware(epicMiddleware)
        ));

        epicMiddleware.run(rootEpic);

        this.syncToCapiModel();

        return Store.redux;
    }

    static exposeProperty(property, capiConfig) {
        CapiAdapter.expose(property, Store.capiModel, capiConfig);

        const addHandler = (handler) => {
            Store.capiModel.on(`change:${property}`, handler);
        };

        const removeHandler = (handler) => {
            Store.capiModel.off(`change:${property}`, handler);
        };

        const resultSelector = () => Store.capiModel.attributes;

        const obs = fromEventPattern(addHandler, removeHandler, resultSelector);

        obs.subscribe(
            (payload) => {
                Store.redux.dispatch({
                    type: Actions.SYNC_FROM_CAPI,
                    payload,
                });
            }
        );
    }

    static syncToCapiModel() {
        const reduxStateChangeObservable$ = new Observable((observer) => {
            observer.next(Store.redux.getState());

            Store.redux.subscribe(() => {
                observer.next(Store.redux.getState());
            });
        });

        reduxStateChangeObservable$.subscribe((value) => {
            for (const key in value) {
                if (!value.hasOwnProperty(key)) {
                    continue;
                }
                Store.capiModel.set(key, value[key]);
            }
        });
    }
}

