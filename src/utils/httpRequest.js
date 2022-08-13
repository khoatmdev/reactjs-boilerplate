import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
});

export const get = async (url, config = {}) => {
    const response = await httpRequest.get(url, config);

    return response.data;
};

export default httpRequest;
