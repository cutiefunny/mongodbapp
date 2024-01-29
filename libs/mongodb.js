import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://cutiefunny:ghks1015@macrodb.srkli.mongodb.net/nextJs?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");
    }catch(error){
        console.log(error);
    }
};

export default connectMongoDB;