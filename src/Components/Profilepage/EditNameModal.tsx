import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import type { RootState } from '../../Redux/Store/Store';
import { useSelector } from 'react-redux';

interface Props {
  open: boolean;
  onClose: () => void;
  initialValue: string;
  onSave: (newName: string) => void;
}

const EditNameModal: React.FC<Props> = ({ open, onClose, initialValue, onSave }) => {
  const [value, setValue] = React.useState(initialValue);
 
  const User = useSelector((state: RootState) => state.auth.User);
  const url = import.meta.env.VITE_BASE_URL;
  
  const handleSubmit = async(e: React.FormEvent) => {
    try{
        e.preventDefault();
        const res = await axios.put(`${url}/user/updateuser/${User?._id}`,  {name:value} );
        console.log(res.data);
        onSave(value);
        onClose();
    }catch (error) {
      console.error("Error updating name:", error);
    }
};

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Edit Name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditNameModal;
