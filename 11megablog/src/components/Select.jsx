import React, { useId } from 'react'

function Select({
    options,
    label,
    className = '',//classname ke andar empty string hni chhiye
    ...props
}, ref) {

    const id = useId() // 👈 useId() ko ek variable me store kia

    return (
        <div className='w-full'>
            {
                label && <label htmlFor={id} className=''>{label}</label>
            }
            <select
                {...props}
                id={id}        // 👈 ab yahan id ko use kar rhe hai
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-100 duration-250 border border-gray-300 w-full ${className}`}>
                {/* options ek array hi milta hai ussually uske liye hame array map karna padta hai to isliye arrray lelo  */}
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
