export enum gameActionTypes {
    GAME_IS_RUNNING = "GAME_IS_RUNNING",
    BEFORE_GAME_START = "BEFORE_GAME_START",
    AFTER_GAME_OVER = "AFTER_GAME_OVER"
}


export interface IGameAction {
    type: gameActionTypes
}

export type IGameState = 0 | 1 | 2