import { useState } from "react"
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        const gooleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, gooleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => {
            error(error.message);
        })
    }

    return {user, signInWithGoogle};
}

export default useFirebase;