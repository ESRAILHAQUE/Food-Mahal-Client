import axios from "axios"

const axiosSecure = axios.create({
    baseURL: "https://testing-sand-phi.vercel.app",
    withCredentials: true
});
function UseAxios() {
    return axiosSecure;
}
export default UseAxios