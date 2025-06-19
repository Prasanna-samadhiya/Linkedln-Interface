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
import { useEffect, useState } from 'react';
import MeMenu from './MeMenu/MeMenu';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Redux/Store/Store';
import { useNavigate, useLocation } from 'react-router-dom';
import FramedAvatar from '../DashBoard/FrameImage';
import LinkedlnImage from '../../assets/Linkedln.webp';
import { Badge } from '@mui/material';
import axios from 'axios';

const Navbar = () => {
  const [showMeMenu, setShowMeMenu] = useState(false);
  const Link = useSelector((state: RootState) => state.auth.Link);
  const User = useSelector((state: RootState) => state.auth.User);
  const navigate = useNavigate();
  const location = useLocation();
  const [requests,setRequests] = useState(0);
  const url = import.meta.env.VITE_BASE_URL;

  const handleMeClick = () => {
    setShowMeMenu((prev) => !prev);
  };

  const isActive = (path: string) => location.pathname === path;

  useEffect(()=>{
     
    async function GetAllRequests() {
      const res = await axios.get(`${url}/connection/getrequests/${User?._id}`);
      setRequests(res.data.newUsers.length);
    }

    GetAllRequests();

  },[])

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          <LogoBox>
            <img src={LinkedlnImage} style={{height:"60px",width:"60px"}}/>
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
              <Badge badgeContent={requests} color="primary">
              <PeopleIcon />
              </Badge>
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
              <NavText>Me▼</NavText>
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
