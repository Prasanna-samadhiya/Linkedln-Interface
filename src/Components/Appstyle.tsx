import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';

const MyButton = styled(Button)({
  backgroundColor: 'red',
});

    
const RegisterCard = styled(Card)(({  }) => ({
    width: '400px',
    padding: 2,
    borderRadius: '10px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
}));
    
const StyledInput = styled(TextField)({
    margin: '12px 0',
    width: '100%',
    
});
    
const SubmitButton = styled(Button)({
    marginTop: '16px',
    width: '100%',
    padding: '10px',
    textTransform: 'none',
    fontWeight: 'bold',
    backgroundColor: '#0a66c2',
    '&:hover': {
    backgroundColor: '#004182',
    },
    color:'white'
});

const ScreenWrapper =styled(Card)({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      height: '99vh',
      backgroundColor: 'wheat'

})


export {SubmitButton,StyledInput,RegisterCard,MyButton,ScreenWrapper}