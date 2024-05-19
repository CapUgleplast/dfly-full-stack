import axios from 'axios';

export const fetchAxios = axios.create({
    baseURL: 'http://localhost:3333/', // Replace with your API endpoint
    headers: {
        'Content-Type': 'application/json', // Set the default content type for request headers
    },
});

export const localAxios = axios.create({
    baseURL: 'http://localhost:3000/', // Replace with your API endpoint
    headers: {
        'Content-Type': 'application/json', // Set the default content type for request headers
    },
});