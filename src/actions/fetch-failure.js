import Actions from '../constants/actions';

const actionCreator = (error) => ({
    type: Actions.FETCH_FAILURE,
    error,
});

export default actionCreator;
