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

interface ExperienceProps {
  open: boolean;
  onClose: () => void;
  initialValue: {
    company: string;
    joining: string;
    leaving: string;
    description: string;
  };
  onSave: (newValue: {
    company: string;
    joining: string;
    leaving: string;
    description: string;
    
  }) => void;
  experienceArr: any;
}

const EditExperienceModal: React.FC<ExperienceProps> = ({
  open,
  onClose,
  initialValue,
  onSave,
  experienceArr
}) => {
  const [form, setForm] = useState(initialValue);

  const User = useSelector((state: RootState) => state.auth.User?.User);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log("form:",form);
    const res = await axios.put(`http://localhost:3000/user/updateuser/${User._id}`, { experience:experienceArr });
    console.log(res.data);
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Edit Experience</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Company"
            fullWidth
            value={form.company}
            onChange={handleChange('company')}
          />
          <TextField
            margin="dense"
            label="Joining Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={form.joining}
            onChange={handleChange('joining')}
          />
          <TextField
            margin="dense"
            label="Leaving Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={form.leaving}
            onChange={handleChange('leaving')}
          />
          <TextField
            margin="dense"
            label="Description"
            multiline
            rows={3}
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

export default EditExperienceModal;
