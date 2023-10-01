import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import CreateDocument from '@/components/CreateDocument'
import Modal from '@/components/Modal'
import { useState,useEffect } from 'react'
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { sendError } from 'next/dist/server/api-utils'
import Login from '@/components/Login'
import DocumentRow from '@/components/DocumentRow'
import { db } from '../../fireBase'
import firebase from 'firebase';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  const[input,setInput] =useState("")
  const[toggleModal,settoggleModal] =useState(false) 
  const [docs,setDocs] =useState([]);
  const collectionRef = db.collection('userDocs');
  useEffect(() => {
    db
      .collection('userDocs')
      .doc(session?.user.email)
      .collection('docs')
      .orderBy('timestamp', 'desc')
      .onSnapshot(
        (querySnapshot) => {
          setDocs(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        },
        (error) => {
          console.error('Error listening to Firestore:', error);
        
        }
      );
  }, [session]);
  
console.log('docs',docs)
  const createDocument =()=>{
    if(!input) return;
    db.collection('userDocs').doc(session.user.email).collection('docs').add({
      fileName:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
    settoggleModal(false)
  }
  
 
  if(!session){
    return <Login/>
  }
  return (
    <>
 <Header/>
 <CreateDocument toggleModal={toggleModal} settoggleModal={settoggleModal}/>
 <Modal toggleModal={toggleModal} settoggleModal={settoggleModal} input={input} setInput={setInput} createDocument={createDocument}/>
 <DocumentRow docs={docs} />
  </>
  )
}
