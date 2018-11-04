import Actions from '../constants/actions';

const actionCreator = (id) => ({
    type: Actions.SET_DECK_ID,
    id,
});

export default actionCreator;
