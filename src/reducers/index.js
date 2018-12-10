import setDeckId from './set-deck-id';
import setCards from './set-cards';
import logoBgColor from './logo-bg-color';
import fetchError from './error';
import preloading from './preloading';
import loading from './loading';

export default function (currentState, action) {
    return {
        deckId: setDeckId(currentState ? currentState.deckId : '', action),
        cards: setCards(currentState ? currentState.cards : [], action),
        logoBgColor: logoBgColor(currentState ? currentState.logoBgColor : '#000000', action),
        error: fetchError(currentState ? currentState.error : '', action),
        preloading: preloading(currentState ? currentState.preloading : false, action),
        loading: loading(currentState ? currentState.loading : false, action),
    };
}

