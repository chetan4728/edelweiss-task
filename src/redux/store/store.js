import {  configureStore } from '@reduxjs/toolkit'
import formReducer from "../reducers/formReducer";

const store = configureStore({
    reducer: formReducer
  })

export default store;