import axios from 'axios';
import highCount from '../assets/hight-count.svg';
import lowCount from '../assets/low-count.svg';
import midCount from '../assets/mid-count.svg';

export const fetcher = async <T>(
    endpoint: string,
    body?: { email: string }
) => {
    const url = `${import.meta.env.VITE_CASVAL_URL}${endpoint}`;

    const response = await axios.post(url, {
        client_id: import.meta.env.VITE_TENANT_ID,
        client_secret: import.meta.env.VITE_SECRET,
        ...(body && { email: body.email }),
    });

    return response.data as T;
};

export const kasvotFetcher = async <T>(query: string): Promise<T> => {
    if (!query) {
        throw new Error('No query');
    }

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

    return response.data.data as T;
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

export const parseEmail = (email: string): string => {
    const namePart = email.split('@')[0];

    const [firstName, lastName] = namePart.split('.');

    const capitalize = (name: string) =>
        name.charAt(0).toUpperCase() + name.slice(1);

    return `${capitalize(firstName)} ${capitalize(lastName)}`;
};
