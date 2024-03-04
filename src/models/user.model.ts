import User from "../schema/user";


const UserModel = {
    getallUsers: async () => {
        return await User.find();
    },

    getUser: async (user: any) => {
        return await User.findOne(user)
    },

    createUser: async (user: any) => {
        return await User.create(user)
    },

    updateUser: async (user: any) => {
        return await User.findOneAndUpdate({ _id: user._id }, user, { new: true })
    },

    deleteUser: async (user: any) => {
        return await User.findOneAndDelete({ _id: user._id })
    }
}

export default UserModel