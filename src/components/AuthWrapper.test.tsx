/* eslint-disable @typescript-eslint/ban-ts-comment */

import { render } from '@testing-library/react';
import {
    fetchAuthSession,
    signInWithRedirect,
    signOut,
} from 'aws-amplify/auth';
import { Cache } from 'aws-amplify/utils';
import { DateTime } from 'luxon';
import { beforeEach, describe, expect, vi } from 'vitest';
import AuthWrapper from './AuthWrapper';

vi.mock('aws-amplify/utils', () => ({
    Cache: {
        getItem: vi.fn(),
        setItem: vi.fn(),
        removeItem: vi.fn(),
        clear: vi.fn(),
    },
}));

vi.mock('aws-amplify/auth', () => ({
    signOut: vi.fn(),
    signInWithRedirect: vi.fn(),
    fetchAuthSession: vi.fn(),
    AuthSession: vi.fn(),
}));

describe('AuthWrapper', () => {
    const mockUrl = 'mockurl';
    const mockToken = 'mocktoken';

    beforeEach(() => {
        vi.clearAllMocks();

        Object.defineProperty(window, 'location', {
            writable: true,
            value: {
                href: mockUrl,
            },
        });

        vi.spyOn(window.sessionStorage, 'setItem');
    });

    test('useEffect runs correctly if token exists', async () => {
        // @ts-ignore
        (Cache.getItem as vi.Mock).mockResolvedValueOnce(mockToken);
        // @ts-ignore
        (Cache.getItem as vi.Mock).mockResolvedValueOnce(
            DateTime.now().toMillis()
        );

        render(
            <AuthWrapper>
                <></>
            </AuthWrapper>
        );

        await new Promise(setImmediate);

        expect(Cache.getItem).toHaveBeenCalledWith('jwtToken');
        expect(Cache.getItem).toHaveBeenCalledWith('signoutTimestamp');
    });

    test('throws error and calls signInWithRedirect if no token found after fetching auth session', async () => {
        // @ts-ignore
        (Cache.getItem as vi.Mock).mockResolvedValueOnce(null);
        // @ts-ignore
        (Cache.getItem as vi.Mock).mockResolvedValueOnce(
            DateTime.now().minus({ hours: 2 }).toMillis()
        );
        // @ts-ignore
        (fetchAuthSession as vi.Mock).mockResolvedValueOnce({
            tokens: {
                idToken: { toString: vi.fn().mockReturnValueOnce(null) },
            },
        });

        render(
            <AuthWrapper>
                <></>
            </AuthWrapper>
        );

        await new Promise(setImmediate);

        expect(Cache.removeItem).toHaveBeenCalledOnce();
        expect(sessionStorage.setItem).toHaveBeenCalledWith(
            'beforeLogin',
            mockUrl
        );
        expect(signOut).toHaveBeenCalledOnce();
        expect(fetchAuthSession).toHaveBeenCalledOnce();
        expect(signInWithRedirect).toHaveBeenCalledWith({
            provider: { custom: 'HENNGE' },
        });
    });

    test('sets jwt token and signout timestamp correctly', async () => {
        // @ts-ignore
        (Cache.getItem as vi.Mock).mockResolvedValueOnce(null);
        // @ts-ignore
        (Cache.getItem as vi.Mock).mockResolvedValueOnce(
            DateTime.now().minus({ hours: 2 }).toMillis()
        );
        // @ts-ignore
        (fetchAuthSession as vi.Mock).mockResolvedValueOnce({
            tokens: {
                idToken: { toString: vi.fn().mockReturnValueOnce(mockToken) },
            },
        });

        render(
            <AuthWrapper>
                <></>
            </AuthWrapper>
        );

        await new Promise(setImmediate);

        expect(Cache.removeItem).toHaveBeenCalledOnce();
        expect(sessionStorage.setItem).toHaveBeenCalledWith(
            'beforeLogin',
            mockUrl
        );
        expect(signOut).toHaveBeenCalledOnce();
        expect(fetchAuthSession).toHaveBeenCalledOnce();
        expect(Cache.clear).toHaveBeenCalledOnce();
        expect(Cache.setItem).toHaveBeenCalledWith(
            'jwtToken',
            mockToken,
            expect.objectContaining({
                expires: expect.any(Number),
            })
        );
        expect(Cache.setItem).toHaveBeenCalledWith(
            'signoutTimestamp',
            expect.any(Number),
            expect.objectContaining({
                expires: expect.any(Number),
            })
        );
    });

    test('expect url to be saved in session storage if beforeLogin does not already exist in there', async () => {
        // @ts-ignore
        (Cache.getItem as vi.Mock).mockResolvedValueOnce(null);
        // @ts-ignore
        (Cache.getItem as vi.Mock).mockResolvedValueOnce(null);

        render(
            <AuthWrapper>
                <></>
            </AuthWrapper>
        );

        await new Promise(setImmediate);

        expect(sessionStorage.setItem).toHaveBeenCalledWith(
            'beforeLogin',
            mockUrl
        );
    });
});
