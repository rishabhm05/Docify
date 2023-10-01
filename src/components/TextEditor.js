'use-client' 
import React from 'react'
import dynamic from 'next/dynamic';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {useState,useEffect} from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { db } from '../../fireBase';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
    ssr: false 
  });
 
const TextEditor = ({doc}) => {
    const {data:session}=useSession()
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const router = useRouter()
    const {docId} =router.query;
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    
        db.collection('userDocs').doc(session?.user.email).collection('docs').doc(docId).set({
          editorState: convertToRaw(editorState.getCurrentContent())
        }, {
          merge: true
        })
      }
    
      useEffect(() => {
        if (doc?.editorState) {
          setEditorState(EditorState.createWithContent(convertFromRaw(doc?.editorState)))
        }
      }, [doc]);
  return (
    <div className='bg-[whitesmoke] min-h-screen pb-1'>
        <Editor    editorState={editorState}  onEditorStateChange={onEditorStateChange} toolbarClassName='flex mx-auto sticky top-0 z-[50] !justify-center pb-40 ' editorClassName='mt-6 bg-white shadow-lg max-w-6xl md:mx-auto mx-3 min-h-screen mb-2 p-2'/>
    </div>
  )
}

export default TextEditor