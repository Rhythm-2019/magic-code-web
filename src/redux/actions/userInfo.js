import { DEL_USER_INFO, SET_USER_INFO } from "../contants";

export const createUpdateUserInfoAction = data => {
    return (dispatch) => {
        // TODO 查发送请求查询用户信息
        dispatch({type: SET_USER_INFO, data})
    }
}

export const remoteUserInfo = () => ({type: DEL_USER_INFO})