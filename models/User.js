import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    avatarUrl: String,
}, { timestamps: true });
const UserModel = mongoose.model("User", UserSchema);
export default UserModel;