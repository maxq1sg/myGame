export enum isNameValidTypes {
    IS_VALID = "IS_VALID",
    RESET_VALID = "RESET_VALID"
}


export interface isNameValidAction {
    type: isNameValidTypes.IS_VALID | isNameValidTypes.RESET_VALID
}

