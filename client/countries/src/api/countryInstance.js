import axios from "axios";

export const countryIns = axios.create({
    baseURL: 'http://localhost:3001'
})