import { enemiesActionTypes, IEnemies, actionEnemyType } from './../types/enemiesTypes';
const initialEnemies: IEnemies = []

const enemiesReducer = (state: IEnemies = initialEnemies, action: actionEnemyType) => {
    switch (action.type) {
        case enemiesActionTypes.ADD_ENEMY:
            return [...state, action.payload]
        case enemiesActionTypes.REMOVE_ENEMY: {
            // const stateCopy = [...state]
            return state.filter(item => item.id !== action.payload)
        }
        case enemiesActionTypes.REMOVE_ALL_ENEMIES: {
            return []

        }
        default:
            return state
    }
}

export default enemiesReducer