import axios from 'axios';
import { InvitationCard } from './NetworkStyle'
import { Avatar, Box, Button, Typography } from '@mui/material'
import type { RootState } from '../../Redux/Store/Store';
import { useSelector } from 'react-redux';

interface Props {
  name: string;
  des: string;
  image: string;
  id: string;
  removeRequest: (id: string) => void;
}

function Request(props: Props) {
  const { name, des, image, id, removeRequest } = props;
  const User = useSelector((state: RootState) => state.auth.User);
  const url = import.meta.env.VITE_BASE_URL;

  const HandleAccept = async () => {
    try {
      const res = await axios.put(
        `${url}/connection/confirmconnection/${User?._id}/${id}`
      );
      console.log(res.data);
      removeRequest(id); 
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const HandleIgnore = async () => {
    try {
      const res = await axios.put(
        `${url}/connection/rejectconnection/${User?._id}/${id}`
      );
      console.log(res.data);
      removeRequest(id); // 👈 Remove from UI
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <InvitationCard>
      <Box display="flex" alignItems="center">
        <Avatar src={image} sx={{ width: 40, height: 40, mr: 2 }} />
        <Box>
          <Typography variant="subtitle2">
            <b>{name}</b> ✅
          </Typography>
          <Typography variant="body2">{des}</Typography>
          <Typography variant="caption">
            Rashmi Yadav and 134 other mutual connections
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button size="small" variant="outlined" onClick={HandleIgnore}>
          Ignore
        </Button>
        <Button size="small" variant="outlined" sx={{ ml: 1 }} onClick={HandleAccept}>
          Accept
        </Button>
      </Box>
    </InvitationCard>
  );
}

export default Request;
