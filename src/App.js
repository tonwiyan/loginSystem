
import './App.css';
import React, { useState, useEffect } from 'react';

import Login from './Login';
import Home from './Home';
import fire from './fire';



function App() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [hasAccount, setHasAccount] = useState();

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };
  const handleLogin = () => {
    clearErrors();
    fire.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignUp = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {

    fire.auth().signOut();
  };
  const authListener = () => {

    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      }
      else {
        setUser("");
      }
    });
  };


  useEffect(() => {
    authListener();
  }, []);


  return (
    <div className="App">
      {user ? (
        <Home handleLogout={handleLogout}></Home>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        ></Login>
      )}


    </div>
  );
}
export default App;
