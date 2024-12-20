import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const client = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={domain}
    clientId={client}
    authorizationParams={{      
      redirect_uri: window.location.origin,
      audience: audience,
    }}
  >
    <App />
  </Auth0Provider>
);
