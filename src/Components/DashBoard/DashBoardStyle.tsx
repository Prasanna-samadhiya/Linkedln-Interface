// dashboardstyle.tsx
import { styled } from '@mui/material/styles';
import { Box, Avatar, Button, Paper } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#f4f2ee',
});

export const Sidebar = styled(Box)({
  width: '20%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const MainContent = styled(Box)({
  width: '55%',
});

export const RightSidebar = styled(Box)({
  width: '20%',
});

export const ProfileCard = styled(Paper)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',     
  justifyContent: 'center', 
  gap: theme.spacing(1), 
  padding: '16px',
  textAlign: 'center',
  borderRadius: '12px',   
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
});

export const CreatePostCard = styled(Paper)({
  padding: '16px',
  borderRadius: '12px',
  marginTop: '16px',
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