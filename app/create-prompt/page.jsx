'use client'
import {useState} from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import Form from '@components/Form'


const CreatePrompt = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const[submitting,setSubmitting]=useState(false)
    const[post,setPost]=useState({
        prompt:'',
        tag:''
    })
    const createPrompt=async(e)=>{
        e.preventDefault()
        setSubmitting(true)
        try{
            const response=await fetch('/api/prompt/new',{
                method:'POST',
                body:JSON.stringify({
                    prompt:post.prompt,
                    tage:post.tag,
                    userId:session?.user.id
                })
            })
            if(response.ok){
                router.push('/')
            }
        }catch(e){
            console.log('無法建立新的 Post',e)
        }finally{
            setIsSubmitting(false);
        }
        
    }
  return (
    <Form
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
    />

  )
}

export default CreatePrompt