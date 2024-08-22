import { useMemo } from 'react';
import { CasvalUser, CasvalUserLocation } from '../types/casval.types';

const useFilteredData = (
    data: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[]
) => {
    return useMemo(() => {
        const output: {
            [key: string]: {
                user: CasvalUser;
                userLocation: CasvalUserLocation;
            }[];
        } = {};

        data.forEach((user) => {
            if (output[user.userLocation.name]) {
                output[user.userLocation.name].push(user);
            } else {
                output[user.userLocation.name] = [user];
            }
        });

        return output;
    }, [data]);
};

export default useFilteredData;
