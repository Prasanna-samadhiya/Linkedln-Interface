import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  padding: '0 16px',
  color: '#0a66c2',
  position: 'sticky',
  top: 0,
  zIndex: 1100,
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '64px',
  padding: '0',
});

const Logo = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '20px',
  color: '#0a66c2',
  textDecoration: 'none',
  cursor: 'pointer',
});

const NavLinks = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

const NavButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 600,
  padding: '6px 14px',
  borderRadius: '6px',
  fontSize: '14px',
  color: '#0a66c2',
  border: '1px solid #0a66c2',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#eaf4fe',
    borderColor: '#0a66c2',
  },
});

const PrimaryButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 600,
  padding: '6px 14px',
  borderRadius: '6px',
  fontSize: '14px',
  color: '#fff',
  backgroundColor: '#0a66c2',
  '&:hover': {
    backgroundColor: '#004182',
  },
});

const MenuIconButton = styled(IconButton)({
  display: 'none',
  '@media (max-width: 768px)': {
    display: 'inline-flex',
  },
});

export {
  StyledAppBar,
  StyledToolbar,
  Logo,
  NavLinks,
  NavButton,
  PrimaryButton,
  MenuIconButton,
};