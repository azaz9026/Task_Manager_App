import { toast } from 'react-toastify';

export const notify = (message, type) => {
    toast[type](message);
}

export const API_URL = 'https://deploy-mern-app1-api-nine.vercel.app';
