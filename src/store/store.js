import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
