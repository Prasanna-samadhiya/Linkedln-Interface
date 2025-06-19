import { useSelector } from 'react-redux';
import type { RootState } from '../../Redux/Store/Store';
import { Typography } from '@mui/material';
import {
  ProfileCard,
  CustomButton,
  CardHeader,
  FramedAvatarWrapper
} from './DashboardStyle';
import FramedAvatar from './FrameImage';

function ProfileInfo() {
  const Link = useSelector((state: RootState) => state.auth.Link);
  const User = useSelector((state: RootState) => state.auth.User);

  return (
    <ProfileCard>
      <CardHeader backgroundimage={Link} />
      <FramedAvatarWrapper>
        <FramedAvatar image={Link} frame={User?.status} size={80} />
      </FramedAvatarWrapper>
      <Typography variant="subtitle1" fontWeight={600}>
        {User?.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ px: 2 }}>
        {User?.description}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Indore, Madhya Pradesh
      </Typography>
      <CustomButton variant="outlined">
        + Experience
      </CustomButton>
    </ProfileCard>
  );
}

export default ProfileInfo;
