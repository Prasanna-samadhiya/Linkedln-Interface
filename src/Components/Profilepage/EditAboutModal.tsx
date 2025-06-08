import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import type { RootState } from "../../Redux/Store/Store";
import { useSelector } from "react-redux";

interface Props {
    open: boolean;
    onClose: () => void;
    initialValue: string;
    onSave: (newValue: string) => void;
}


const EditAboutModal: React.FC<Props> = ({ open, onClose, initialValue, onSave }) => {
    const [value, setValue] = useState(initialValue);
    console.log("in modal")

      const User = useSelector((state: RootState) => state.auth.User);


    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/user/updateuser/${User?._id}`,  {description:value} ).
        then((res)=>{console.log(res.data);}).
        catch((err)=>{console.log(err)})
        onSave(value);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>Edit About</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        multiline
                        rows={4}
                        margin="dense"
                        label="About"
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

export default EditAboutModal