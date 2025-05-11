import axios from 'axios';
import { useState, useEffect } from 'react';


function deleteProduct({ id }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.delete(`http://localhost:3000/products/${id}`)
        .then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>Delete Product</h1>
            
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    );
}

export default deleteProduct;