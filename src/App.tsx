import React from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginPage } from './login/components/login-component';
import { SignIn } from './sign-in/components/signin-component';

const App: React.FunctionComponent = () => {
    return (
      <div className="App">
        <Router>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Router>
      </div>
  );
}

export default App;
