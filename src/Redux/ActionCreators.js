import { ActionTypes } from "./Types";

export const LoadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType
    }
})
