import { useEffect, useState } from 'react';

export const useTemporaryState = (
    initialValue: string | undefined,
    duration = 8000
) => {
    const [state, setState] = useState(initialValue);

    useEffect(() => {
        if (initialValue) {
            const timer = setTimeout(() => {
                setState('');
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [initialValue, duration]);

    return state;
};
