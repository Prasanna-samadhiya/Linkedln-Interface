import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { ImageArea, PostCard } from "./DashboardStyle";
import ImageCarousel from "./ImageCarausel";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from "react-redux";
import type { RootState } from "../../Redux/Store/Store";
import { useEffect, useState } from "react";
import axios from "axios";

interface PostItemProps {
  postid: string
  content: string;
  presignedImages: string[];
  Likes: string[];
}

function PostItem({ postid, content, presignedImages, Likes }: PostItemProps) {

  const Link = useSelector((state: RootState) => state.auth.Link);
  const User = useSelector((state: RootState) => state.auth.User);
  const [CommentArr, setCommetArr] = useState([]);
  const [text, setText] = useState("");
  const [ShowComment, setShowComment] = useState(false);
  const [Liked, setLiked] = useState(false);
  const [deleted, setDelete] = useState(false);
  const [LikeArr, setLikeArr] = useState(Likes);

  const Handleclicked = async () => {
    console.log("hi", postid)
    try {
      const res = await axios.put(`http://localhost:3000/post/like/${postid}`, { userId: User?._id }, { withCredentials: true })
      console.log(res.data.post.likes)
      setLikeArr(res.data.post.likes)
      console.log(res.data.post.likes.length)
      if (res.data.post.likes.length == 0) {
        setLiked(false)
      } else {
        setLiked(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const HandleChange = (e: any) => {
    setText(e.target.value);
  }

  const HandleCommentClicked = async() => {
    try {
      const res = await axios.put(`http://localhost:3000/post/comment/${postid}`, { userid: User?._id, message: text }, { withCredentials: true })
      console.log("Comments:", res.data.comments);
      setCommetArr(res.data.comments);
    } catch (err) {
      console.log(err)
    }
  }

  const HandleDelete = async(ele:string)=>{
    try {
      const res = await axios.delete(`http://localhost:3000/post/deletecomments/${postid}/${ele}`,{ withCredentials: true});
      console.log(res.data)
      setDelete(!deleted) 
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if (LikeArr.some((ele: string) => ele == User?._id)) {
      setLiked(true);
    } else {
      setLiked(false)
    }

    async function GetComments() {
      const res = await axios.get(`http://localhost:3000/post/getcomments/${postid}`, { withCredentials: true })
      console.log(res.data.comments);
      setCommetArr(res.data.comments)
    }

    GetComments();

    console.log(Liked, LikeArr.some((ele: string) => ele == User?._id) ? true : false);
  }, [Liked,deleted]);

  return (
    <PostCard>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Avatar src={Link} sx={{ width: 56, height: 56 }} />
        <Typography>{User?.name}</Typography>
      </div>
      <Typography variant="subtitle1" m={3}>
        {content}
      </Typography>

      <ImageArea>
        <ImageCarousel images={presignedImages} autoSlide />
      </ImageArea>

      <Box display="flex" mt={2} justifyContent="space-between">
        {Liked ?
          <Button
            size="small"
            variant="outlined"
            startIcon={<FavoriteIcon style={{ color: "red" }} />}
            onClick={Handleclicked}>
            Liked
          </Button>
          :
          <Button
            size="small"
            variant="outlined"
            startIcon={<FavoriteIcon />}
            onClick={Handleclicked}>
            Like
          </Button>}
        <Button
          size="small"
          variant="outlined"
          startIcon={<RepeatOutlinedIcon />}>
          Repost
        </Button>
        <Button
          size="small"
          variant="outlined"
          startIcon={<ChatBubbleOutlineIcon />}
          onClick={() => setShowComment(!ShowComment)}>
          Comment
        </Button>
      </Box>
      {ShowComment ?
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 3 }}>
            <Avatar src={Link} ></Avatar>
            <TextField
              id="input-with-sx"
              label="Add a comment"
              variant="standard"
              onChange={HandleChange}
              sx={{ flex: 1 }}
            />
            <Button
              variant="contained"
              size="small"
              onClick={HandleCommentClicked}
              sx={{ whiteSpace: 'nowrap' }}
            >
              Comment
            </Button>
          </Box>

          <Box sx={{ mt: 2 }}>
            {CommentArr.map((ele: any, index: number) => (
              <Box key={index} sx={{ py: 1, borderBottom: '1px solid #e0e0e0', display: "flex", flexDirection: "row", gap: 3 ,justifyContent: "space-around" }}>
                <Box sx={{display: "flex",flexDirection: "row",gap: 3}}>
                <Avatar src={ele.id.image}></Avatar>
                <Box>
                  <Typography><b>{ele.id.name}</b></Typography>
                  {ele.message}
                  
                </Box>
                </Box>
                <Button
                    size="large"
                    startIcon={<DeleteOutlineIcon />}
                    onClick={() => HandleDelete(ele._id)}>
                  </Button>
              </Box>
            ))}
          </Box>
        </Box> : null}
    </PostCard>
  );
}

export default PostItem;
