import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import BottomPart from "../SharedComponents/BottomPart/BottomPart";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header/Header";

const Register = () => {
  const { signUpUsingEmailAndPassword, error } = useAuth();


  const history = useHistory();
  const [registerData, setRegisterData] = useState({});

  console.log(error);


  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const emailInput = (e) => {
  //   setEmail(e.target.value);
  // };

  // const passInput = (e) => {
  //   setPassword(e.target.value);
  // };

  // const nameInput = (e) => {
  //     setName(e.target.value);
  // }

  // const user = {
  //   email: email,
  //   name: name, 
  //   password: password
  // }

  // console.log(user);

  const handleOnChange = e =>{
      const field = e.target.id;
      const value = e.target.value;
      const newRegisterData = {...registerData};
      newRegisterData[field] = value;
      newRegisterData['role'] = "user";
      setRegisterData(newRegisterData)
      //console.log(newRegisterData);

  }

  

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(registerData.password != registerData.password2){
      document.getElementById('password-error').style.display = "block";
      alert('Password did not match');
      return
    }
    else{
      document.getElementById('password-error').style.display = "none";
    }

    console.log(registerData.role);
    signUpUsingEmailAndPassword(registerData.email, registerData.password, registerData.name, registerData.role, history);
  };

  return (
    <div>
      <Header></Header>
      <h2 className="text-center">Register</h2>
      <form
        className="w-50 mx-auto mt-1 mb-3 register-form"
        onSubmit={handleOnSubmit}
      >
          <div className="mb-3">
          <label
            style={{
              fontWeight: "bold",
            }}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            User Name
          </label>
          <input
            // onBlur={nameInput}
            onChange={handleOnChange}
            type="name"
            name="name"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label
            style={{
              fontWeight: "bold",
            }}
            htmlFor="exampleInputEmail1"
            className="form-label"
          >
            Email address
          </label>
          <input
            // onBlur={emailInput}
            onChange={handleOnChange}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label
            style={{
              fontWeight: "bold",
            }}
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Password
          </label>
          <input
            // onBlur={passInput}
            onChange={handleOnChange}
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <div className="mb-3">
          <label
            style={{
              fontWeight: "bold",
            }}
            htmlFor="exampleInputPassword1"
            className="form-label"
          >
            Retype Your Password
          </label>
          <input
            // onBlur={passInput}
            onChange={handleOnChange}
            type="password"
            className="form-control"
            id="password2"
            required
          />
          <br/>
          <p id="password-error" style={{
            display: 'none',
            color: "red"
          }}>***Your password did not match***</p>
        </div>
        {error?.message ? <p></p> : <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="btn btn-regular btn-primary w-100">
          Submit
        </button>
        <p
          style={{ fontSize: "14px", textAlign: "center", fontWeight: "bold" }}
          className="text-center"
        >
          Already Have an account???
        </p>
        <Link to="/login" className="btn btn-success w-100">
          LogIn
        </Link>
      </form>
      <Footer></Footer>
      <BottomPart></BottomPart>
    </div>
  );
};

export default Register;
