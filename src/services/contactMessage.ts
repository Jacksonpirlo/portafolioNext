import axios from "axios"
const API = "http://localhost:3000/api/contactMessage"
export const handleData = async (data: Record<string, unknown>) => {
    const res = await axios.post(API, data)
    return res.data
}