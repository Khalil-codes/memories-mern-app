import mongoose from "mongoose";

const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI as string;
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB connected to ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;
