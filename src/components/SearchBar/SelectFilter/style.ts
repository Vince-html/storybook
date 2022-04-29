import styled from '@emotion/styled';
import { FormControl } from '@mui/material';

interface CustomFormControlProps {
  focused: boolean;
}

export const CustomFormControl = styled(FormControl)<CustomFormControlProps>(
  ({ theme, focused }) => ({
    fontSize: '8px',
    width: '100%',
    color: '#fff',

    '& .MuiSelect-standard': {
      backgroundColor: '#fff',
      padding: '2px 5px',
      height: '34px !important',
      display: 'flex',
      alignItems: 'center',
      '&:focus': {
        backgroundColor: '#fff'
      }
    },
    '& .MuiInputLabel-formControl': {
      color: focused ? '#fff' : 'rgba(0, 0, 0, 0.6)',
      transform: focused
        ? 'translate(0, -20px) scale(0.75)'
        : 'translate(0, 7px) scale(1)',
      paddingLeft: '5px',
      pointerEvents: 'none'
    },
    '& .MuiInputLabel-formControl.Mui-focused': {
      color: '#fff',
      transform: 'translate(0, -20px) scale(0.75)',
      marginTop: '0'
    },
    '& .MuiSvgIcon-root': {
      height: '34px',
      marginTop: '-5px',
      backgroundColor: '#fff'
    },
    '& ::before': {
      display: 'none'
    },
    '& ::after': {
      display: 'none'
    },
    '& .MuiInput-root': {
      marginTop: 0
    },

    '@media (max-width:760px)': {
      maxWidth: '100%'
    }
  })
);
