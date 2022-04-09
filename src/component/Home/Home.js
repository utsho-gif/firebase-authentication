import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <h2>This is Home</h2>
            <h2>Current user is: { user? user.displayName : 'Nobody'}</h2>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Home;