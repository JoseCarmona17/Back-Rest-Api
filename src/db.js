import mongoose from 'mongoose';

export const connectBD = async () => {
    try {
        await mongoose.connect("mongodb://localhost/backproject")
        console.log("the database is being connected");
    } catch (error) {
        console.log(error);
    }
}