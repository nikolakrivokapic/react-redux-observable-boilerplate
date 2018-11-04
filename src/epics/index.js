import {combineEpics} from 'redux-observable';
import {fetchDeck, fetchCards} from './cards';

export default combineEpics(
    fetchDeck,
    fetchCards,
);
