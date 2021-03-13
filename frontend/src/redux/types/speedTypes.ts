export enum speedActionTypes {
    ADD_SPEED = "ADD_SPEED",
    SPEED_TO_NULL = "SPEED_TO_NULL"
}


type speedType = speedActionTypes.ADD_SPEED | speedActionTypes.SPEED_TO_NULL
export interface ISpeedAction {
    type: speedType
}
