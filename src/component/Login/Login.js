import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import {FcGoogle} from 'react-icons/fc';


const auth = getAuth(app);

const Login = () => {
    const [singInWithGoogle] = useSignInWithGoogle(auth);

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
                <button style={{marginTop:'10px', borderRadius:'10px', cursor:'pointer'}} onClick={() => singInWithGoogle()}><FcGoogle style={{fontSize: '30px'}}></FcGoogle></button>
            </form>
        </div>
    );
};

export default Login;