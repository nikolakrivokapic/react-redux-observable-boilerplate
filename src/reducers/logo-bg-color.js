import Actions from '../constants/actions';
import {getRandomColor} from '../util/helpers';

export default function (currentState, action) {
    if (action.type !== Actions.CHANGE_LOGO_BACKGROUND_COLOR) {
        return currentState;
    }

    return getRandomColor();
}

