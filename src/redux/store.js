import {  dialogStateReducer, rootReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";


const store =  configureStore(
    {
        reducer: {
            dropData : rootReducer,
            dialogState : dialogStateReducer
        }
    }
)

export default store