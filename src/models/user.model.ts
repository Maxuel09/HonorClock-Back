import User from "../schema/user";

export const getAllUsers = async () => {
     const users = await User.find();
     return users
}
type UserSchema = {
    name: String,
    password: String,
    email: String,
    role: String
}

export const createUser = async (user: UserSchema) => {
    const newUser = new User(user);
    await newUser.save();
    return newUser
}