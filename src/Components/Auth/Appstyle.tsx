import { styled } from '@mui/material/styles'; 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';

const SubmitButton = styled(Button)({
  marginTop: '24px',
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '16px',
  backgroundColor: 'var(--primary-color)',
  color: '#fff',
  transition: 'background 0.3s ease',
  '&:hover': {
    backgroundColor: 'var(--primary-hover)',
  },
});

const MyButton = styled(Button)({
  backgroundColor: 'var(--danger-color)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'var(--danger-hover)',
  },
});

const StyledInput = styled(TextField)({
  margin: '10px 0',
  width: '100%',
  fontSize: '14px',
  '& .MuiInputBase-root': {
    borderRadius: '6px',
    backgroundColor: 'var(--input-bg)',
    fontSize: '14px',
    height: '40px',
  },
  '& .MuiOutlinedInput-input': {
    padding: '10px 12px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--input-border)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--primary-color)',
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--primary-color)',
  },
});

const RegisterCard = styled(Card)({
  width: '100%',
  maxWidth: '360px',
  padding: '24px 20px',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  backgroundColor: 'var(--card-bg)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

const ScreenWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  minHeight: '100vh',
  background: 'linear-gradient(to right, var(--screen-bg-start), var(--screen-bg-end))',
  padding: '20px',
});

const ImageUploadWrapper = styled('div')({
  margin: '10px 0',
  textAlign: 'left',
  fontSize: '14px',
  color: 'var(--text-color-default)',
});

const ImagePreview = styled('img')({
  marginTop: '10px',
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
});

export {
  SubmitButton,
  StyledInput,
  RegisterCard,
  MyButton,
  ScreenWrapper,
  ImageUploadWrapper,
  ImagePreview
};
