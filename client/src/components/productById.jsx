import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductById({ id }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
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
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    );
}
export default ProductById