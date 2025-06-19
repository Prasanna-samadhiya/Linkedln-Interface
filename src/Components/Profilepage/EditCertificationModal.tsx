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
import { useSelector } from 'react-redux';
import type { RootState } from '../../Redux/Store/Store';

interface CertificationProps {
  open: boolean;
  onClose: () => void;
  initialValue: {
    name: string;
    organisation: string;
  };
  onSave: (newValue: {
    name: string;
    organisation: string;
  }) => void;
  certificationArr: any;

}

const EditCertificationModal: React.FC<CertificationProps> = ({
  open,
  onClose,
  initialValue,
  onSave,
  certificationArr
}) => {
  const [form, setForm] = useState(initialValue);
  const User = useSelector((state: RootState) => state.auth.User);
  const url = import.meta.env.VITE_BASE_URL;



  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedCertifications = [...certificationArr, form]; 
    console.log(updatedCertifications);

    try {
      await axios.put(`${url}/user/updateuser/${User?._id}`, {
        certification: updatedCertifications,
      }, { withCredentials: true });

      onSave(form);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Certification</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Certification Name"
            fullWidth
            value={form.name}
            onChange={handleChange('name')}
          />
          <TextField
            margin="dense"
            label="Organisation"
            fullWidth
            value={form.organisation}
            onChange={handleChange('organisation')}
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

export default EditCertificationModal;
