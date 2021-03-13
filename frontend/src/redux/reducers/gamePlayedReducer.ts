import { gameActionTypes, IGameAction, IGameState } from './../types/gameTypes';
const initState: IGameState = 0

const isPlayingReducer = (state: IGameState = initState, action: IGameAction) => {
    switch (action.type) {
        case gameActionTypes.BEFORE_GAME_START:
            return 0
        case gameActionTypes.GAME_IS_RUNNING:
            return 1
        case gameActionTypes.AFTER_GAME_OVER:
            return 2
        default:
            return state
    }
}
export default isPlayingReducer