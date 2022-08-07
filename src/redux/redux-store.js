import { combineReducers, configureStore } from "redux";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
  contenPage: contentReducer,
  dialogsPage: dialogsReducer,
});

let store = configureStore(reducers);

export default store;
