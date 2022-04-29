import styled from '@emotion/styled';
import { BadgeProps, Theme } from '@mui/material';

interface BadgeCustomProps extends BadgeProps {
  type?: 'success' | 'warning' | 'info';
  theme?: Theme;
}

export const BadgeCustom = styled('div')<BadgeCustomProps>(
  ({ theme, type }: BadgeCustomProps) => ({
    display: 'inline-block',
    padding: '0.3rem 0.5rem',
    lineHeight: '0.7rem',
    borderRadius: '1rem',
    textTransform: 'uppercase',
    fontSize: '75%',
    fontWeight: 'bold',
    color:
      type === 'success'
        ? theme.colors.text50
        : type === 'info' || type === 'warning'
        ? theme.colors.text900
        : theme.colors.text50,

    backgroundColor:
      type === 'success'
        ? '#198754'
        : type === 'info'
        ? '#0dcaf0'
        : type === 'warning'
        ? '#ffc107'
        : '#dc3545'
  })
);
