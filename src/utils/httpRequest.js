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

// customize post
const post = async (path, options = {}) => {
    const res = await request.post(path, options);
    return res.data;
};

const httpRequest = { request, get, post };

export default httpRequest;
