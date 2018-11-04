import Actions from '../constants/actions';

export default function (currentState, action) {
    if (action.type !== Actions.SET_DECK_ID) {
        return currentState;
    }

    return action.id;
}
