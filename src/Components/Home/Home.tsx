import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenWrapper, SubmitButton } from '../Appstyle';
import { HomeCard, HomeHeading, HomeSubtext } from './Homestyle';
import { ButtonGroup } from '@mui/material';


const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ScreenWrapper>
      <HomeCard>
        <HomeHeading>Welcome to LinkedIn Clone</HomeHeading>
        <HomeSubtext>Connect, grow, and explore new career opportunities.</HomeSubtext>
        <ButtonGroup>
          <SubmitButton onClick={() => navigate('/login')}>Login</SubmitButton>
          <SubmitButton onClick={() => navigate('/register')}>Register</SubmitButton>
        </ButtonGroup>
      </HomeCard>
    </ScreenWrapper>
  );
};

export default Home;
