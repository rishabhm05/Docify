import React, { useState } from 'react'
import Image from 'next/image'
const CreateDocument = ({toggleModal,settoggleModal}) => {

  return (
    <div className='bg-[whitesmoke] my-6 '>
    <div className='md:max-w-[1200px] md:mx-auto mx-3  py-6'>
     <p className='text-[gray]'>Start a new Document</p>
     <div className='relative w-40 h-52 cursor-pointer' onClick={()=>settoggleModal(!toggleModal)}>
     <Image src={"https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"} layout="fill"/> 

     </div>
    </div>
    </div>
  )
}

export default CreateDocument