import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'your-secret-key';

function generateToken(userId){
    return jwt.sign({is: userId}, secretKey,{expiresIn: '1h'}); 
}

export {generateToken};