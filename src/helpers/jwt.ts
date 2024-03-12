import { verify, sign } from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET as string;

const createToken = (payload: string) => {
    const token = sign(payload, JWT_SECRET,{
        expiresIn: '1h'
    });
    return token;
}

const verifyToken = (token: string) => {
    const decoded = verify(token, JWT_SECRET);
    return decoded;
}

export { createToken, verifyToken }