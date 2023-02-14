import { createStore, applyMiddleware } from "redux";
// 用于支持异步action
import thunk from "redux-thunk";
import reducers from "./reducers";

export default createStore(reducers, applyMiddleware(thunk));