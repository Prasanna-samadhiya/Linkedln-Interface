import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CardContainer, TopImage, StyledButton } from "./ShowUserStyle";
import axios from "axios";
import type { RootState } from "../../../Redux/Store/Store";
import { useSelector } from "react-redux";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FramedAvatar from "../../DashBoard/FrameImage";

interface ShowUserProps {
  id: string;
  name: string;
  degree: string;
  description: string;
  mutualConnections: string;
  avatarUrl: string;
  button:string
  onClose?: () => void;
}

const ShowUser: React.FC<ShowUserProps> = ({
  id,
  name,
  degree,
  description,
  mutualConnections,
  avatarUrl,
  button,
  onClose,
}) => {

  const User = useSelector((state: RootState) => state.auth.User);
  const [ispending,setisPending] = useState(false)

  const HandleClick = async()=>{
        try {
          const res = await axios.post(`http://localhost:3000/connection/sendrequest/${User?._id}`,{recipientId:id});   
          console.log(res.data);
          setisPending(true);
        } catch (error) {
          console.log({requester:User?._id,recipent:id},error)
        }
  }

  useEffect(()=>{
      if(button=="pending"){
        setisPending(false);
      }else{
        setisPending(true);
      }
  },[])

  return (
    <CardContainer>
      <TopImage backgroundimage={avatarUrl}/>

      <IconButton
        size="small"
        onClick={onClose}
        sx={{ position: "absolute", top: 8, right: 8 }}
      >
        <CloseIcon/>
      </IconButton>

      <Box sx={{marginTop:"-36px"}}>
      <FramedAvatar image={avatarUrl} frame={User?.status} size={74}/>
      </Box>  

      <Box textAlign="center" mt={1}>
        <Typography fontWeight="bold">{name}</Typography>
        <Typography variant="body2" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: '160px', mx: 'auto' }}>
          ({degree})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="center" mt={1} mb={1}>
          <Avatar sx={{ width: 24, height: 24, mr: 1 }} />
          <Typography variant="caption" color="text.secondary">
            {mutualConnections}
          </Typography>
        </Box>

        {ispending?<StyledButton variant="outlined" fullWidth  onClick={HandleClick}>
            <AccessTimeIcon sx={{mx:1}}/>Pending
        </StyledButton>:<StyledButton variant="outlined" fullWidth  onClick={HandleClick}>
            + Connect
        </StyledButton>}
      </Box>
    </CardContainer>
  );
};

export default ShowUser;
