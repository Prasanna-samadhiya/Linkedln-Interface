import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledAppBar,
  StyledToolbar,
  Logo,
  NavLinks,
  NavButton,
  PrimaryButton,
  MenuIconButton,
} from './Navbarstyle';
import MenuIcon from '@mui/icons-material/Menu'; // Optional mobile menu icon

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledAppBar>
      <StyledToolbar>

        <Logo variant="h6" onClick={() => navigate('/')}>
          LinkedIn 
        </Logo>

        <NavLinks>
          <NavButton onClick={() => navigate('/login')}>Login</NavButton>
          <PrimaryButton onClick={() => navigate('/register')}>Register</PrimaryButton>
        </NavLinks>

        <MenuIconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </MenuIconButton>

      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;