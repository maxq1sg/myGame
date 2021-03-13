import { isNameValidTypes } from './../redux/types/isNameValidtypes';
import store from "../redux/store"

export default function formValidation(input: HTMLInputElement) {
    const alertMessage = document.querySelector(".alert-message")
    const nameLength = input!.value.length
    if (nameLength < 1 || nameLength > 16) {
        alertMessage!.innerHTML = "*имя должно включать от 1 до 16 символов"
        store.dispatch({
            type: isNameValidTypes.RESET_VALID
        })
    } else {
        alertMessage!.innerHTML = ""
        store.dispatch({
            type: isNameValidTypes.IS_VALID
        })
    }
}