import Link from 'next/link'
import React from 'react'
import {HiDocumentText} from 'react-icons/hi'
const DocumentRow = ({docs}) => {
  return (
    <div className='my-4 bg-white max-w-[1200px] md:mx-auto mx-2 flex flex-col'>
      <div className='flex justify-between'>
      <p className='font-bold'>My Documents</p>
      <p className='font-bold'>Date Created</p>
      </div>
      {docs.map((doc)=>{
        return(
            <Link key={doc?.id} href={`/docs/${doc.id}`}><div  className=' my-2 border-2 px-2 py-4 rounded-md flex justify-between hover:bg-[whitesmoke] cursor-pointer'>
                 <div className='flex items-center'>
                 <HiDocumentText size={20} style={{color:"gray"}} />
                <p>{doc?.fileName}</p>
                </div>
                <p className="text-sm mr-6">{doc?.timestamp?.toDate().toLocaleDateString()}</p>
            </div>
            </Link>
        )
      })}
    </div>
  )
}

export default DocumentRow