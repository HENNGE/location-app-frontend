import axios from 'axios';
import highCount from '../assets/hight-count.svg';
import lowCount from '../assets/low-count.svg';
import midCount from '../assets/mid-count.svg';

export const fetcher = async (endpoint: string) => {
    const url = `${import.meta.env.VITE_CASVAL_URL}${endpoint}`;

    const response = await axios.post(url, {
        client_id: import.meta.env.VITE_TENANT_ID,
        client_secret: import.meta.env.VITE_SECRET,
    });

    return response.data;
};

export const kasvotFetcher = async (query: string) => {
    const url = `${import.meta.env.VITE_KASVOT_URL}`;

    const response = await axios.post(
        url,
        {
            query,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': import.meta.env.VITE_KASVOT_API_KEY,
            },
        }
    );

    return response.data;
};

export const getCountIcon = (count: number) => {
    if (count === 1) {
        return lowCount;
    } else if (count === 2) {
        return midCount;
    } else if (count >= 3) {
        return highCount;
    } else {
        return;
    }
};
