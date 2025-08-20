import React ,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button,Input,Select,RTE} from '../src/components/index'
import appwriteService from "../src/appwrite/config"; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
//hame kuch information chhiye to ab hame vo milegi use form se 
    const{register, handleSubmit,watch,setValue,control,getValues, formState: { errors, isSubmitting }}= useForm({
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
        try {
            // Validate content length for Appwrite string field limit
            if (data.content && data.content.length > 255) {
                alert('Content is too long. Please shorten your content or contact your administrator to increase the CONTENT field limit in Appwrite from 255 characters to unlimited.');
                return;
            }

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
                if (!data.image || !data.image[0]) {
                    alert('Please select an image');
                    return;
                }
                
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
        } catch (error) {
            console.error('Error submitting post:', error);
            if (error.message && error.message.includes('255 chars')) {
                alert('Content is too long. Please shorten your content or contact your administrator to increase the CONTENT field limit in Appwrite from 255 characters to unlimited.');
            } else {
                alert('Error creating post. Please try again.');
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

        return () => subscription.unsubscribe();
    },[watch,slugTransform , setValue])    

  return (
     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-8">
            <div className="w-full lg:w-2/3">
                <Input
                    label="Title :"
                    placeholder="Enter your post title"
                    className="mb-6"
                    {...register("title", { required: "Title is required" })}
                />
                {errors.title && <p className="text-red-500 text-sm mb-4">{errors.title.message}</p>}
                
                <Input
                    label="Slug :"
                    placeholder="Enter slug"
                    className="mb-6"
                    {...register("slug", { required: "Slug is required" })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                {errors.slug && <p className="text-red-500 text-sm mb-4">{errors.slug.message}</p>}
                
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-full lg:w-1/3">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-6"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { 
                        required: !post ? "Image is required" : false, 
                        onChange: (e) => {
                            const file = e?.target?.files?.[0]
                            setPreviewUrl(file ? URL.createObjectURL(file) : '')
                        } 
                    })}
                />
                {errors.image && <p className="text-red-500 text-sm mb-4">{errors.image.message}</p>}
                
                {(previewUrl || post?.featuredImage) && (
                    <div className="w-full mb-6">
                        <img
                            src={previewUrl || appwriteService.getFileUrl(post.featuredImage)}
                            alt={post ? post.title : 'Selected image'}
                            className="rounded-2xl w-full h-32 object-contain shadow-lg border border-gray-200"
                        />
                    </div>
                )}
                
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-8"
                    {...register("status", { required: "Status is required" })}
                />
                {errors.status && <p className="text-red-500 text-sm mb-4">{errors.status.message}</p>}
                
                <Button 
                    type="submit" 
                    bgColor={post ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-secondary"} 
                    className="w-full py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            {post ? "Updating..." : "Creating..."}
                        </div>
                    ) : (
                        post ? "Update Post" : "Create Post"
                    )}
                </Button>
            </div>
        </form>
  )
}

export default PostForm
