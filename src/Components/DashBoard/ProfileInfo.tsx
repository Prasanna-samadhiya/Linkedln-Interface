import { useSelector } from 'react-redux';
import type { RootState } from '../../Redux/Store/Store';
import { CustomButton, ProfileCard } from './DashboardStyle'
import { Typography } from '@mui/material'
import FramedAvatar from './FrameImage';




function ProfileInfo() {

    const Link = useSelector((state: RootState) => state.auth.Link);
    const User = useSelector((state: RootState) => state.auth.User);

    return (
        <ProfileCard>
            <div>
            <FramedAvatar image={Link} frame={User?.status} size={120}/>
            </div>
            <Typography variant="h6">{User?.name}</Typography>
            <Typography variant="body2" color="text.secondary">
                {User?.description}
            </Typography>
            <CustomButton variant="outlined">+ Experience</CustomButton>
        </ProfileCard>

    )
}

export default ProfileInfo
