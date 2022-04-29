import styled from '@emotion/styled';
import { MenuItem, MenuItemProps, Theme } from '@mui/material';

import { ButtonHTMLAttributes, CSSProperties } from 'react';

interface ButtonPopoverMenuProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  theme?: Theme;
  style?: CSSProperties;
}

interface MenuItemStyleProps extends MenuItemProps {
  customStyle?: CSSProperties | object;
}

export const ButtonPopoverMenu = styled('button')<ButtonPopoverMenuProps>(
  ({ style, theme }) => ({
    backgroundColor: 'transparent',
    border: 'none',
    color: theme.colors.text900,
    width: '100%',
    display: 'flex',
    alignItems: 'center',

    ...style
  })
);

export const MenuItemStyle = styled(MenuItem)<MenuItemStyleProps>(
  ({ customStyle }) => ({
    width: '100%',
    padding: '0.5rem',
    '&:active': {
      backgroundColor: 'rgba(0, 0, 0, 0.2) !important',
      fontWeight: 'bold'
    },
    '& .Mui-selected:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.2) !important',
      fontWeight: 'bold'
    },
    ...customStyle
  })
);
