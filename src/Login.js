import React from 'react';
// import "firebase/auth";

const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError } = props;
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={email}
                    onChange={(e) => setEmail(e.target.value)}

                ></input>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" autoFocus required value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    {
                        hasAccount ? (
                            <>
                                <button onClick={handleLogin}>Sign in </button>
                                <p>Don't have an account?<span onClick={() => setHasAccount(!hasAccount)
                                }>Sign up</span></p>
                            </>
                        ) : (
                            <>
                                <button onClick={handleSignUp}>Sign Up</button>
                                <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                </p>
                            </>
                        )

                    }

                </div>

            </div>
        </section >
    )
}
export default Login;