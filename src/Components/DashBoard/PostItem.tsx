import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { ImageArea, PostCard } from "./DashboardStyle";
import ImageCarousel from "./ImageCarausel";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import { useSelector } from "react-redux";
import type { RootState } from "../../Redux/Store/Store";
import { useEffect, useState } from "react";
import axios from "axios";
import FramedAvatar from "./FrameImage";
import SendIcon from '@mui/icons-material/Send';
import SentModal from "./SentModal/SentModal";


interface PostItemProps {
  postid: string
  content: string;
  presignedImages: string[];
  Likes: string[];
  post: any;
}

function PostItem({ postid, content, presignedImages, Likes, post }: PostItemProps) {

  const Link = useSelector((state: RootState) => state.auth.Link);
  const User = useSelector((state: RootState) => state.auth.User);
  const [CommentArr, setCommetArr] = useState([]);
  const [text, setText] = useState("");
  const [ShowComment, setShowComment] = useState(false);
  const [Liked, setLiked] = useState(false);
  const [deleted, setDelete] = useState(false);
  const [ShowLikes, setShowLikes] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [openSentModal, setOpenSentModal] = useState(false);
  const [LikeArr, setLikeArr] = useState(Likes);
  const [user,setUser] = useState([]);
  const [LikesLength, setLikesLength] = useState(Likes.length);
  const url = import.meta.env.VITE_BASE_URL;

  const Handleclicked = async () => {
    console.log("hi", postid)
    try {
      const res = await axios.put(`${url}/post/like/${postid}`, { userId: User?._id }, { withCredentials: true })
      console.log(res.data.post.likes)
      setLikeArr(res.data.post.likes)
      console.log(res.data.post.likes.length)
      setLikesLength(res.data.post.likes.length)
      if (res.data.post.likes.length == 0) {
        setLiked(false)
      } else {
        setLiked(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function GetAllUsers() {
    try {
      const res = await axios.get(
        `http://localhost:3000/connection/showconnections/${User?._id}`
      );
      setUser(res.data.connections);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  }

  const HandleChange = (e: any) => {
    setText(e.target.value);
  }

  const HandleCommentClicked = async () => {
    try {
      const res = await axios.put(`${url}/post/comment/${postid}`, { userid: User?._id, message: text }, { withCredentials: true })

      console.log("Updated Comments:", res.data.comments);

      const resc = await axios.get(`${url}/post/getcomments/${postid}`, {
        withCredentials: true
      });

      console.log("Updated Comments:", resc.data.comments);
      setCommetArr(resc.data.comments);
    } catch (err) {
      console.log(err)
    }
  }

  const HandleRepost = async () => {
    try {
      const res = await axios.post(`${url}/post/createrepost/${postid}`, {}, { withCredentials: true })
      console.log(res.data)
      setReposted(true)
    } catch (error) {
      setReposted(!reposted)
    }
  }

  const HandleDelete = async (ele: string) => {
    try {
      const res = await axios.delete(`${url}/post/deletecomments/${postid}/${ele}`, { withCredentials: true });
      console.log(res.data)
      setDelete(!deleted)
    } catch (error) {

    }
  }

  const HandleSent = async () => {
    try {
      console.log("sent")
      setOpenSentModal(true);
    } catch (error) {

    }
  }


  useEffect(() => {
    const initialLikes = post.likes?.map((like: any) => like._id);
    setLikeArr(initialLikes);

    if(1==1) console.log(LikeArr);

    if (initialLikes?.includes(User?._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }

    async function GetComments() {
      const res = await axios.get(`${url}/post/getcomments/${postid}`, { withCredentials: true });
      setCommetArr(res.data.comments);
    }

    GetComments();
    GetAllUsers()
  }, [deleted, reposted]);

  return (
    <PostCard>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <FramedAvatar image={post.userid?.image || ''} frame={post.userid?.status || ''} size={56} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>{post.userid?.name}</Typography>
          <Typography><em>{post.userid?.description}</em></Typography>
        </Box>
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
            Liked {LikesLength}
          </Button>
          :
          <Button
            size="small"
            variant="outlined"
            startIcon={<FavoriteIcon />}
            onClick={Handleclicked}>
            Like {LikesLength}
          </Button>}
        {reposted ?
          <Button
            size="small"
            variant="outlined"
            startIcon={<RepeatOnIcon style={{ color: "blue" }} />}

            onClick={HandleRepost}>
            Reposted
          </Button> :
          <Button
            size="small"
            variant="outlined"
            startIcon={<RepeatOnIcon />}
            onClick={HandleRepost}>
            Repost
          </Button>}
        <Button
          size="small"
          variant="outlined"
          startIcon={<ChatBubbleOutlineIcon />}
          onClick={() => setShowComment(!ShowComment)}>
          Comment
        </Button>
        <Button
          size="small"
          variant="outlined"
          startIcon={<SendIcon />}
          onClick={HandleSent}>
          Send
        </Button>
        <SentModal
          open={openSentModal}
          name={post.userid.name}
          onClose={() => setOpenSentModal(false)}
          users={user}
        />
      </Box>
      <Typography
        variant="body2"
        color="primary"
        sx={{ mt: 1, cursor: "pointer" }}
        onClick={() => setShowLikes(!ShowLikes)}
      >
        Look who liked this
      </Typography>
      {ShowLikes && (
        <Box sx={{ mt: 2, borderTop: '1px solid #ccc', pt: 2 }}>
          {post.likes && post.likes.length > 0 ? (
            post.likes.map((user: any, index: number) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar src={user.image} />
                <Box>
                  <Typography variant="subtitle2">{user.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{user.email}</Typography>
                </Box>
              </Box>
            ))
          ) : (
            <Typography variant="body2">No likes yet.</Typography>
          )}
        </Box>
      )}
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
              <Box key={index} sx={{ py: 1, borderBottom: '1px solid #e0e0e0', display: "flex", flexDirection: "row", gap: 3, justifyContent: "space-around" }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
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
