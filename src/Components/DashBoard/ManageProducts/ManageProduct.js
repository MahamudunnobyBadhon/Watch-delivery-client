import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const ManageProduct = () => {
    


    const [products, setProducts] = useState([]);

    const [control, setControl] = useState(false);
    
    useEffect( () =>{
        fetch('https://stormy-reaches-83687.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[control]);

    const handleDelete = id =>{

        const proceed = window.confirm('are you sure want to delete?');
        if(proceed){
            fetch(`https://stormy-reaches-83687.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                alert('Product is successfully deleted');
                setControl(!control);
                }
            });
        }

    }

    return (
        <div>
            <h4 className="text-center fw-bold fs-2"> <span className="text-danger" style={{
                fontStyle: 'italic'
            }}>Manage Products</span> </h4>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Remove</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    products?.map(product => 
                    <tr key={product._id}>
                        <td><img style={{
                            width: '100px',
                            height: '100px'
                        }} src={product.imageLink} alt="" /></td>
                        <td>{product.productName}</td>
                        <td>{product.price}</td>
                        
                        
                        
                        <td><button onClick={() => handleDelete(product._id)} className="btn btn-danger bg-danger">Delete</button></td>
                        {/* <td><button onClick={() => updateStatus(product._id)} className="btn btn-success bg-success">Approve</button></td> */}
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;