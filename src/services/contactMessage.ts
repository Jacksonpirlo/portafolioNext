import axios from "axios"
const API = "http://localhost:3000/api/contactMessage"
export const handleData = async (data: {}) => {
    const res = axios.post(API, data)
    return  (await res).data
}