import axios from 'axios';

const API = axios.create({
    // baseURL: process.env.BASE_URL ,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetcher = (url) => API.get(url).then((res) => res.data);

export default API;
