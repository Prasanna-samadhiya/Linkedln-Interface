import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';

// Accent Color (LinkedIn blue-ish)
const primaryColor = '#0a66c2';

const SubmitButton = styled(Button)({
  marginTop: '24px',
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '16px',
  backgroundColor: primaryColor,
  color: '#fff',
  transition: 'background 0.3s ease',
  '&:hover': {
    backgroundColor: '#004182',
  },
});

const MyButton = styled(Button)({
  backgroundColor: 'red',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#c40000',
  },
});

const StyledInput = styled(TextField)({
  margin: '10px 0',
  width: '100%',
  fontSize: '14px',
  '& .MuiInputBase-root': {
    borderRadius: '6px',
    backgroundColor: '#f9f9f9',
    fontSize: '14px',
    height: '40px', // Smaller height
  },
  '& .MuiOutlinedInput-input': {
    padding: '10px 12px', // Less padding = more compact
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ccc',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#0a66c2',
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#0a66c2',
  },
});

const RegisterCard = styled(Card)({
  width: '100%',
  maxWidth: '360px',             // ↓ from 420px
  padding: '24px 20px',          // ↓ tighter padding
  borderRadius: '12px',          // ↓ slightly smaller radius
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // subtler shadow
  backgroundColor: '#ffffff',
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
  background: 'linear-gradient(to right, #f0f4f8, #d9e2ec)',
  padding: '20px',
});

export {
  SubmitButton,
  StyledInput,
  RegisterCard,
  MyButton,
  ScreenWrapper,
};
