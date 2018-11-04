import Actions from '../constants/actions';

export default function (currentState, action) {
    if (action.type && action.type === Actions.FETCH_DECK) {
        return true;
    }

    if (action.type && action.type === Actions.SET_CARDS) {
        return false;
    }

    return currentState;
}
