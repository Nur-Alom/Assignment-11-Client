import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const provider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState({});

    const GoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setLoading(false);
        });
    }, []);

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUsers({});
            })
            .catch(error => {
                console.log(error.message)
            })
            .finally(() => setLoading(false));
    };

    return {
        users,
        loading,
        logOut,
        GoogleLogin
    }
}

export default useFirebase;


