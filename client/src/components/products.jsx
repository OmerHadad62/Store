import axios from 'axios';
import { useState, useEffect } from 'react';


function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products')
        .then(res => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    return(
        
        <div>  
            <h1>Products</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}


export default Products