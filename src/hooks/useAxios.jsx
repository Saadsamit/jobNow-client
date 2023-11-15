import axios from "axios";

const instance = axios.create({
    // http://localhost:5000
    // https://jobnow.vercel.app
    baseURL: "https://jobnow.vercel.app/api/v1",
    withCredentials:true
})
const useAxios = () => {
    return instance
};

export default useAxios;