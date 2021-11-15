import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const ManageOrders = () => {
    
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    
    useEffect( () =>{
        fetch('https://stormy-reaches-83687.herokuapp.com/allorders')
        .then(res => res.json())
        .then(data => {
            setOrders(data);
        })
    },[control]);

    console.log(orders);

    const handleDelete =(id) =>{
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

    const updateStatus = id => {

        const status = 'Approved';
        console.log(id);
        fetch(`https://stormy-reaches-83687.herokuapp.com/updateStatus/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('update successfully');
                setControl(!control);
            }
        })

    }
    return (
        <div>
            <h4 className="text-center fw-bold fs-2"> <span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Manage Order</span> </h4>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>User</th>
                        <th>Quantity</th>
                        <th>Address</th>
                        <th>Mobile No</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Approved</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders?.map(order => 
                    <tr key={order._id}>
                        <td><img style={{
                            width: '100px',
                            height: '100px'
                        }} src={order.orderedProductPic} alt="" /></td>
                        <td>{order.orderedProduct}</td>
                        <td>{order.displayName}</td>
                        <td>{order.quantity}</td>
                        <td>{order.address}</td>
                        <td>{order.mobileNo}</td>
                        <td>{order.status}</td>
                        
                        
                        <td><button onClick={() => handleDelete(order._id)} className="btn btn-danger bg-danger">Delete</button></td>
                        <td><button onClick={() => updateStatus(order._id)} className="btn btn-success bg-success">Approve</button></td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;