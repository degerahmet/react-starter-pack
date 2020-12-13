import { createStore } from "redux";
// import rootReducer from "./index";


export default function configureStore(){
    return createStore(rootReducer) //createStore'a reducerın arg vereceğiz
}