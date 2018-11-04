import Actions from '../constants/actions';

const actionCreator = (value) => ({
    type: Actions.CHANGE_LOGO_BACKGROUND_COLOR,
    value,
});

export default actionCreator;
