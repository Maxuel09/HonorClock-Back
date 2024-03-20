import { verify, sign } from "jsonwebtoken";

const JWT_SECRET = process.env.HASHJWT as string;

const createToken = (payload: string) => {
    const token = sign({ id:payload }, JWT_SECRET,{
        expiresIn: '1h'
    });
    return token;
}
const verifyToken = (token: string) => {
    const decoded = verify(token, JWT_SECRET);
    return decoded;
}

export { createToken, verifyToken }