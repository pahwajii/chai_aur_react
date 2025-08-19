import React,{useEffect,useState} from 'react'
import { Container,PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
function EditPost() {
    const [post, setPost] = useState(null)
    const { slug } = useParams() // ek apko slug lagega kyunki edi karne aaye hai to user click krega fir vhn per jayega to url se value ayegi to uske liye useparams use krte hai 
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((p)=>{
                if(p){
                    setPost(p)
                }
            })
        }else {
            navigate('/')
        }
    
    },[slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post = {post}/>
        </Container>
    </div>
  ):null
}

export default EditPost
