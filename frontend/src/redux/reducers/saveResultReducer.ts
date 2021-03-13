import { saveResultType, saveAction, saveResultActions } from './../types/savedTypes';
const saveResultReducer = (state = false, action: saveAction) => {
    switch (action.type) {
        case saveResultActions.CHANGE_SAVED:
            return true
        case saveResultActions.CANCEL_SAVED:
            return false
        default:
            return state
    }
}

export default saveResultReducer