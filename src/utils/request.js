import axios from 'axios';

// instance request
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// customize get
const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res.data;
};

export { request, get };
