import { ISpeedAction, speedActionTypes } from './../types/speedTypes';
let initSpeed = 1000


const speedReducer = (state: number = initSpeed, action: ISpeedAction) => {
    switch (action.type) {
        case speedActionTypes.ADD_SPEED:
            return state > 200 ? state - 200 : 200
        case speedActionTypes.SPEED_TO_NULL:
            return 1000
        default:
            return state
    }
}

export default speedReducer