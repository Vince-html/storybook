/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { CircularProgress, useTheme } from '@mui/material';
import { CustomButton } from './style';
import { CustomButtonProps } from './Button';

const Button = ({
  children,
  iconStart,
  primary = true,
  onClick,
  size = 'runt',
  style,
  loading,
  iconEnd,
  disabled,
  loadingEnd,
  loadingStart,
  ...rest
}: CustomButtonProps) => {
  const theme = useTheme();

  const sizeLoading = {
    runt: size === 'runt' && 15,
    small: size === 'small' && 15,
    medium: size === 'medium' && 20,
    large: size === 'large' && 20
  };

  return (
    <div>
      <CustomButton
        theme={theme}
        size={size}
        type="button"
        primary={primary}
        onClick={onClick}
        style={{ fontSize: '1rem', ...style }}
        disabled={disabled || loading}
        {...rest}
      >
        {loading && loadingStart && (
          <CircularProgress size={sizeLoading[size]} />
        )}
        {loading ? '' : iconStart}

        {children}
        {loading && loadingEnd && <CircularProgress size={sizeLoading[size]} />}
        {loading ? '' : iconEnd}
      </CustomButton>
    </div>
  );
};

export { Button };
