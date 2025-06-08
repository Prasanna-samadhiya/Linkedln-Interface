import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Avatar,
    Typography,
    Tabs,
    Tab,
    Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { updateProfileImage, updateProfileFrame } from '../../Redux/Slices/AuthSlice';
import axios from 'axios';
import type { RootState } from '../../Redux/Store/Store';
import { useDispatch, useSelector } from 'react-redux';

interface EditCoverModalProps {
    open: boolean;
    onClose: () => void;
}

const CenteredBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    position: 'relative',
}));

const FrameOptions = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
}));

const SmallAvatar = styled(Avatar)(() => ({
    width: 60,
    height: 60,
    border: '2px solid white',
    cursor: 'pointer',
}));

const EditCoverModal: React.FC<EditCoverModalProps> = ({ open, onClose }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [selectedFrame, setSelectedFrame] = useState<'none' | 'open' | 'hiring'>('none');
    const User = useSelector((state: RootState) => state.auth.User);
    const Link = useSelector((state: RootState) => state.auth.Link);
    const dispatch = useDispatch();

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const userId = User?._id;

            const response = await axios.put(
                `http://localhost:3000/user/updateimage/${userId}`,
                formData
            );

            console.log('Upload success:', response.data);
            dispatch(updateProfileImage(response.data.presignedurl));
            onClose();
        } catch (error: any) {
            console.error('Error uploading image:', error.response?.data || error.message);
        }
    };

    const handleSave = async () => {
        try {
            const userId = User?._id;
            const response = await axios.put(
                `http://localhost:3000/user/updatestatus/${userId}`,
                { frame: selectedFrame }
            );

            console.log('Frame update success:', response.data);
            dispatch(updateProfileFrame(selectedFrame));
        } catch (error: any) {
            console.error('Error updating frame:', error.response?.data || error.message);
        } finally {
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Profile Photo</DialogTitle>

            <DialogContent>
                <CenteredBox>
                    <Box sx={{ position: 'relative', width: 150, height: 150 }}>
                        <Avatar src={Link} sx={{ width: 150, height: 150 }} />
                        {(selectedFrame === 'open' || selectedFrame === 'hiring') && (
                            <svg
                                width="150"
                                height="150"
                                viewBox="0 0 150 150"
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            >
                                <defs>
                                    <path
                                        id="textCircle"
                                        d="M 75,75 m -65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
                                    />
                                </defs>

                                <text
                                    stroke={selectedFrame === 'open' ? 'green' : 'blue'}
                                    strokeWidth="4"
                                    fill="none"
                                    fontSize="12"
                                    fontWeight="bold"
                                >
                                    <textPath
                                        href="#textCircle"
                                        startOffset="50%"
                                        textAnchor="middle"
                                    >
                                        {selectedFrame === 'open' ? '#OPENTOWORK' : 'HIRING'}
                                    </textPath>
                                </text>

                                <text
                                    fill="white"
                                    fontSize="12"
                                    fontWeight="bold"
                                >
                                    <textPath
                                        href="#textCircle"
                                        startOffset="50%"
                                        textAnchor="middle"
                                    >
                                        {selectedFrame === 'open' ? '#OPENTOWORK' : 'HIRING'}
                                    </textPath>
                                </text>
                            </svg>
                        )}
                    </Box>
                </CenteredBox>

                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                    <Tab label="Add Photo" />
                    <Tab label="Frames" />
                </Tabs>

                {tabIndex === 0 && (
                    <CenteredBox>
                        <input
                            type="file"
                            id="avatar-upload"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <label htmlFor="avatar-upload">
                            <Button variant="contained" component="span">
                                Upload Photo
                            </Button>
                        </label>
                    </CenteredBox>
                )}

                {tabIndex === 1 && (
                    <CenteredBox>
                        <Typography>Select a frame:</Typography>
                        <FrameOptions>
                            <Box onClick={() => setSelectedFrame('open')} sx={{ textAlign: 'center' }}>
                                <SmallAvatar
                                    src={Link}
                                    sx={{
                                        borderColor: selectedFrame === 'open' ? 'green' : 'white',
                                    }}
                                />
                                <Typography variant="caption">Open to Work</Typography>
                            </Box>

                            <Box onClick={() => setSelectedFrame('hiring')} sx={{ textAlign: 'center' }}>
                                <SmallAvatar
                                    src={Link}
                                    sx={{
                                        borderColor: selectedFrame === 'hiring' ? 'blue' : 'white',
                                    }}
                                />
                                <Typography variant="caption">Hiring</Typography>
                            </Box>

                            <Box onClick={() => setSelectedFrame('none')} sx={{ textAlign: 'center' }}>
                                <SmallAvatar
                                    src={Link}
                                    sx={{
                                        borderColor: selectedFrame === 'none' ? 'gray' : 'white',
                                    }}
                                />
                                <Typography variant="caption">None</Typography>
                            </Box>
                        </FrameOptions>
                    </CenteredBox>
                )}
            </DialogContent>

            <DialogActions>
                <Button onClick={handleSave} variant="contained" color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditCoverModal;
