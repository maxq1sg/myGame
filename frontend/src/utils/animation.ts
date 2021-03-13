import { enemiesActionTypes } from './../redux/types/enemiesTypes';
import Player from '../classes/Player';
import store from '../redux/store';
import { patronsActionTypes } from '../redux/types/patronsTypes';
import { scoreActionTypes } from '../redux/types/scoreTypes';
import { ctx, canvas, drawPlayer } from './../index';
import afterGameOver from './afterGameOver';

export let animationId: any

export function animation() {

    animationId = requestAnimationFrame(animation)
    ctx!.fillStyle = "rgba(0,0,0,0.2)"
    ctx!.fillRect(0, 0, canvas.width, canvas.height)
    // player.draw()
    const player = drawPlayer()
    store.getState().patrons.forEach(patron => {
        patron.update()
    })
    store.getState().enemies.forEach((enemy) => {
        enemy.update()
        const distToPlayer = Math.hypot(enemy.x - canvas.width / 2, enemy.y - canvas.height / 2)
        if (distToPlayer - enemy.radius - player.radius < -3) {
            afterGameOver()
        }
        store.getState().patrons.forEach((patron) => {
            const distKill = Math.hypot(
                enemy.x - patron.x,
                enemy.y - patron.y
            )
            if (distKill - enemy.radius - patron.radius < 1) {
                store.dispatch({
                    type: scoreActionTypes.ADD_SCORE,
                    payload: 100
                })
                store.dispatch({
                    type: patronsActionTypes.REMOVE_PATRON,
                    payload: patron.id
                })
                store.dispatch({
                    type: enemiesActionTypes.REMOVE_ENEMY,
                    payload: enemy.id
                })
            }
            else if (patron.x < patron.radius || patron.x > canvas.width || patron.y < 0 || patron.y > canvas.height) {
                store.dispatch({
                    type: patronsActionTypes.REMOVE_PATRON,
                    payload: patron.id
                })
            }
        })
    })
}