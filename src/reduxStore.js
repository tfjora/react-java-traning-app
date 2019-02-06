import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const initialState = {};
const enhancers = [];

// If we're in development, enable the 'Redux dev tools' browser extension
if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

// Create and pass in all middleware we'll use. In our case, only 'redux-thunk'.
const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
);

// Create the Redux store
const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;