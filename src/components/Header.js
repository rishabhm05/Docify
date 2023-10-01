import React from 'react'
import { Button } from "@material-tailwind/react";
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrDocumentText} from 'react-icons/gr'
import {HiDocumentText} from 'react-icons/hi'
import { IconButton } from "@material-tailwind/react";
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {FiSearch} from  'react-icons/fi'
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
const Header = () => {
  const{data:session} =useSession()
  return (
    <header className='sticky  bg-white p-3 flex items-center justify-between '>
     <div className='flex gap-2 items-center'>
       <GiHamburgerMenu size={20}/>
         <HiDocumentText size={20} style={{color:"blue"}} />
        <p className='font-bold text-2xl text-[gray]'>Docs</p>

     </div>
     <div className='flex items-center bg-[whitesmoke] px-2 rounded-lg border-2 basis-[50%]'>
     <FiSearch color="gray" />
     <input type="search" placeholder='' className='bg-[inherit] outline-none border-none  border-2 py-2 '></input>
     </div>
     <div className='flex gap-2 cursor-pointer items-center'> 
     <BsFillGrid3X3GapFill size={20} />
     <img onClick={signOut} src={session?.user.image} className=" rounded-full h-[24px] w-[24px] " alt="" />
     </div>
   </header>
  )
}

export default Header