import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

const HomeCard = styled(Card)({
  width: '100%',
  maxWidth: '480px',
  padding: '36px 28px',
  borderRadius: '16px',
  backgroundColor: 'var(--card-bg)',
  boxShadow: `0 6px 24px var(--card-shadow)`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const HomeHeading = styled(Typography)({
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '12px',
  color: 'var(--primary-color)',
});

const HomeSubtext = styled(Typography)({
  fontSize: '16px',
  color: 'var(--text-color-secondary)',
  marginBottom: '24px',
});

const ButtonGroup = styled('div')({
  display: 'flex',
  gap: '16px',
  width: '100%',
  justifyContent: 'space-around',
});

export { ButtonGroup, HomeSubtext, HomeHeading, HomeCard };
