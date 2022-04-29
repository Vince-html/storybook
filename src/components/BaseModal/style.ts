import { Button, CardHeader, Modal, styled } from '@mui/material';
import { WrapperHeaderProps, WrapperModalProps } from './BaseModal';

export const ButtonContainer = styled('div')({
  display: 'flex',
  width: ' 100%',
  gap: '1rem',
  justifyContent: 'flex-end',
  marginTop: '1rem',
  '@media (max-width:760px)': {
    flexDirection: 'column'
  }
});

export const CustomButton = styled(Button)(({ theme }) => ({
  padding: '0.5rem 1.5rem',
  background: '#007ACC',
  color: 'white',

  '&:hover': {
    background: theme.colors.primary900
  }
}));

export const CustomCardHeader = styled(CardHeader)({
  '& span': {
    fontWeight: 'bold'
  }
});

export const WrapperTextField = styled('div')({
  display: 'flex',
  gap: '0.5rem',
  maxWidth: '600px',

  '@media (max-width:760px)': {
    flexDirection: 'column'
  }
});

export const WrapperHeader = styled('div')<WrapperHeaderProps>(
  ({ iconSize, theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.colors.primary500,
    height: '4rem',
    color: 'white',
    fontFamily: 'Roboto',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      gap: '.5rem',
      '& > svg': {
        fontSize: iconSize || '2rem'
      },
      '& > h1': {
        fontSize: theme.fontSize.medium,
        fontFamily: 'Roboto'
      }
    },
    '& > svg': {
      fontSize: iconSize || '2rem',
      cursor: 'pointer'
    }
  })
);

export const CustomPadding = {
  padding: '0.5rem 0.5rem 0px',
  fontWeight: 'bold'
};

export const ModalModeloServidor = styled(Modal)({
  padding: '20px',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width:760PX)': {
    padding: '5px',
    overflow: 'hidden'
  }
});

export const CardSxStyle = {
  padding: '0.25rem 0.5rem 0.25rem 0.5rem ',
  maxWidth: '600px'
};

export const WrapperModal = styled('div')(
  ({ maxHeight, scrollHidden, maxWidth, styles }: WrapperModalProps) => ({
    background: '#FAFAFA',
    overflow: scrollHidden ? 'hidden' : 'auto',
    height: maxHeight || '100%',
    display: 'block',
    width: maxWidth || '1000px',
    ...styles
  })
);
