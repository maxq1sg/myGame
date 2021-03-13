import Enemy from '../classes/Enemy';
import store from '../redux/store';
import { enemiesActionTypes } from '../redux/types/enemiesTypes';
import { canvas } from './../index';
import enemyData from './generateNumber';
export let spawnId: any
export function spawnEnemies() {
    spawnId = setTimeout(function spawnBody() {
        const isMobile = store.getState().isMobile
        const { x, y, radius, color } = enemyData()
        const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x)
        const velocity = isMobile ? {
            x: Math.cos(angle) * 2,
            y: Math.sin(angle) * 2
        } : {
            x: Math.cos(angle) * 3,
            y: Math.sin(angle) * 3
        }
        store.dispatch({
            type: enemiesActionTypes.ADD_ENEMY,
            payload: isMobile ? new Enemy(x, y, radius * 0.5, color, velocity, 100)
                : new Enemy(x, y, radius, color, velocity, 100)
        })
        spawnId = setTimeout(spawnBody, store.getState().speed)
    }, 1000)
}