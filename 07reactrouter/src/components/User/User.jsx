import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}= useParams();
  return (
    
    <h1 className=' bg-slate-600 text-pretty text-center'>
      User:{userId}
    </h1>
  )
}

export default User

// The useParams hook in React is part of the react-router-dom library and is used to access dynamic parameters from the URL in a React application. It is particularly useful when building single-page applications with dynamic routing, where parts of the URL change to represent different content or resources.
/*
How useParams works:
Define a dynamic route:
In your React Router setup, define a route with a dynamic segment using a colon (:). For example, /product/:id defines a route where :id is a dynamic parameter.
Import useParams:
In the functional component rendered by this dynamic route, import the useParams hook from react-router-dom.*/