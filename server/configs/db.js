import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected', ()=> console.log("Database Connected")
        );
        
        await mongoose.connect(`${process.env.MONGODB_URI}/greencart`)
        console.log("MongoDB URI:", process.env.MONGODB_URI); // Add this temporarily for debugging
    } catch (error) {
        console.error(error.message);
    }
}


export default connectDB;