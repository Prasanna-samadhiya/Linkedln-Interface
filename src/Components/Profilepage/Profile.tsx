import { AboutHeading, ConnectButton, ExperienceCard, MessageButton, ProfileAbout, ProfileAvatar, ProfileButtonGroup, ProfileContainer, ProfileHeader, ProfileInfo, ProfileName, ProfileTitle } from './Profilestyle'
import { Typography } from '@mui/material'

interface Props {}

function Profile(props: Props) {
    const {} = props

    return (
        <ProfileContainer>
  <ProfileHeader />
  <ProfileAvatar src="/avatar.jpg" />
  
  <ProfileInfo>
    <ProfileName>Prasanna Samadhiya</ProfileName>
    <ProfileTitle>Full Stack Developer | MERN | TypeScript | Open Source Enthusiast</ProfileTitle>

    <ProfileButtonGroup>
      <ConnectButton>Connect</ConnectButton>
      <MessageButton>Message</MessageButton>
    </ProfileButtonGroup>
  </ProfileInfo>

  <ProfileAbout>
    <AboutHeading>About</AboutHeading>
    <Typography variant="body2">
      Passionate developer with a focus on modern web technologies and clean, scalable solutions.
    </Typography>
  </ProfileAbout>

  <ExperienceCard>
    <Typography variant="h6">Experience</Typography>
    <Typography variant="body2">Software Developer @ Tech Company</Typography>
  </ExperienceCard>
</ProfileContainer>

    )
}

export default Profile
