import { styled } from '@mui/material/styles';
import { Card, Button, Typography, Avatar } from '@mui/material';

// Top-level wrapper
const ProfileContainer = styled('div')({
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

// Header banner
const ProfileHeader = styled('div')({
  position: 'relative',
  height: '200px',
  backgroundColor: '#e6f0f8',
  borderRadius: '8px',
  overflow: 'hidden',
});

// Avatar over the banner
const ProfileAvatar = styled(Avatar)({
  width: '120px',
  height: '120px',
  border: '4px solid white',
  position: 'relative',
  bottom: '-60px',
  left: '30px',
  zIndex: 2,
});

// Info container below avatar
const ProfileInfo = styled(Card)({
  marginTop: '60px',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

// Name + Title
const ProfileName = styled(Typography)({
  fontWeight: 700,
  fontSize: '22px',
  color: '#0a66c2',
});

const ProfileTitle = styled(Typography)({
  fontSize: '16px',
  color: '#555',
});

// Buttons (e.g., Connect, Message)
const ProfileButtonGroup = styled('div')({
  display: 'flex',
  gap: '12px',
  marginTop: '10px',
});

const ConnectButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 600,
  padding: '8px 20px',
  borderRadius: '6px',
  color: '#fff',
  backgroundColor: '#0a66c2',
  '&:hover': {
    backgroundColor: '#004182',
  },
});

const MessageButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 600,
  padding: '8px 20px',
  borderRadius: '6px',
  color: '#0a66c2',
  border: '1px solid #0a66c2',
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#eaf4fe',
  },
});

// Bio/About section
const ProfileAbout = styled(Card)({
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
});

const AboutHeading = styled(Typography)({
  fontWeight: 600,
  fontSize: '18px',
  marginBottom: '10px',
});

// Experience or content card
const ExperienceCard = styled(Card)({
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
  marginTop: '10px',
});

export {
  ProfileContainer,
  ProfileHeader,
  ProfileAvatar,
  ProfileInfo,
  ProfileName,
  ProfileTitle,
  ProfileButtonGroup,
  ConnectButton,
  MessageButton,
  ProfileAbout,
  AboutHeading,
  ExperienceCard
};
