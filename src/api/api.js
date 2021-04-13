import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://http://dev.trainee.dex-it.ru/api/",
});

// export const usersAPI = {
//     getUsers(currentPage = 1, pageSize = 10) {
//         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(response => {
//                 return response.data;
//             })
//     },
//     follow(userId) {
//         return instance.post(`follow/` + userId)
//             .then(response => {
//                 return response.data;
//             })
//     },
//     unfollow(userId) {
//         return instance.delete(`follow/` + userId)
//             .then(response => {
//                 return response.data;
//             })
//     },
//     getProfile(userId) {
//         console.log("Use old request. Please use profileAPI.")
//         return profileAPI.getProfile(userId)
//     }
// }

export const authAPI = {
    signUp(userName, login, password) {
        return instance.post(`Auth/SignUp`, {userName, login, password})
    },
    signIn(login, password) {
        return instance.post(`Auth/SignIn`, {login, password});
    }
}

// export const profileAPI = {
//     getProfile(userId) {
//         return instance.get(`profile/` + userId)
//     },
//     getStatus(userId) {
//         return instance.get(`profile/status/` + userId)
//     },
//     updateStatus(status) {
//         return instance.put(`profile/status`, {status})
//     }
// }

