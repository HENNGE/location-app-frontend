import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import {
    mockCasvalUserLocation,
    mockDepartments,
    mockMembers,
} from './mockData';

export const kasvotMockResponse = http.post(
    import.meta.env.VITE_KASVOT_URL,
    async (info) => {
        const body = JSON.parse(
            (
                await info.request.body?.getReader().read()
            )?.value?.toString() as string
        );

        if (body.query.includes('query{member')) {
            return HttpResponse.json({
                data: { member: mockMembers },
            });
        } else if (body.query.includes('query{department')) {
            return HttpResponse.json({
                data: { department: mockDepartments },
            });
        }
    }
);

export const casvalMockResponse = http.post(
    `${import.meta.env.VITE_CASVAL_URL}/query-location`,
    async () => {
        return HttpResponse.json(mockCasvalUserLocation);
    }
);

const handlers = [kasvotMockResponse, casvalMockResponse];

export const mswServer = setupServer(...handlers);
