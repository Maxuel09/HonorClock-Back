import User from "../schema/user";


const UserModel = {
    getallUsers: async () => {
        return await User.find();
    },

    getUser: async (user: string) => {
        return await User.findById(user)
    },


    updateUser: async (user: string) => {
        return await User.findByIdAndUpdate(user, { name : user.toString(), email: user.toString(), role: user.toString() }) 
        
    },

    deleteUser: async (user: string) => {
        return await User.findByIdAndDelete(user)
    }
}

export default UserModel