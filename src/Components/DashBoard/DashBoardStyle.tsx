// DashboardStyle.ts
import { styled } from '@mui/material/styles';
import { Box, Typography, Paper, TextField, Avatar } from '@mui/material';

export const DashboardContainer = styled(Box)({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#f4f4f4',
});

export const Sidebar = styled(Box)({
  width: '250px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const FeedContainer = styled(Box)({
  flex: 1,
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
});

export const SuggestionsContainer = styled(Box)({
  width: '250px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const StyledCard = styled(Paper)({
  padding: '12px',
  borderRadius: '10px',
  backgroundColor: '#fff',
});

export const SectionTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '16px',
  marginBottom: '8px',
});

export const PostActions = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '12px',
});

export const ActionGroup = styled(Box)({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const LikeButtonGroup = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const CommentButtonGroup = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const DislikeButtonGroup = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const PostIcons = styled(Box)({
    display:'flex',
    flexDirection:'row'
})

export const CreatePostContainer = styled(Box)({
  marginBottom: '24px',
  padding: '16px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const PostTextField = styled(TextField)({
  width: '100%',
});

export const PostHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '8px',
});

export const PostAvatar = styled(Avatar)({
  width: 40,
  height: 40,
});