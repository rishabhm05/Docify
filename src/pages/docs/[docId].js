import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import {HiDocumentText} from 'react-icons/hi'
import {db} from '../../../fireBase'
import { useState,useEffect } from "react";
import Link from 'next/link'
import TextEditor from "@/components/TextEditor";
const Document =()=>{
const router = useRouter()
const{docId} = router.query;
const { data: session } = useSession()
const [doc, setDoc] = useState(null);

useEffect(() => {
  if (!session) return;
  
  db
    .collection('userDocs')
    .doc(session?.user.email)
    .collection('docs')
    .doc(docId)
    .get()
    .then(data => {
      if (data.data()) {
        setDoc({ ...data.data() })
      } else {
        router.replace('/')
      }
    })
    .catch(err => aler(err))

}, [docId, session]);
if(!session) return <Login/>

return(
    <div className="  cursor-pointer">
    <header className="bg-white px-4 sticky h-[70px] pt-2 flex justify-between">
    <div className="flex">
    <Link href={`/`}><HiDocumentText size={30} style={{color:"blue"}} /></Link>
    <div className="flex flex-col gap-2">
    <p>{doc?.fileName}</p>
    <div className="flex items-center gap-4 text-sm text-gray-500">
    <p className="">File</p>
    <p className="">Edit</p>
    <p>View</p>
    <p>Insert</p>
    <p>Format</p>
    <p>Tools</p>
    </div>
    </div>
    </div>
    <img  src={session?.user.image} className=" rounded-full h-[24px] w-[24px] " alt="" />
    </header>
     <TextEditor doc={doc}/>
    </div>
)
}
export default Document;