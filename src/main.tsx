import { Amplify } from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

Amplify.configure({
    Auth: {
        Cognito: {
            identityPoolId: import.meta.env.VITE_AMPLIFY_IDENTITY_POOL_ID,
            userPoolId: import.meta.env.VITE_AMPLIFY_USERPOOL_ID,
            userPoolClientId: import.meta.env
                .VITE_AMPLIFY_USERPOOL_WEBCLIENT_ID,
            loginWith: {
                oauth: {
                    domain: import.meta.env.VITE_AMPLIFY_OAUTH_DOMAIN,
                    scopes: import.meta.env.VITE_AMPLIFY_OAUTH_SCOPE.split(' '),
                    redirectSignIn: [
                        import.meta.env.VITE_AMPLIFY_OAUTH_REDIRECT_URL,
                    ],
                    redirectSignOut: [
                        import.meta.env.VITE_AMPLIFY_OAUTH_REDIRECT_URL,
                    ],
                    responseType: 'code',
                },
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
