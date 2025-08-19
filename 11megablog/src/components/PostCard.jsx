import React from 'react'
import appwriteService from '../appwrite/config';
import {Link} from 'react-router-dom';
// This is a placeholder component for PostCard
// You can implement the actual UI and functionality as needed
// This component will display a post card with title, content, featured image, and status
//$id likhte hai ye iska syntax hai 
//
function PostCard({$id, title, content, featuredImage, status, userId}) {
  return (
    <Link to = {`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {featuredImage ? (
                    <img src = {appwriteService.getFileUrl(featuredImage)} alt = {title}/>
                ) : null}
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>

    </Link>
  )
}

export default PostCard
