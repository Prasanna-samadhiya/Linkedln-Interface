import {
  StyledAppBar,
  StyledToolbar,
  LogoBox,
  SearchBox,
  StyledInputBase,
  NavItemsBox,
  NavIconButton,
  NavText,
} from './Navbarstyle';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import GridViewIcon from '@mui/icons-material/GridView';
import { Typography } from '@mui/material';
import { useState } from 'react';
import MeMenu from './MeMenu/MeMenu';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Redux/Store/Store';
import { useNavigate, useLocation } from 'react-router-dom';
import FramedAvatar from '../DashBoard/FrameImage';

const Navbar = () => {
  const [showMeMenu, setShowMeMenu] = useState(false);
  const Link = useSelector((state: RootState) => state.auth.Link);
  const User = useSelector((state: RootState) => state.auth.User);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMeClick = () => {
    setShowMeMenu((prev) => !prev);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          <LogoBox>
            <Typography
              variant="h6"
              noWrap
              sx={{
                color: '#0077b5',
                fontWeight: 'bold',
                marginRight: 2,
              }}
            >
              LinkedIn
            </Typography>
            <SearchBox>
              <StyledInputBase placeholder="Search" startAdornment={<SearchIcon />} />
            </SearchBox>
          </LogoBox>

          <NavItemsBox>
            <NavIconButton active={isActive("/dash")} onClick={() => navigate("/dash")}>
              <HomeIcon />
              <NavText>Home</NavText>
            </NavIconButton>

            <NavIconButton active={isActive("/network")} onClick={() => navigate("/network")}>
              <PeopleIcon />
              <NavText>My Network</NavText>
            </NavIconButton>

            <NavIconButton active={isActive("/jobs")} onClick={() => navigate("/jobs")}>
              <WorkIcon />
              <NavText>Jobs</NavText>
            </NavIconButton>

            <NavIconButton active={isActive("/messages")} onClick={() => navigate("/messages")}>
              <MessageIcon />
              <NavText>Messaging</NavText>
            </NavIconButton>

            <NavIconButton active={isActive("/me")} onClick={handleMeClick}>
              <FramedAvatar image={Link} frame={User?.status} size={30} />
              <NavText>Me</NavText>
            </NavIconButton>

            <NavIconButton active={isActive("/business")} onClick={() => navigate("/business")}>
              <GridViewIcon />
              <NavText>For Business</NavText>
            </NavIconButton>

          </NavItemsBox>
        </StyledToolbar>
      </StyledAppBar>

      {showMeMenu && <MeMenu />}
    </>
  );
};

export default Navbar;
