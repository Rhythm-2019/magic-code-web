import { combineReducers } from "redux";
import userInfoReduder from "./userInfoReducer";

export default combineReducers({
    userInfo: userInfoReduder,
})