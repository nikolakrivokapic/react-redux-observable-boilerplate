import {of} from 'rxjs';
import {switchMap, map, flatMap, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {ofType} from 'redux-observable';
import Actions from '../constants/actions';
import setDeckId from '../actions/set-deck-id';
import setCards from '../actions/set-cards';
import fetchFailure from '../actions/fetch-failure';
import fetchCardsAction from '../actions/fetch-cards';

export function fetchDeck(action$) {
    return action$.pipe(
        ofType(Actions.FETCH_DECK),
        switchMap(() =>
            ajax.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').pipe(
                flatMap((response) => ([setDeckId(response.deck_id), fetchCardsAction(response.deck_id)])),
                catchError((error) => of(fetchFailure(error.message)))
            ))
    );
}

export function fetchCards(action$) {
    return action$.pipe(
        ofType(Actions.FETCH_CARDS),
        switchMap((action) =>
            ajax.getJSON(`https://deckofcardsapi.com/api/deck/${action.id}/draw/?count=4`).pipe(
                map((response) => setCards(response.cards)),
                catchError((error) => of(fetchFailure(error.message)))
            ))
    );
}

