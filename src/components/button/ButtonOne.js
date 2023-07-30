import React from 'react'

const ButtonOne = ({onClick,title}) => {
  return (
   <button onClick={onClick} type='button' className=" text-lg mb-1 font-semibold  border hover:text-[#ffc300]  border-[#ffc300] text-center bg-[#ffc300] hover:bg-white text-white transition-all  w-full p-2 rounded-md  ">
    
{title}
   </button>
  )
}

export default ButtonOne