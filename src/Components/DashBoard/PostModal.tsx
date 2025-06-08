// components/PostModal.tsx
import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    Box,
    Typography
} from '@mui/material';
import axios from 'axios';
import type { RootState } from '../../Redux/Store/Store';
import { useSelector } from 'react-redux';
import {  AvatarLargeModal } from './DashboardStyle';

interface PostModalProps {
    open: boolean;
    handleClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ open, handleClose }) => {
    const [content, setContent] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const Link = useSelector((state: RootState) => state.auth.Link);
    const User = useSelector((state: RootState) => state.auth.User);

    useEffect(() => {
        console.log(images);
        setImages(images);
    }, [images])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        console.log(files, e.target.files)
        setImages(files);

        const previews = files.map(file => URL.createObjectURL(file));
        setImagePreviews(previews);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('content', content);
        images.forEach((file) => {
            formData.append('images', file); // 'images' must match field name on backend
        });

        try {
            const response = await axios.post(
                'http://localhost:3000/post/newpost',
                formData,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log('Response:', response.data);
            handleClose();
        } catch (error) {
            console.error('Error posting:', error);
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            
            <DialogTitle><h3>Create a Post</h3></DialogTitle>
            <div style={{display:"flex",flexDirection:"row"}}><AvatarLargeModal src={Link} />
            <Typography variant="h6">{User?.name}</Typography>
            </div>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <TextField
                        label="What's on your mind?"
                        multiline
                        rows={4}
                        fullWidth
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        variant="outlined"
                    />

                    <Box mt={2}>
                        <Button variant="contained" component="label">
                            Upload Images
                            <input
                                type="file"
                                hidden
                                name='images'
                                multiple
                                onChange={handleImageChange}
                            />
                        </Button>
                    </Box>

                    {imagePreviews.length > 0 && (
                        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
                            {imagePreviews.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt={`preview-${idx}`}
                                    width={100}
                                    style={{ borderRadius: 8 }}
                                />
                            ))}
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" variant="contained">Post</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default PostModal;
