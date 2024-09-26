import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import {
    mockCasvalUserLocation,
    mockCasvalUserLocationTwo,
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
    async (info) => {
        const body = JSON.parse(
            (
                await info.request.body?.getReader().read()
            )?.value?.toString() as string
        );

        if (body.email === 'member.test@example.com') {
            return HttpResponse.json(mockCasvalUserLocationTwo[0]);
        } else if (body.email === 'member.test2@example.com') {
            return HttpResponse.json(mockCasvalUserLocationTwo[1]);
        } else if (body.email === 'member.test3@example.com') {
            return HttpResponse.json(mockCasvalUserLocationTwo[2]);
        } else if (body.email === 'member.test4@example.com') {
            return HttpResponse.json(mockCasvalUserLocationTwo[3]);
        } else if (body.email === 'member.test5@example.com') {
            return HttpResponse.json(mockCasvalUserLocationTwo[4]);
        } else {
            return HttpResponse.json(mockCasvalUserLocation);
        }
    }
);

const handlers = [kasvotMockResponse, casvalMockResponse];

export const mswServer = setupServer(...handlers);
