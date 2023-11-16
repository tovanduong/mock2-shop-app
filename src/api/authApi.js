// import { POST_LOGIN, POST_SIGNUP, POST_FORGOT, POST_SEND_VERIFY_EMAIL, POST_VERIFY_EMAIL, POST_LOGOUT } from '../constants/SubUrl/';
import axiosClient from './axiosClient';

export function postLogin({ password, username }) {
    return axiosClient.post("", {
        password,
        username,
    })
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
        })
}
