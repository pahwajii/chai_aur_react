import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState({}); // start with an empty object

//   useEffect(() => {
//     fetch('https://api.github.com/users/pahwajii')
//       .then(response => response.json()) // add parentheses here
//       .then(data => {
//         console.log(data);
//         setData(data);
//       });
//   }, []); // empty dependency array to run only once

  return (
    <div className='text-center m-4 bg-gray-700 text-white text-3xl'>
      GITHUB FOLLOWERS: {data.followers}
      <img 
  className='mx-auto mt-6 rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105' 
  src={data.avatar_url} 
  alt='GIT PIC' 
  width={300} 
/>

    </div>
  );
}

export default Github;

export const githbInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/pahwajii')
    return response.json()
}

