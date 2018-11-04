import Actions from '../constants/actions';
import setDeckId from './set-deck-id';
import setCards from './set-cards';
import logoBgColor from './logo-bg-color';
import fetchError from './error';
import preloading from './preloading';
import loading from './loading';

export default function (currentState, action) {
    const state = action.type === Actions.SYNC_FROM_CAPI ? action.payload : currentState;

    return {
        deckId: setDeckId(state ? state.deckId : '', action),
        cards: setCards(state ? state.cards : [], action),
        logoBgColor: logoBgColor(state ? state.logoBgColor : '#000000', action),
        error: fetchError(state ? state.error : '', action),
        preloading: preloading(state ? state.preloading : false, action),
        loading: loading(state ? state.loading : false, action),
    };
}

