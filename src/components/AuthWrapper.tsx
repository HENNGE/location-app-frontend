import {
    AuthSession,
    fetchAuthSession,
    signInWithRedirect,
    signOut,
} from 'aws-amplify/auth';
import { Cache } from 'aws-amplify/utils';
import { DateTime } from 'luxon';
import { ReactNode, useEffect } from 'react';

const AuthWrapper = ({ children }: { children: ReactNode }) => {
    const LOGIN_PERIOD_MINUTES = 60;

    useEffect(() => {
        (async () => {
            const token = await Cache.getItem('jwtToken');
            const timestamp = await Cache.getItem('signoutTimestamp');

            if (!token) {
                if (
                    timestamp &&
                    (DateTime.now()
                        .diff(DateTime.fromMillis(timestamp), ['minute'])
                        .toObject().minutes as number) > LOGIN_PERIOD_MINUTES
                ) {
                    sessionStorage.setItem('beforeLogin', window.location.href);
                    Cache.removeItem('signoutTimestamp');
                    await signOut();
                }

                if (!sessionStorage.getItem('beforeLogin')) {
                    sessionStorage.setItem('beforeLogin', window.location.href);
                }

                try {
                    const cognitoUser: AuthSession = await fetchAuthSession();

                    const token = cognitoUser.tokens?.idToken?.toString();

                    if (!token) {
                        throw new Error(
                            'Authentication error: No JWT token found'
                        );
                    }

                    const loginExpiry = DateTime.now().plus({
                        minutes: LOGIN_PERIOD_MINUTES,
                    });

                    Cache.clear();
                    Cache.setItem('jwtToken', token, {
                        expires: loginExpiry.toMillis(),
                    });
                    Cache.setItem(
                        'signoutTimestamp',
                        DateTime.now().toMillis()
                    );

                    const beforeLoginUrl =
                        sessionStorage.getItem('beforeLogin');
                    sessionStorage.removeItem('beforeLogin');

                    window.location.replace(beforeLoginUrl || '');
                } catch (_) {
                    signInWithRedirect({ provider: { custom: 'HENNGE' } });
                }
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};

export default AuthWrapper;
