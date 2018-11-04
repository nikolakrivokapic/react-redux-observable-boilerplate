import Actions from '../constants/actions';

const actionCreator = (payload) => ({
    type: Actions.SET_CARDS,
    payload,
});

export default actionCreator;
