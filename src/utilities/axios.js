import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:3000/'
})
instance.interceptors.response.use(
    res=>res.data,
    err=>{return Promise.reject(err)}
);

export default instance