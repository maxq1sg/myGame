export enum saveResultActions {
    CHANGE_SAVED = "CHANGE_SAVED",
    CANCEL_SAVED = "CANCEL_SAVED"
}
export type saveResultType = saveResultActions.CHANGE_SAVED | saveResultActions.CANCEL_SAVED
export interface saveAction {
    type: saveResultType
}

