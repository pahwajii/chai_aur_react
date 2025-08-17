import React,{useId} from 'react'

function Select({
    options,
    label,
    className = '',//classname ke andar empty string hni chhiye
    ...props
},ref) {
  return (
    <div className='w-full'>{
        label && <label htmlFor={useId()} className=''></label>
    }
    <select
    {...props}
    id = {id}
    ref = {ref}
    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-100 duration-250 border border-gray-300 w-full ${className}`}>

    </select>
      
    </div>
  )
}

export default Select
