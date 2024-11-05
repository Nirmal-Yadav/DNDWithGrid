import {CLEAR_DROP_DATA, CLOSE_DIALOG, OPEN_DIALOG, SET_DROP_DATA} from './actions'

const initialState = {
    dropData :""
}

const initialDialogState = false

export const rootReducer = (state=initialState , action) =>{

    switch(action.type){

     case  SET_DROP_DATA:

     return {
        ...state,
        dropData:action.payload,
     }
     case CLEAR_DROP_DATA:
        return "";
     default:
        return state;

    }
}


export const  dialogStateReducer = ( state = initialDialogState,action)=>{

    switch(action.type){
        case OPEN_DIALOG :return state= true;
        case CLOSE_DIALOG : return state = false
        default : return state
    }
}