import axios from "axios"
const API = "https://portafolio-next-mocha.vercel.app/api/contactMessage"
export const handleData = async (data: Record<string, unknown>) => {
    const res = await axios.post(API, data)
    return res.data
}