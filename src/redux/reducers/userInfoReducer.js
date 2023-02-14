import { DEL_USER_INFO, SET_USER_INFO } from "../contants";

export default function userInfoReduder(prestate=null, action) {
    const {type, data} = action
    switch (type) {
        case SET_USER_INFO:
            return data;
        case DEL_USER_INFO:
            return null;
        default: 
            return null;
    }

}