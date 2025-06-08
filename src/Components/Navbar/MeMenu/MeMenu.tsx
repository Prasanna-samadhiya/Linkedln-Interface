import { useNavigate } from 'react-router-dom'
import { ActionButtons, LinkText, MeMenuContainer, Section, UserInfo, UserText } from './MeMenuStyle'
import { Avatar, Button, Divider, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { loggedoutSuccess } from '../../../Redux/Slices/AuthSlice';
import type { RootState } from '../../../Redux/Store/Store';

function MeMenu() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Link = useSelector((state: RootState) => state.auth.Link);
    const User = useSelector((state: RootState) => state.auth.User);

    return (
        <MeMenuContainer>
            <UserInfo>
                <Avatar src={Link} sx={{ width: 56, height: 56 }} />
                <UserText>
                    <Typography variant="subtitle1">{User?.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {User?.description}
                    </Typography>
                </UserText>
            </UserInfo>

            <ActionButtons>
                <Button variant="outlined" fullWidth size="small" onClick={()=>navigate("/profile")}>View Profile</Button>
                <Button variant="contained" fullWidth size="small">Verify</Button>
            </ActionButtons>

            <Divider />

            <Section>
                <Typography variant="subtitle2" fontWeight={600}>Account</Typography>
                <LinkText>📁 Try 1 month of Premium for ₹0</LinkText>
                <LinkText>Settings & Privacy</LinkText>
                <LinkText>Help</LinkText>
                <LinkText>Language</LinkText>
            </Section>

            <Section>
                <Typography variant="subtitle2" fontWeight={600}>Manage</Typography>
                <LinkText>Posts & Activity</LinkText>
                <LinkText>Job Posting Account</LinkText>
            </Section>

            <Divider sx={{ my: 1 }} />

            <LinkText color="error"  onClick={()=>{
                dispatch(loggedoutSuccess())
                document.cookie = "linkedln=; expires=Thu, 18 Dec 2013 12:00:00 UTC; ";
                document.location.reload()
            }}>Sign Out</LinkText>
        </MeMenuContainer>
    )
}

export default MeMenu
