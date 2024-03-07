import { hash, compare } from "bcrypt";

const hashPassword = async (password: string) => {
    const salt = await hash(password, 10);
    return salt;
};

const vertifyPassword = async (password: string, hashPassword: string) => {
    return await compare(password, hashPassword);
};

export { hashPassword, vertifyPassword }