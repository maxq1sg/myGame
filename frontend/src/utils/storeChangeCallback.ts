import { modalContainer } from './../index';
import setScores from "../DOM/setScores"
import { afterPlay, hideWelcomePlayer, welcomePlayer } from "./modalContainer"
import store from '../redux/store';
import showMessage from './message';


let gamePhase = 0
let speedId: number
const storeChangeCallback = () => {
    if (gamePhase !== store.getState().gamePhase) {
        gamePhase = store.getState().gamePhase
        switch (store.getState().gamePhase) {
            case 0: {
                welcomePlayer()
                break
            }
            case 1: {
                speedId = setInterval(showMessage, 8000)
                hideWelcomePlayer();
                (<HTMLElement>modalContainer)!.style.display = "none"

                break
            }
            case 2: {
                clearInterval(speedId);
                (<HTMLElement>modalContainer)!.style.display = "block"
                afterPlay()
                break
            }
        }
    }
    setScores()

}

export default storeChangeCallback