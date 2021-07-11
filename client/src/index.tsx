import React from 'react';
import ReactDOM from 'react-dom';
import { http } from './core';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + '/login/callback'
});

const accessToken = oktaAuth.getAccessToken();
console.log(accessToken);

if (accessToken) {
  http.setAccessToken(accessToken);
}

ReactDOM.render(
  <React.StrictMode>
    <App oktaAuth={oktaAuth} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
