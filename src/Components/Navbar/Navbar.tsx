import {
  StyledAppBar,
  StyledToolbar,
  LogoBox,
  SearchBox,
  StyledInputBase,
  NavItemsBox,
  NavIconButton,
  MeAvatar,
} from './Navbarstyle';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import GridViewIcon from '@mui/icons-material/GridView';

import { Typography} from '@mui/material';
import { useState } from 'react';
import MeMenu from './MeMenu/MeMenu';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Redux/Store/Store';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showMeMenu, setShowMeMenu] = useState(false);
  const Link = useSelector((state: RootState) => state.auth.Link);
  const navigate = useNavigate();

  const handleMeClick = () => {
    setShowMeMenu((prev) => !prev);
  };

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
            <NavIconButton  onClick={()=>navigate("/dash")}>
              <HomeIcon/>
              <Typography variant="caption">Home</Typography>
            </NavIconButton>
            <NavIconButton>
              <PeopleIcon />
              <Typography variant="caption">My Network</Typography>
            </NavIconButton>
            <NavIconButton>
              <WorkIcon />
              <Typography variant="caption">Jobs</Typography>
            </NavIconButton>
            <NavIconButton>
              <MessageIcon />
              <Typography variant="caption">Messaging</Typography>
            </NavIconButton>
            {/* <NavIconButton>
              <Badge badgeContent={16} color="error">
                <NotificationsIcon />
              </Badge>
              <Typography variant="caption">Notifications</Typography>
            </NavIconButton> */}

            <NavIconButton onClick={handleMeClick}>
              <MeAvatar src={Link} />
              <Typography variant="caption">Me</Typography>
            </NavIconButton>

            <NavIconButton>
              <GridViewIcon />
              <Typography variant="caption">For Business</Typography>
            </NavIconButton>
          </NavItemsBox>
        </StyledToolbar>
      </StyledAppBar>

      {showMeMenu && <MeMenu />}
    </>
  );
};

export default Navbar;
