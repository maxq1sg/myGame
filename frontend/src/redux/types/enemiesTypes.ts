import Enemy from "../../classes/Enemy";

export enum enemiesActionTypes {
    ADD_ENEMY = "ADD_ENEMY",
    REMOVE_ENEMY = "REMOVE_ENEMY",
    REMOVE_ALL_ENEMIES = "REMOVE_ALL_ENEMIES"
}


type enemyType = enemiesActionTypes.ADD_ENEMY | enemiesActionTypes.REMOVE_ENEMY|enemiesActionTypes.REMOVE_ALL_ENEMIES
export interface addEnemyAction {
    type: enemiesActionTypes.ADD_ENEMY
    payload: Enemy
}
export interface removeEnemyAction {
    type: enemiesActionTypes.REMOVE_ENEMY
    payload: string
}
export interface removeAllEnemiesAction {
    type: enemiesActionTypes.REMOVE_ALL_ENEMIES
}
export type actionEnemyType = addEnemyAction | removeEnemyAction |removeAllEnemiesAction
export type IEnemies = Enemy[] | []
