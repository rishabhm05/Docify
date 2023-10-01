import React from 'react'
import {HiDocumentText} from 'react-icons/hi'
import Button from '@mui/material/Button';
import {signIn } from "next-auth/react"
const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center my-auto mx-auto min-h-screen '>
      <HiDocumentText size={100} style={{color:"blue"}} />
      <h1 className='font-bold text-2xl'>Docify</h1>
      <button onClick={signIn} className="py-2 my-2 w-44 shadow-md  text-gray-100 rounded-md bg-[#2196f3]">Sign In</button>
    </div>
  )
}

export default Login