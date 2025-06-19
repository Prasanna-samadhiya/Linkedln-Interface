import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import type { RootState } from '../../Redux/Store/Store';
import { useSelector } from 'react-redux';

interface EducationProps {
  open: boolean;
  onClose: () => void;
  initialValue: {
    title: string;
    description: string;
  };
  onSave: (newValue: {
    title: string;
    description: string;
  }) => void;
  educationArr:any;
}

const EditEducationModal: React.FC<EducationProps> = ({
  open,
  onClose,
  initialValue,
  onSave,
  educationArr
}) => {
  const [form, setForm] = useState(initialValue);
  const User = useSelector((state: RootState) => state.auth.User);
  const url = import.meta.env.VITE_BASE_URL;

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log("education:",educationArr);
    await axios.put(`${url}/user/updateuser/${User?._id}`, { education:educationArr }).
        then((res)=>{console.log(res.data);}).
        catch((err)=>{console.log(err)})
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Edit Education</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={form.title}
            onChange={handleChange('title')}
          />
          <TextField
            margin="dense"
            label="Description"
            multiline
            rows={4}
            fullWidth
            value={form.description}
            onChange={handleChange('description')}
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

export default EditEducationModal;
