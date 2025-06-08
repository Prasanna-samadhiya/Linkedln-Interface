// dashboard.tsx

import {
  Container,
  Sidebar,
  MainContent,
  RightSidebar,
  ProfileCard
} from './DashboardStyle';
import { Typography} from '@mui/material';
import ProfileInfo from './ProfileInfo';
import PostComposer from './PostComposer';
import PostItem from './PostItem';
import NewsWidget from './NewsWidget';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard2 = () => {
 
  const [Posts,setPosts]  = useState([]);
  
  useEffect(()=>{
      axios.get("http://localhost:3000/post/getallposts").then((response)=>{
        console.log(response.data)
        setPosts(response.data.postsWithPresignedUrls);
      }).catch((err)=>{
        console.log(err)
      })
  },[])

  return (
    <>
    <Navbar/>
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
        {Posts.map((ele:any)=>{
            return <PostItem
              postid={ele._id}
              content={ele.content}
              presignedImages={ele.presignedImages}
              Likes={ele.likes}
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
