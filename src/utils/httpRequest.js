import axios from 'axios';

// instance request
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// customize get
const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res.data;
};

export { request, get };
