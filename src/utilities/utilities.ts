import axios from 'axios';

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
