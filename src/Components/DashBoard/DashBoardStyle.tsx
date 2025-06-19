// dashboardstyle.tsx
import { styled } from '@mui/material/styles';
import { Box, Avatar, Button, Paper } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
  backgroundColor: '#f4f2ee',
  gap:"50px"
});

export const Sidebar = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const MainContent = styled(Box)({
 
});

export const RightSidebar = styled(Box)({
     width:"270px" 
});

export const Filter = styled(Box)(({ theme }) => ({
  width: '97%',
  padding: '12px',
  borderRadius: '12px',
   backgroundColor: '#f3f1ee',
  display: 'flex',
  justifyContent: 'right',
  marginTop: '10px',
  marginBottom: '10px',
  maxWidth: '510px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const PremiumCard = styled(Paper)({
  padding: '16px',
  borderRadius: '12px',
  textAlign: 'center',
  backgroundColor: '#fff',
});

export const PostCard = styled(Paper)({
  padding: '16px',
  borderRadius: '12px',
  marginTop: '16px',
  maxWidth: '550px'
});

export const CreatePostCard = styled(Paper)({
  padding: '16px',
  borderRadius: '12px',
  marginTop: '16px',
  maxWidth: '550px',
 
});

export const CreatePostArea = styled(Box)({
 display: 'flex',
  flexDirection: 'row',
  gap: "10px"
});


export const NewsCard = styled(Paper)({
  padding: '16px',
  borderRadius: '12px',
  backgroundColor: '#fff',
});

export const AvatarLarge = styled(Avatar)({
  width: 60,
  height: 60,
  margin: '0 auto 10px',
});

export const AvatarLargeModal = styled(Avatar)({
  width: 40,
  height: 40,
  marginLeft: 10,
  marginRight: 10
});

export const CustomButton = styled(Button)({
  marginTop: '10px',
});

export const ImageArea = styled(Box)({
  display: "flex",
  justifyContent: "center"
})

export const ProfileCard = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: '56px', 
  paddingBottom: '16px',
  textAlign: 'center',
  borderRadius: '12px',
  width: '200px',
  height: '170px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  backgroundColor: '#fff',
}));

export const CardHeader = styled(Box)<{ backgroundimage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-size: cover;
  background-position: center;
  z-index: 1;
  background-image: url(${({ backgroundimage }) => backgroundimage});
`;

export const FramedAvatarWrapper = styled(Box)({
  marginTop: '-40px',
  zIndex: 2,
  borderRadius: '50%',
  border: '3px solid white',
});