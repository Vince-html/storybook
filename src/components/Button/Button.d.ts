import {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEvent,
  ReactElement
} from 'react';

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   *   *  Children prop is required
   */
  children: ReactNode;
  /**
   *   *  Set the icon before children
   */
  iconStart?: ReactElement;
  /**
   *   *  onClick function
   */
  onClick?: (event: MouseEvent) => void;
  /**
   *   *  Set size button default: runt
   */
  size?: 'runt' | 'small' | 'medium' | 'large';
  /**
   *   *  True for primary button design
   */
  primary?: boolean;
  /**
   *   *  Set custom style for button, pass normally object with styles
   */
  style?: CSSProperties;
  /**
   *   *  Set the icon after children
   */
  iconEnd?: ReactElement;

  loading?: boolean;

  loadingStart?: boolean;

  loadingEnd?: boolean;

  disabled?: boolean;
}
