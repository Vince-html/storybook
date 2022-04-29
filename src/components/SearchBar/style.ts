import styled from '@emotion/styled';
import { Button, Theme } from '@mui/material';

interface ThemeProps {
  theme?: Theme;
}

export const WrapperSearch = styled('div')(({ theme }: ThemeProps) => ({
  padding: '2rem 1rem',
  backgroundColor: theme.colors.primary500,
  justifyContent: 'center',
  alignItems: 'center'
}));

export const ContentForm = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(max(200px,240px), 1fr))',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '1.8rem 0.5rem'
}));

export const WrapperButton = styled('div')(({ theme }) => ({
  marginTop: '1.8rem'
}));

export const CustomButton = styled(Button)(({ theme }: ThemeProps) => ({
  width: '100%',
  backgroundColor: theme.colors.secondary500,
  minWidth: '120px',
  color: 'black',
  borderRadius: 0,
  '&:hover': {
    filter: 'brightness(0.9)',
    backgroundColor: theme.colors.secondary500
  }
}));
