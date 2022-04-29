import { Theme } from '@mui/material';
import { ReactElement, ReactNode } from 'react';

export interface BaseModalProps {
  /**
   *   *  Set boolean value for open modal
   */
  isOpen: boolean;
  /**
   *   *  Set function for close modal
   */
  toggle: () => void;
  /**
   *   *  children modal, you pass component as children
   */
  children: ReactNode;
  /**
   *   *  icon component, this icon is set in before modal title.
   */
  icon?: ReactElement;
  /**
   *   *  set title modal
   */
  title: string;
  /**
   *   *  set Height modal, default 100%
   */
  maxHeight?: string;
  /**
   *   *  set maxWidth modal, default 1000px
   */
  maxWidth?: string;
  /**
   *   *  this set scroll in modal, default auto, or true for hidden
   */
  scrollHidden?: boolean | string;
  /**
   *   *  set iconSize, default 2rem
   */
  iconSize?: string;
  /**
   *   *  set custom styles, need pass a object
   */
  styles?: object;
}

export interface WrapperModalProps {
  maxHeight?: string;
  scrollHidden?: boolean | string;
  maxWidth?: string;
  styles?: object;
}

export interface WrapperHeaderProps {
  iconSize?: string;
  theme?: Theme;
}
