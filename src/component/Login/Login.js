import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();

    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="" id="" placeholder='Your Email'/>
                <br />
                <input type="password" name="" id="" placeholder='Password'/>
                <br />
                <button type="submit">Login</button>
                <br />
                <button onClick={signInWithGoogle}>Sign in With Google</button>
            </form>
        </div>
    );
};

export default Login;