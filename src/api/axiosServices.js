import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://staging.tmrw.com.sg/fiction/cms/web/api',
    baseURL: 'https://api.fiction.com.sg/api',
    // withCredentials: false,
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    "Access-Control-Allow-Origin":'*'
});

export default api;