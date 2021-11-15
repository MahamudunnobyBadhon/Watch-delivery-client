import React, { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    console.log("my orders");

    const {user} = useAuth();

    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false);

    console.log(user.email);

    useEffect( () =>{
        fetch(`https://stormy-reaches-83687.herokuapp.com/myOrders/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
        
    },[user, control])

    const handleDelete = id =>{
        const proceed = window.confirm('are you sure want to delete?');
        if(proceed){
            fetch(`https://stormy-reaches-83687.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                alert('Order is successfully canceled');
                setControl(!control);
                }
            });
        }

    }
    return (
        <div>
            <h4 className="text-center fw-bold fs-2"> <span className="text-danger" style={{
                fontStyle: 'italic'
            }}>My Order</span> </h4>
            <table className="w-100 table table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Remove</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    myOrders?.map( myOrder => 
                    <tr key={myOrder._id}>
                        <td><img style={{
                            width: '100px',
                            height: '100px'
                        }} src={myOrder.orderedProductPic} alt="" /></td>
                        <td>{myOrder.orderedProduct}</td>
                        <td>{myOrder.quantity}</td>
                        <td>{myOrder.status}</td>
                        
                        
                        
                        <td><button onClick={() => handleDelete(myOrder._id)} className="btn btn-danger bg-danger">Delete</button></td>
                        {/* <td><button onClick={() => updateStatus(product._id)} className="btn btn-success bg-success">Approve</button></td> */}
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;