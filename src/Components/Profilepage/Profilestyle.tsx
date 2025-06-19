// ProfileStyles.tsx
import { Avatar, Box, Button, styled, Typography } from '@mui/material';

export const Container = styled(Box)({
  backgroundColor: '#f3f1ee',
  position:"relative",
  width:"900px",
  minHeight: '90vh',
  top:'10px',
  left:'200px',
  padding: "50px"
});

export const CoverPhoto = styled(Avatar)({
  height: 200,
  width: "100%",
  backgroundColor: 'var(--background-soft)',
  position: 'relative',
  borderRadius: 0,
  borderTopRightRadius: 15,
  borderTopLeftRadius: 15
});

export const EditCoverButton = styled(Button)({
  position: 'absolute',
  top: 10,
  right: 10,
  backgroundColor: 'var(--background-light)',
  boxShadow: '0 2px 5px var(--shadow-medium)',
  textTransform: 'none',
  color: 'var(--text-color-black)',
});

export const AvatarWrapper = styled(Box)({
  position: 'relative',
  width: 'fit-content',
  marginLeft: 30,
  marginTop: -120,
});

export const EditAvatarIcon = styled(Box)({
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: 'var(--background-light)',
  borderRadius: '50%',
  boxShadow: '0 2px 5px var(--shadow-medium)',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const ProfileInfoSection = styled(Box)({
  backgroundColor: 'var(--background-light)',
  paddingTop: 120, 
  paddingBottom: 20,
  paddingLeft: 30,
  paddingRight: 30,
  marginTop: -60,
  borderRadius: '0 0 12px 12px',
  boxShadow: '0 4px 12px var(--shadow-strong)',
});

export const ButtonsRow = styled(Box)({
  marginTop: 15,
  display: 'flex',
  gap: 10,
});

export const ConnectButton = styled(Button)({
  textTransform: 'none',
  backgroundColor: 'var(--primary-color)',
  color: 'var(--text-color-light)',
  '&:hover': {
    backgroundColor: 'var(--primary-color-hover)',
  },
});

export const MessageButton = styled(Button)({
  textTransform: 'none',
  color: 'var(--primary-color)',
  borderColor: 'var(--primary-color)',
  '&:hover': {
    backgroundColor: 'var(--primary-color-light)',
  },
});

export const SectionCard = styled(Box)({
  backgroundColor: 'var(--background-light)',
  marginTop: '10px',
  marginBottom: '10px',
  padding: '10px',
  borderRadius: '10px',
  boxShadow: '0 2px 5px var(--shadow-light)',
});

export const SectionTitle = styled(Typography)({
  display: 'flex',
  flexDirection: 'row',
  gap: '100px',
  fontSize: '18px',
  fontWeight: 600,
  marginBottom: '10px',
  color: 'var(--text-color-default)',
});

export const SectionContent = styled(Box)({
  color: 'var(--text-color-secondary)',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const FramedAvatarWrapper = styled(Box)({
  position: 'relative',
  width: 100,
  height: 100,
});

export const FrameSVG = styled('svg')({
  position: 'absolute',
  top: 0,
  left: 0,
});

export const CenteredBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  position: "relative",
}));

export const FrameOptions = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const SmallAvatar = styled(Avatar)(() => ({
  width: 60,
  height: 60,
  border: "2px solid white",
  cursor: "pointer",
}));

export const AvatarWithFrameContainer = styled(Box)({
  position: "relative",
  width: 150,
  height: 150,
});

export const StyledAvatar = styled(Avatar)({
  width: 150,
  height: 150,
  borderRadius: "50%",
  zIndex: 1,
});

// export const FrameOverlay = styled("svg")({
//   position: "absolute",
//   top: 0,
//   left: 0,
//   zIndex: 2,
// });

export const ProfileImageWrapper = styled(Box)({
  position: 'relative',
  width: 150,
  height: 150,
});

export const FrameOverlay = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
});
