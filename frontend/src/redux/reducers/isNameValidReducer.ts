import { isNameValidTypes, isNameValidAction } from './../types/isNameValidtypes';
const isNameValidReducer = (state = false, action: isNameValidAction) => {
    switch (action.type) {
        case isNameValidTypes.IS_VALID:
            return true
        case isNameValidTypes.RESET_VALID:
            return false
        default:
            return state
    }
}

export default isNameValidReducer