import styled from '@emotion/styled';
import { Theme } from '@mui/material';

interface CustomButtonProps {
  size?: 'runt' | 'small' | 'medium' | 'large';
  theme: Theme;
  primary?: boolean;
}

const DefaultLayout = (
  theme: Theme,
  size: 'runt' | 'small' | 'medium' | 'large'
) => {
  const customGap = {
    runt: '0.3rem',
    small: '0.35rem',
    medium: '0.4rem',
    large: '0.45rem'
  };
  const customSvgSize = {
    runt: '1em',
    small: '1.25rem',
    medium: '1.35rem',
    large: '1.45rem'
  };
  const paddingCustom = {
    runt: '0.3rem 1.5rem',
    small: '0.5rem 2rem',
    medium: '0.7rem 2.5rem',
    large: '0.9rem 3rem'
  };
  return {
    padding: paddingCustom[size],
    border: '1px solid',
    background: 'white',
    borderRadius: '5px',
    minWidth: '100px',
    gap: customGap[size],
    cursor: 'pointer',
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.fontSize[size],
    letterSpacing: '0.1em',

    '&[disabled]': {
      cursor: 'not-allowed',
      opacity: 0.8
    },

    '& > svg': {
      fontSize: customSvgSize[size]
    }
  };
};

const styleDefault = (
  theme: Theme,
  size: 'runt' | 'small' | 'medium' | 'large'
) => {
  const defaultLayout = DefaultLayout(theme, size);

  return {
    ...defaultLayout,
    color: theme.colors.primary500,

    borderColor: theme.colors.primary500,

    '&:hover': {
      background: theme.colors.primary500,
      color: 'white',
      '& > span': {
        width: '16px',
        height: '16px',
        color: theme.colors.text50
      }
    },

    '&:disabled': {
      color: theme.colors.text500,
      borderColor: theme.colors.text500,
      cursor: 'not-allowed',
      backgroundColor: theme.colors.text50,
      '& > span': {
        color: theme.colors.text500
      },
      '&:hover': {
        color: theme.colors.text500,
        '& > span': {
          width: '16px',
          height: '16px',
          color: theme.colors.text500
        }
      }
    },
    '& > span': {
      width: '16px',
      height: '16px',
      color: theme.colors.primary500
    }
  };
};

const secondaryStyle = (
  theme: Theme,
  size: 'runt' | 'small' | 'medium' | 'large'
) => {
  const defaultLayout = DefaultLayout(theme, size);

  return {
    ...defaultLayout,
    color: theme.colors.text50,
    background: theme.colors.primary500,
    borderColor: theme.colors.primary500,

    '&:hover': {
      background: theme.colors.primary900,
      color: 'white'
    },
    '& > span': {
      width: '16px',
      height: '16px',
      color: theme.colors.primary500
    },

    '&:disabled': {
      color: theme.colors.text500,
      borderColor: theme.colors.text500,
      cursor: 'not-allowed',
      backgroundColor: theme.colors.text50,
      '&:hover': {
        cursor: 'not-allowed',
        background: theme.colors.primary900,
        color: 'white'
      },
      '& > span': {
        color: theme.colors.text500
      }
    }
  };
};

export const CustomButton = styled('button')<CustomButtonProps>(
  ({ theme, size, primary }: CustomButtonProps) =>
    primary === true ? styleDefault(theme, size) : secondaryStyle(theme, size)
);
