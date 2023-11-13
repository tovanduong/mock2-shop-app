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

// export function postSignUp({ username, password, email }) {
//     return axiosClient.post(POST_SIGNUP, {
//         username,
//         email,
//         password,
//     })
//         .then(res => {
//             return res.data
//         })
//         .catch(err => {
//         })
// }

// export function postForgot({ email }) {
//     return axiosClient.post(POST_FORGOT, {
//         email,
//     })
//         .then(res => {
//             return res.data
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }


// export function postSendVerify({ deviceId }) {
//     return axiosClient.post(POST_SEND_VERIFY_EMAIL, {
//         deviceId,
//     })
//         .then(res => {
//             console.log(res)
//             return res
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// export function postVerify({ token, deviceId }) {
//     return axiosClient.post(POST_VERIFY_EMAIL + token, {
//         deviceId,
//     })
//         .then(res => {
//             return res.data
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// export function postLogOut({ refreshToken, deviceId }) {
//     return axiosClient.post(POST_LOGOUT, {
//         refreshToken,
//         deviceId,
//     })
//         .then(res => {
//             return res.data
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }