import axios from 'axios';
import { useState, useEffect } from 'react';

function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/products', { name, price, description });
            setName('');
            setPrice('');
            setDescription('');
        } catch (error) {
            console.log(error);
        }
    } 
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}   

export default AddProduct;