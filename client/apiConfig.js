import axios from 'axios';

const fetchAxios = axios.create({
    baseURL: 'http://localhost:3333', // Replace with your API endpoint
    headers: {
        'Content-Type': 'application/json', // Set the default content type for request headers
    },
});

export default fetchAxios;