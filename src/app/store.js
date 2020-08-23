import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import productReducer from "../productReducers";
import thunk from "redux-thunk";

export default createStore(productReducer, applyMiddleware(thunk));
