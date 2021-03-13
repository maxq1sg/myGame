import store from '../redux/store';
import { speedActionTypes } from '../redux/types/speedTypes';
import { messageContainer } from './../index';
export default function showMessage() {
    store.dispatch({
        type: speedActionTypes.ADD_SPEED
    })
    if (store.getState().speed > 200) {
        messageContainer!.innerHTML = "Игра ускоряется"
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            messageContainer!.innerHTML = ""
            resolve("success")
        }, 1500)
    })
}