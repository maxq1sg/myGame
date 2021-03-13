import { createStore, combineReducers, applyMiddleware } from "redux"
import enemiesReducer from "./reducers/enemiesReducer"
import isPlayingReducer from "./reducers/gamePlayedReducer"
import patronsReducer from "./reducers/patronsReducer"
import scoreReducer from "./reducers/scorsReducer"
import logger from 'redux-logger'
import saveResultReducer from "./reducers/saveResultReducer"
import isloadingReducer from "./reducers/isLoadingReducer"
import speedReducer from "./reducers/speedReducer"
import isMobileReducer from "./reducers/isMobileReducer"
import isNameValidReducer from "./reducers/isNameValidReducer"

const rootReducer = combineReducers({
    enemies: enemiesReducer,
    patrons: patronsReducer,
    score: scoreReducer,
    gamePhase: isPlayingReducer,
    saved: saveResultReducer,
    isLoading: isloadingReducer,
    speed: speedReducer,
    isMobile: isMobileReducer,
    isNameValid:isNameValidReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))
export default store