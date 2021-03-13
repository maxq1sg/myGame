import { isLoadingTypes } from './../types/isLoadingTypes';
import { isLoadinAction } from "../types/isLoadingTypes";

const isloadingReducer = (state:boolean=false,action:isLoadinAction)=>{
    switch(action.type){
        case isLoadingTypes.IS_LOADING:
            return !state
        default:
            return state
    }
}

export default isloadingReducer