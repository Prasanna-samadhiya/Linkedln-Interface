import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

const HomeCard = styled(Card)({
  width: '100%',
  maxWidth: '480px',
  padding: '36px 28px',
  borderRadius: '16px',
  backgroundColor: '#ffffff',
  boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const HomeHeading = styled(Typography)({
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '12px',
  color: '#0a66c2',
});

const HomeSubtext = styled(Typography)({
  fontSize: '16px',
  color: '#555',
  marginBottom: '24px',
});

const ButtonGroup = styled('div')({
  display: 'flex',
  gap: '16px',
  width: '100%',
  justifyContent: 'space-around',
});

export {ButtonGroup,HomeSubtext,HomeHeading,HomeCard}