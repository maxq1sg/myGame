import { IScoreAction, scoreActionTypes } from './../types/scoreTypes';
let initScore = 0


const scoreReducer = (state: number = initScore, action: IScoreAction) => {
    switch (action.type) {
        case scoreActionTypes.ADD_SCORE:
            return state + action.payload
        case scoreActionTypes.SCORE_TO_NULL:
            return 0
        default:
            return state
    }
}

export default scoreReducer