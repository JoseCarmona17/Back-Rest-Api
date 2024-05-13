import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,   //para eliminar espacios por delante o por el detras de la palabra
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    }
},{
    timestamps:true
})


export default mongoose.model("User", userSchema)