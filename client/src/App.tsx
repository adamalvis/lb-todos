import React from 'react';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl,  } from '@okta/okta-auth-js';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC<{
  oktaAuth: OktaAuth,
}> = ({ oktaAuth }) => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth: OktaAuth, originalUri: string) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    <Router>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <SecureRoute path='/' exact={true} component={Home} />
        <Route path='/login/callback' component={LoginCallback} />
      </Security>
    </Router>
  );
};

export default App;
