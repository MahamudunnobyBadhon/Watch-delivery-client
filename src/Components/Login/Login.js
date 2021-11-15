
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';

import BottomPart from '../SharedComponents/BottomPart/BottomPart';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';


const Login = () => {

    const {signInUsingGoogle, signInUsingEmailAndPassword, error} = useAuth();

    const [email, setLoginEmail] = useState ('');
    const [password, setLoginPass] = useState('');


    const location = useLocation();
    const history = useHistory();
    // console.log(history);
    // console.log(location.state);
     let redirect_uri = '';
     if(location?.state === undefined){
        location.href = <Login></Login>
    }

    // //const redirect_uri = location?.state.from || '/home';
    else{ redirect_uri = location?.state.from || `/home`;}
    //console.log(location.state.from);

    

    const handleGoogleLogin = () => {
        signInUsingGoogle();
        history.push(redirect_uri);
        // .then(result => {
        //     history.push(redirect_uri);
        //     console.log(result.user);
        // })
    }

    
    

    const loginEmailInput = (e) => {
        setLoginEmail(e.target.value);
    }

    const loginPassInput = (e) => {
        setLoginPass(e.target.value);
    }
    const LoginFOrmHandleOnSubmit = (e) =>{
        e.preventDefault ();

        signInUsingEmailAndPassword(email, password, location, history);

    }
    
    return (
        <div>
            <Header></Header>

            <h2 className="text-center">Log In</h2>
            <form className="w-50 mx-auto mt-1 mb-3 login-form" onSubmit={LoginFOrmHandleOnSubmit}>
            <div className="mb-3">
                <label style={{
                    fontWeight: 'bold'
                }}  htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={loginEmailInput} type="email" className="form-control" id="loginInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label style={{
                    fontWeight: 'bold'
                }}  htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onBlur={loginPassInput}type="password" className="form-control" id="loginInputPassword1" required/>
            </div>
            { !error ? 
                 <p></p> 
                : <p style={{color: 'red'}}>{error}</p>
            }
            <button type="submit" className="btn btn-primary w-100">Submit</button>
            <p style={{fontSize: '14px', textAlign: 'center', fontWeight: 'bold'}}>New to Ghori? <Link className="text-dark"to='/register'>Create an account</Link></p>
            <div className="d-flex justify-content-center mt-3">
                
            <button className="btn-danger me-2" onClick = {handleGoogleLogin}><i className="fab fa-google"></i></button>
            <button className="btn-dark me-2"><i className="fab fa-github"></i></button>
            </div>
            </form>

            
            <Footer></Footer>
            <BottomPart></BottomPart>
        </div>
    );
};

export default Login;