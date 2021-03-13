export enum scoreActionTypes {
    ADD_SCORE = "ADD_SCORE",
    SCORE_TO_NULL = "SCORE_TO_NULL"
}


type scoreType = scoreActionTypes.ADD_SCORE | scoreActionTypes.SCORE_TO_NULL
export interface IScoreAction {
    type: scoreType
    payload: number
}
