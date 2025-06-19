import { Box, Button, TextField } from "@mui/material";
import { CreatePostArea, CreatePostCard } from "./DashboardStyle";
import { useState } from "react";
import PostModal from "./PostModal";
import { useSelector } from "react-redux";
import type { RootState } from "../../Redux/Store/Store";
import FramedAvatar from "./FrameImage";



function PostComposer() {
  const [openModal, setOpenModal] = useState(false);
  const Link = useSelector((state: RootState) => state.auth.Link);
  const User = useSelector((state:RootState) => state.auth.User)

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <CreatePostCard onClick={handleOpen} style={{ cursor: 'pointer' }}>
        <CreatePostArea>
        <FramedAvatar image={Link} frame={User?.status} size={50}/>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Start a post"
          size="small"
          sx={{borderRadius:"15px"}}
        />
        </CreatePostArea>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button>Write Post</Button>         
        </Box>
      </CreatePostCard>
      

      <PostModal open={openModal} handleClose={handleClose} />
    </>
  );
}

export default PostComposer;
