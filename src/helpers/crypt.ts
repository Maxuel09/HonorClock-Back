import { hash, compare, hashSync, compareSync } from "bcrypt";

const encryptPassword = (password: string) => {
    const salt = hashSync(password, 10);
    return salt;
};

const ComparePassword = (password: string, hashPassword: string) => {
    return compareSync(password, hashPassword);
};

export { encryptPassword, ComparePassword }