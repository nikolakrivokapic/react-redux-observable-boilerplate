import Actions from '../constants/actions';

const actionCreator = (id) => ({
    type: Actions.FETCH_CARDS,
    id,
});

export default actionCreator;
