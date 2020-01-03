import { ActionTypes, DataTypes } from "./Types";
import { district } from './../Data/districts';
import { provinces } from './../Data/provinces';
import { nations } from './../Data/nations';
import { religions } from './../Data/religions';

const getData = (dataTypes)=>{
    switch(dataTypes){
        case DataTypes.PROVINCES:
            return provinces;
        case DataTypes.DISTRICTS:
            return district;
        case DataTypes.NATIONS:
            return nations;
        case DataTypes.RELIGIONS:
            return religions;
    }
}

export const PassportReducer = (store, action) => {
    switch(action.type){
        case ActionTypes.DATA_LOAD:
            return {
                ...store,
                [action.payload.dataType]: getData(action.payload.dataType)
            }
        default:
            return store || {}
    }
}