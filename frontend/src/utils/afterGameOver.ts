import { gameActionTypes } from './../redux/types/gameTypes';
import store from '../redux/store';
import { animationId } from './animation';
import { spawnId } from './spawnEnemies';
import { speedActionTypes } from '../redux/types/speedTypes';
export default function afterGameOver() {
    cancelAnimationFrame(animationId)
    clearInterval(spawnId)
    store.dispatch({
        type: gameActionTypes.AFTER_GAME_OVER
    })
    store.dispatch({
        type: speedActionTypes.SPEED_TO_NULL
    })
}