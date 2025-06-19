import {Container,Sidebar,MainContent,RightSidebar,Filter} from './DashboardStyle';
import { Box, Typography } from '@mui/material';
import ProfileInfo from './ProfileInfo';
import PostComposer from './PostComposer';
import PostItem from './PostItem';
import NewsWidget from './NewsWidget';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FramedAvatar from './FrameImage';

const Dashboard2 = () => {

  const [Posts, setPosts] = useState([]);
  const [Reposts, setReposts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [Loader,setLoader] = useState(true);
  const url = import.meta.env.VITE_BASE_URL;

  

  useEffect(() => {

    if (sortBy == "top") {
      const GetAllPostsByLikes = async () => {
        setLoader(true);
        setPosts([]);
        await axios.get(`${url}/post/getpostsbylikes`,{ withCredentials: true }).then((response) => {
          console.log(response.data)
          setPosts(response.data.postsWithPresignedUrls);
          setLoader(false)
        }).catch((err) => {
          console.log(err)
        })
      }

      GetAllPostsByLikes();
    }
    else if(sortBy == "time"){
      const GetAllPostsByTime = async () => {
        setLoader(true);
        setPosts([]);
        await axios.get(`${url}/post/getpostbytime`,{ withCredentials: true }).then((response) => {
          console.log(response.data)
          setPosts(response.data.postsWithPresignedUrls);
          setLoader(false)
        }).catch((err) => {
          console.log(err)
        })
      }

      GetAllPostsByTime();
    }
    else{
      const GetAllPosts = async () => {
       setLoader(true); 
      await axios.get(`${url}/post/getallposts`).then((response) => {
        console.log(response.data)
        setPosts(response.data.postsWithPresignedUrls);
        setLoader(false)
      }).catch((err) => {
        console.log(err)
      })
    }
      GetAllPosts();
    }

    const GetAllReposts = async () => {
      axios.get(`${url}/post/getreposts`, { withCredentials: true }).then((response) => {
        setReposts(response.data.postsWithPresignedUrls);
        console.log("Reposts:", response.data.postsWithPresignedUrls)
      }).catch((err) => {
        console.log(err)
      });
    }

    GetAllReposts();
    console.log("Reposts", Reposts)
  }, [sortBy])

  return (
    <>
      <Navbar />
      <Container>
        <Sidebar>
          <ProfileInfo />
        </Sidebar>

        <MainContent>
         
         <PostComposer />
          <Filter>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'top' | 'time')}
              style={{ padding: "10px", borderRadius: "10px" }}
            >
              <option value="none">None</option>
              <option value="top">Top</option>
              <option value="time">Time</option>
            </select>
          </Filter>
          
          {Reposts.map((ele: any) => {
            console.log('Repost:', ele._id, ele.presignedImages, ele.content);

            return (
              <Box
                key={ele._id}
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: 2,
                  my: 3,
                  p: 2,
                  backgroundColor: "white"
                }}
              >
                {ele.repostedBy && (
                  <Box display="flex" alignItems="center" mb={2}>
                    <FramedAvatar
                      image={ele.repostedBy.image}
                      frame={ele.repostedBy.status}
                      size={40}
                    />
                    <Typography variant="subtitle2" sx={{ m: 2 }}>
                      {ele.repostedBy.name} reposted
                    </Typography>
                  </Box>
                )}

                <PostItem
                  postid={ele._id}
                  content={ele.content}
                  presignedImages={ele.presignedImages}
                  Likes={ele.likes}
                  post={ele}
                />
              </Box>
            );
          })}

          {Loader?<div>Loading</div>:
          Posts.map((ele: any) => {
            return <PostItem
              postid={ele._id}
              content={ele.content}
              presignedImages={ele.presignedImages}
              Likes={ele.likes}
              post={ele}
            />
          })}

        </MainContent>

        <RightSidebar>
          <NewsWidget />
        </RightSidebar>
      </Container>
    </>
  );
};

export default Dashboard2;
