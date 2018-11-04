import Actions from '../constants/actions';

export default function (currentState, action) {
    if (action.type !== Actions.SET_CARDS) {
        return currentState;
    }

    return action.payload;
}
