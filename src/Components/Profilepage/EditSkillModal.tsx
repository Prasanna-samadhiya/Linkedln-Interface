import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import type { RootState } from '../../Redux/Store/Store';
import { useSelector } from 'react-redux';

interface SkillProps {
  open: boolean;
  onClose: () => void;
  initialValue: string;
  onSave: (newValue: string) => void;
  skillArr: any;
}

const EditSkillModal: React.FC<SkillProps> = ({
  open,
  onClose,
  initialValue,
  onSave,
  skillArr
}) => {
  const [form, setForm] = useState(initialValue);
  
  const User = useSelector((state: RootState) => state.auth.User?.User);

  useEffect(() => {
    if (open) setForm(initialValue);
    console.log("hi")
    console.log(form)
  }, [initialValue, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setForm(e.target.value);
  };
 
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:3000/user/updateuser/${User._id}`, { skills:skillArr });
    console.log(res.data);
    console.log(form);
    if (form.trim()) {
      onSave(form.trim());
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Skill</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Skill Name"
            fullWidth
            value={form}
            onChange={handleChange}
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

export default EditSkillModal;
