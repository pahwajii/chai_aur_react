import React from 'react'
import appwriteService from '../appwrite/config';
import {Link} from 'react-router-dom';

function PostCard({$id, title, content, featuredImage, status, userId}) {
  return (
    <Link to = {`/post/${$id}`}>
        <div className='w-full bg-white rounded-2xl p-6 shadow-soft hover:shadow-xl transition-all duration-500 ease-smooth hover:-translate-y-2 border border-muted/20 group overflow-hidden'>
            <div className='w-full justify-center mb-4 overflow-hidden rounded-xl'>
                {featuredImage ? (
                    <img 
                        src = {appwriteService.getFileUrl(featuredImage)} 
                        alt = {title}
                        className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-smooth'
                    />
                ) : (
                    <div className='w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-xl'>
                        <div className='text-4xl text-muted'>📝</div>
                    </div>
                )}
            </div>
            <div className='space-y-3'>
                <div className='flex items-center justify-between'>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        status === 'active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                    }`}>
                        {status}
                    </span>
                    <div className='w-2 h-2 bg-accent rounded-full animate-pulse'></div>
                </div>
                <h2 className='text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300 line-clamp-2'>
                    {title}
                </h2>
                <p className='text-gray-600 text-sm line-clamp-3 leading-relaxed'>
                    {content?.replace(/<[^>]*>/g, '').substring(0, 120)}...
                </p>
            </div>
        </div>
    </Link>
  )
}

export default PostCard
