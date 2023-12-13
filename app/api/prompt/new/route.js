import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

export const POST=async (req,res)=>{
    const {userId,prompt,tag}=await req.json()
    try{
        await connectToDB()
        const newPrompt=new Prompt({creator:userId,prompt,tag})
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt),{status:201})
    }catch(e){
        return new Response('無法建立新的 Post',{status:500})
        console.log(e)
    }
}