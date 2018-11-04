import Actions from '../constants/actions';

export default function (currentState, action) {
    if (action.type !== Actions.FETCH_FAILURE) {
        return currentState;
    }

    return action.error;
}
