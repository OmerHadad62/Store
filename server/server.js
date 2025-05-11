import './db.js';
import express from 'express';
import productRouter from './routes/products.js';
import cors from 'cors';

const app = express();
const PORT = 3000;
console.log(PORT);
app.use(cors({origin: 'http://localhost:5173'}));

app.use(express.json());

app.use('/products', productRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
