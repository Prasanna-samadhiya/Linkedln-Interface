// NavbarStyle.tsx
import { AppBar, Box, Toolbar, IconButton, InputBase, Avatar} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ffffff',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 1100,
});

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#eef3f8', 1),
  '&:hover': {
    backgroundColor: alpha('#dce6f1', 1),
  },
  marginLeft: 10,
  width: '250px',
}));

export const StyledInputBase = styled(InputBase)({
  color: 'black',
  padding: '8px 10px',
  width: '100%',
});

export const NavItemsBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

export const NavIconButton = styled(IconButton)({
  color: '#555',
  flexDirection: 'column',
  fontSize: '12px',
});

export const MeAvatar = styled(Avatar)({
  width: 24,
  height: 24,
});
