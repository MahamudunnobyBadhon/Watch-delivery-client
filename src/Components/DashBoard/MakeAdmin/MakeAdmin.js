import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {


    const [email, setEmail] = useState("");
    const loginEmailInput = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const makeAdminOnSubmit = e =>{
        e.preventDefault();
        console.log(email);

        axios.put(`https://stormy-reaches-83687.herokuapp.com/users/admin`, {email})
            .then(res => {
            if(res.data.modifiedCount > 0){
                alert('Admin added successfully');
            }
        })

    }
    return (
        <div className="form">
            <h4 className="text-center fw-bold fs-2"> <span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Make admin</span> </h4>

            <form  onSubmit={makeAdminOnSubmit} className="mb-2 makeAdminForm mx-auto">
                <label style={{
                    fontWeight: 'bold'
                }}  htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onBlur={loginEmailInput} type="email" className="form-control" id="loginInputEmail1" aria-describedby="emailHelp" required/>

                <button type="submit" className="btn btn-primary ps-2 mt-2">Submit</button>
            </form>

        </div>
    );
};

export default MakeAdmin;