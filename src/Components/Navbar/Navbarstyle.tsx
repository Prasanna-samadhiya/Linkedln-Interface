import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'var(--appbar-bg)',
  boxShadow: `0 2px 8px var(--appbar-shadow)`,
  padding: '0 16px',
  color: 'var(--text-color-primary)',
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
  color: 'var(--text-color-primary)',
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
  color: 'var(--text-color-primary)',
  border: '1px solid var(--primary-color)',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'var(--primary-color-light)',
    borderColor: 'var(--primary-color)',
  },
});

const PrimaryButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 600,
  padding: '6px 14px',
  borderRadius: '6px',
  fontSize: '14px',
  color: 'var(--text-color-light)',
  backgroundColor: 'var(--primary-color)',
  '&:hover': {
    backgroundColor: 'var(--primary-color-hover)',
  },
});

const MenuIconButton = styled(IconButton)({
  display: 'none',
  '@media (max-width: 100px)': {
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
