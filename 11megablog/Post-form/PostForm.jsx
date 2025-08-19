import React ,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button,Input,Select,RTE} from '../src/components/index'
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
    const [previewUrl, setPreviewUrl] = React.useState('')
    const userData = useSelector((state) => state.auth?.userdata);
    const submit = async(data)=>{
        if(post){
            let newFeaturedImageId = post.featuredImage;
            if (data.image && data.image[0]) {
                const uploaded = await appwriteService.uploadFile(data.image[0]);
                if (uploaded) {
                    if (post.featuredImage) {
                        try { await appwriteService.deleteFile(post.featuredImage) } catch {}
                    }
                    newFeaturedImageId = uploaded.$id;
                }
            }
            const dbPost = await appwriteService.updatePost(post.$id, {
                title: data.title,
                content: data.content,
                featuredImage: newFeaturedImageId,
                status: data.status,
            });
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else{
            const file = await appwriteService.uploadFile(data.image[0]);
            if(file){
                const dbPost = await appwriteService.createPost(
                    data.title,
                    data.slug,
                    data.content,
                    file.$id,
                    data.status,
                    userData?.$id,
                )
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
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g,'-')
            .replace(/-+/g,'-')

        
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
                    {...register("image", { required: !post, onChange: (e) => {
                        const file = e?.target?.files?.[0]
                        setPreviewUrl(file ? URL.createObjectURL(file) : '')
                    } })}
                    // Create mode (post not present) → required: true (image mandatory)

// Edit mode (post present) → required: false (kyunki tum purani image bhi rehne de sakte ho)
                />
                {(previewUrl || post) && (
                    <div className="w-full mb-4">
                        <img
                            src={previewUrl || appwriteService.getFileUrl(post.featuredImage)}
                            alt={post ? post.title : 'Selected image'}
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
