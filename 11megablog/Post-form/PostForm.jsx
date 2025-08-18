import React ,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button,Input,Select,RTE} from '../src/components/index' // Assuming these components are exported from index.js
import appwriteService from "../src/appwrite/config"; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
//hame kuch information chhiye to ab hame vo milegi use form se 
    const{register, handleSubmit,watch,setValue,control,getValues}= useForm({
        defaultValues:{
            title:post?.title ||'',
            slug : post?.slug||"",
            content : post?.content||'',//post ke andar content hai to use use karoo vrna khali dedo ''
            status : post?.status || 'active',
        },
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)
    const submit = async(data)=>{
        if(post){
            const file = data.image[0]?appwriteService.uploadFile(data.image[0]):null;
            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appwriteService.updatePost(
                post.$id,{
                    ...data,
                    featuredImage:file ? file.$id : undefined,

                if(dbpost){
                    navigate(`/post/${dbPost.$id}`)
                }
                }
            )
        }
        else{
            const file = await appwriteService.uploadFile(data.image[0]);
            if(file){
                const fileId=file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId :userData.$id,

                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    //slug transform in=mportant for interview *******************************************************************************************************************
    const slugTransform = useCallback((value)=>{
        if(value && typeof value == 'string'){
            //1way
            // const slug = value.toLowerCase().replace(/ /g,'-')
            // setValue('slug',slug)
            // return slug
            //2ndway
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g,'-')
            .replace(/\s/g,'-')

        
        }
        return ''
    },[])

    React.useEffect(()=>{
        //the method you run here we use subscription to run that method isme last line me likhte hai subscroiption.unsubscribe() return ke callback me likhte hai ye jisse vo loop me na reh jaaye
        const subscription = watch((value,{name})=>{
            if(name === 'title'){
                setValue('slug',slugTransform(value.title,{
                    shouldValidate :true
                }))//this means that we update slug with the value we generate using the function of slugtransform

            }
        })

    },[watch,slugTransform , setValue])    

  return (
     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                    // Create mode (post not present) → required: true (image mandatory)

// Edit mode (post present) → required: false (kyunki tum purani image bhi rehne de sakte ho)
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm
