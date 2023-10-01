import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Modal = ({toggleModal,settoggleModal,input,setInput, createDocument}) => {
 
const handlesave =()=>{
  createDocument();
  settoggleModal(false)
}
 
  
    return (
      <div className=''>
      
        <Dialog open={toggleModal} onClose={()=>settoggleModal(!toggleModal)} sx={{width:'100%' , padding:'20px'}}  >
         
          <DialogContent>
            <DialogContentText>
             Create A New Document
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Document Name"
              type="email"
              fullWidth
              variant="standard"
              sx={{color:'gray'}}
              onChange={(e)=>setInput(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>settoggleModal(!toggleModal)} sx={{color:'gray'}}>Cancel</Button>
            <Button onClick={handlesave} sx={{color:'gray'}}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
 
}

export default Modal