
import {
  Container,
  Sidebar,
  MainContent,
  RightSidebar,
  ProfileCard
} from './DashboardStyle';
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

  useEffect(() => {

    const GetAllPosts = async () => {
      await axios.get("http://localhost:3000/post/getallposts").then((response) => {
        console.log(response.data)
        setPosts(response.data.postsWithPresignedUrls);
      }).catch((err) => {
        console.log(err)
      })
    }

    const GetAllReposts = async () => {
      axios.get("http://localhost:3000/post/getreposts", { withCredentials: true }).then((response) => {
        setReposts(response.data.postsWithPresignedUrls);
        console.log("Reposts:", response.data.postsWithPresignedUrls)
      }).catch((err) => {
        console.log(err)
      });
    }

    GetAllPosts();
    GetAllReposts();
    console.log("Reposts", Reposts)
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <Sidebar>
          <ProfileInfo />

          <ProfileCard>
            <Typography variant="body2">Profile viewers: 10</Typography>
            <Typography variant="body2">Post impressions: 39</Typography>
          </ProfileCard>
        </Sidebar>

        <MainContent>

          <PostComposer />
          
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

          {Posts.map((ele: any) => {
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
