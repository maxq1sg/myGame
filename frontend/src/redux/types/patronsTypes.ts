import Patron from "../../classes/Patron"

export enum patronsActionTypes {
    ADD_PATRON = "ADD_PATRON",
    REMOVE_PATRON = "REMOVE_PATRON",
    REMOVE_ALL_PATRONS="REMOVE_ALL_PATRONS"
}


type patronType = patronsActionTypes.ADD_PATRON | patronsActionTypes.REMOVE_PATRON
interface addPatronsAction {
    type: patronsActionTypes.ADD_PATRON
    payload: Patron
}
interface removePatronsAction {
    type: patronsActionTypes.REMOVE_PATRON
    payload: string
}
export interface removeAllPatronsAction {
    type: patronsActionTypes.REMOVE_ALL_PATRONS
}
export type actionPatronType = addPatronsAction | removePatronsAction |removeAllPatronsAction


export type IPatrons = Patron[] | []
