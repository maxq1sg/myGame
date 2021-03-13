import { isMobileTypes } from './redux/types/isMobileTypes';
import Player from "./classes/Player"
import store from "./redux/store"
import './style/main.scss'
import { createCanvas } from "./utils/utils"
import { leaderList, saveResultForm, welcomePlayer } from './utils/modalContainer';
import { canvasClickHandler, leaderClickHandler, newGameClickHandler } from './utils/clickHandlers';
import storeChangeCallback from './utils/storeChangeCallback';
import { isMobile } from "./utils/checkHeight";


export const canvas = <HTMLCanvasElement>document.getElementById('template')
export const ctx = canvas.getContext("2d")

// createCanvas(ctx)



//---------------------dom
export const modalContainer = document.querySelector('.modal__container')
export const messageContainer = document.querySelector(".message")
welcomePlayer()
export const scoresContainer = document.querySelector('.scores')

//-------------------
//event-listeners----------------------
document.addEventListener("submit", async (e: any) => {
    e.preventDefault()
    if (e.target.classList.contains("form__result")) {
        if (store.getState().isNameValid) {
            const name = new FormData(e.target).get("name")
            leaderList(false, name)
        }
    }
})

document.addEventListener('click', (e: any) => {
    if (e.target.classList.contains("button__new-game")) {
        newGameClickHandler()
    }
    else if (e.target.classList.contains("button__leader-list")) {
        leaderClickHandler()
    }
    else if (e.target.classList.contains("button__save-result")) {
        saveResultForm()
    }
    else if (e.target.classList.contains("message") || e.target.classList.contains("scores")) {
        canvasClickHandler(e)
    }
})


canvas.addEventListener('click', canvasClickHandler)
//-------------------------------------

export function drawPlayer() {
    const playerRadius = canvas.width / 10 > 50 ? 40 : canvas.width / 10
    const player = new Player(canvas.width / 2, canvas.height / 2, playerRadius, "white")
    player.draw()
    return player
}
if (isMobile()) {
    store.dispatch({
        type: isMobileTypes.IS_MOBILE
    })
}

window.addEventListener("resize", () => {
    createCanvas(ctx)
    drawPlayer()
})

const unsubscribe = store.subscribe(storeChangeCallback)

