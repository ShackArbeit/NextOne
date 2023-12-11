import mongoose from "mongoose";

let isConnected=false;

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('MongoDB 已經連線了 !')
        return
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected=true;
        console.log('MongoDB 已經連線了 !')
    }catch(e){
        console.log(e)
    }
}