import { useEffect, useState } from 'react';

export const useTimeoutState = (
    initialValue: string | undefined,
    duration: number = 8000
): string | undefined => {
    const [state, setState] = useState(initialValue);

    useEffect(() => {
        if (initialValue && duration > 0) {
            const timer = setTimeout(() => {
                setState('');
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [initialValue, duration]);

    return state;
};
