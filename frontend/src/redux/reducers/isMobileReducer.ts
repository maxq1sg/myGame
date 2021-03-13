import { isMobileTypes, isMobileAction } from './../types/isMobileTypes';
const isMobileReducer = (state = false, action: isMobileAction) => {
    switch (action.type) {
        case isMobileTypes.IS_MOBILE:
            return true
        default:
            return state
    }
}


export default isMobileReducer