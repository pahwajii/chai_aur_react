import React from 'react'
import { PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-12 px-6 lg:px-12 xl:px-16 animate-fade-in'>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Create New Post
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Share your thoughts and ideas with the world
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-accent to-muted mx-auto mt-8 rounded-full"></div>
        </div>
        
        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-muted/20">
          <PostForm />
        </div>
      </div>
    </div>
  )
}

export default AddPost
