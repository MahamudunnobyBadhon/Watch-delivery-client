import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, onAuthStateChanged, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import axios from "axios";
import { useHistory } from "react-router";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState ('');

    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const history = useHistory();


    

    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            const newUser = {email: user.email, displayName: user.displayName};
            console.log(newUser);
            
            axios.put(`https://stormy-reaches-83687.herokuapp.com/users`, newUser)
            .then(res => {
            if(res.data.insertedId){
                alert('User added successfully');
            }
        })
            
        })
        .catch((error) => {
            setError(error);
        })     
        .finally(() => setIsLoading(false));
        
    }

    const signUpUsingEmailAndPassword = (email, password, name, role, history) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then( result => {
            setUser(result.user);
            const newUser = {email, displayName: name};
            setUser(newUser);

            // set user to database
            setUserToDatabase(email, name, role);

            // Send name to firebase after creation

            updateProfile(auth.currentUser,{
                displayName: name
            }).then(()=>{

            }).catch(error =>{

            });
            // history.replace('/');
        })
        .catch((error)=>{
            setError(error.message);
        })
    }

    const signInUsingEmailAndPassword = (email, password, location,  history) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
           
            
            if(admin){

                history.replace('/dashboard');
                
            }
            else{
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }
            
             // history.replace('/');
            
        })
        .catch((error)=>{
            setError(error.message);
        })
    }

    useEffect(()=>{
        fetch(`https://stormy-reaches-83687.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email]);

    



    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser('');
            
        }).finally(()=>setIsLoading(false));
    }


    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser('');
            }
            setIsLoading(false);
          });
    },[auth]);

    const setUserToDatabase = (email, displayName, role) =>{

        const user ={
            email, displayName, role
        };
        
       
        axios.post(`https://stormy-reaches-83687.herokuapp.com/users`, user)
        .then(res => {
            if(res.data.insertedId){
                alert('User added successfully');
            }
        })

    }

    return {
        isLoading,
        user,
        error,
        admin,
        logOut,
        signInUsingGoogle,
        signUpUsingEmailAndPassword,
        signInUsingEmailAndPassword
    }
}

export default useFirebase;