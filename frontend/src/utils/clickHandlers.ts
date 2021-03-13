import { isNameValidTypes } from './../redux/types/isNameValidtypes';
import { canvas, ctx } from './../index';
import { saveResultActions } from './../redux/types/savedTypes';
import { scoreActionTypes } from './../redux/types/scoreTypes';
import { patronsActionTypes } from './../redux/types/patronsTypes';
import { enemiesActionTypes } from './../redux/types/enemiesTypes';
import { gameActionTypes } from './../redux/types/gameTypes';
import store from "../redux/store";
import { animation } from './animation';
import { spawnEnemies } from './spawnEnemies';
import { leaderList } from './modalContainer';
import Patron from '../classes/Patron';
import { createCanvas } from './utils';

export function newGameClickHandler() {
    store.dispatch({
        type: scoreActionTypes.SCORE_TO_NULL,
        payload: 0
    })
    store.dispatch({
        type: saveResultActions.CANCEL_SAVED
    })
    store.dispatch({
        type: isNameValidTypes.RESET_VALID
    })
    store.dispatch({
        type: enemiesActionTypes.REMOVE_ALL_ENEMIES
    })
    store.dispatch({
        type: patronsActionTypes.REMOVE_ALL_PATRONS
    })
    store.dispatch({
        type: gameActionTypes.GAME_IS_RUNNING
    });
    createCanvas(ctx)
    animation()
    spawnEnemies()
}
export function leaderClickHandler() {
    leaderList(true)
}



export function canvasClickHandler(event: any) {
    if (store.getState().gamePhase === 1) {
        const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
        const velocity = {
            x: Math.cos(angle) * 6,
            y: Math.sin(angle) * 6
        }
        store.dispatch({
            type: patronsActionTypes.ADD_PATRON,
            payload: new Patron(canvas.width / 2, canvas.height / 2, 10, "white", velocity)
        })
    }
}