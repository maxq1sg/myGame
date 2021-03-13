import { actionPatronType, IPatrons, patronsActionTypes } from './../types/patronsTypes';
const initialPatrons: IPatrons = []

const patronsReducer = (state: IPatrons = initialPatrons, action: actionPatronType) => {
    switch (action.type) {
        case patronsActionTypes.ADD_PATRON:
            return [...state, action.payload]
        case patronsActionTypes.REMOVE_PATRON: {
            return state.filter(item => item.id !== action.payload)
        }
        case patronsActionTypes.REMOVE_ALL_PATRONS: {
            return []
        }
        default:
            return state
    }
}

export default patronsReducer