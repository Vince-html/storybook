/* eslint-disable prettier/prettier */
import {createTheme} from '@mui/material';

declare module '@mui/material' {
  export interface ThemeOptions {
    colors: {
      primary200: string;
      primary500: string;
      primary700: string;
      primary900: string;
      secondary500: string;
      darkBlue500: string;
      darkBlue900: string;
      cyan700: string;
      gray700: string,
      text900: string;
      text500: string;
      text200: string;
      text50: string;
    };

    fontSize: {
      runt: string;
      small: string;
      medium: string;
      large: string;
      largeX: string;
      big: string;
      bigX: string;
      huge: string;
    };

    fontWeight: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
      extraBold: string;
    };
  }

  interface Colors {
    /**
     *  primary200: '#17A2B8',
     */
    primary200: string;
    /**
     * primary500: '#007ACC',
     */
    primary500: string;
    /**
     *   primary700: '#005C99',
     */
    primary700: string;
    /**
     *  primary900: '#2F528F',
     */
    primary900: string;
    /**
     *  secondary500: '#F6E023',
     */
    secondary500: string;
    /**
     *  darkBlue500: '#475C62',
     */
    darkBlue500: string;
    /**
     * darkBlue900: '#37474F',
     */
    darkBlue900: string;
    /**
     * cyan700: '#17a2b8',
     */
    cyan700: string;
    /**
     * gray700: '#616161',
     */
    gray700: string;
    /**
     * text50: '#FAFAFA',
     */
    text50: string;
    /**
     * text200: '#E9EBF5',
     */
    text200: string;
    /**
     * text500: '#8A8A8A',
     */
    text500: string;
    /**
     * text900: '#303030',
     */
    text900: string;
  }

  interface FontSizes {
    /**
     *runt: 0.8 rem
     */
    runt: string;
    /**
     *small: 1.2 rem
     */
    small: string;
    /**
     *medium: 1.8 rem
     */
    medium: string;
    /**
     *large: 2.4 rem
     */
    large: string;
    /**
     *largeX: 2.8 rem
     */
    largeX: string;
    /**
     *big: 3.2 rem
     */
    big: string;
    /**
     *bigX: 4.2 rem
     */
    bigX: string;
    /**
     *largeX: 4.8 rem
     */
    huge: string;
  }

  interface FontWeight {
    light: string;
    regular: string;
    medium: string;
    bold: string;
    extraBold: string;
  }

  export interface Theme {
    /**
     * ### Property contains officially colors.
     *  name and level color ex: primary200
     *
     * ##### Primary colors
     *  primary200: '#17A2B8',
     *
     *   primary500: '#007ACC',
     *
     *   primary700: '#005C99',
     *
     *
     *   primary900: '#2F528F',
     *
     * ##### Secondary colors
     *
     *  secondary500: '#F6E023',
     *
     * ##### Helpers colors
     *  darkBlue500: '#475C62',
     *
     *  darkBlue900: '#37474F',
     *
     * ##### Text Colors
     *  text50: '#FAFAFA',
     *
     *  text200: '#E9EBF5',
     *
     *  text500: '#8A8A8A',
     *
     *  text900: '#303030',
     */

    colors: Colors;
    /** Property contains fonts sizes, this regular measure it's REM.
     *
     *  runt: 0.8 rem
     *
     *  small: 1.2 rem
     *
     *  medium: 1.8rem
     *
     *  large: 2.4rem
     *
     *  largeX: 2.8rem
     *
     *  big: 3.2rem
     *
     *  bigX: 4.2rem
     *
     *  huge: 4.8rem
     */
    fontSize: FontSizes;
    /** Property contains fonts weight.
     *
     *  light
     *
     *  regular
     *
     *  medium
     *
     *  bold
     *
     *  extraBold
     *
     */
    fontWeight: FontWeight;
  }
}




export const theme = createTheme({
  colors: {
    primary200: '#17A2B8',
    primary500: '#007ACC',
    primary700: '#005C99',
    primary900: '#2F528F',

    // secondary colors

    secondary500: '#F6E023',

    // helpers colors

    darkBlue500: '#475C62',
    darkBlue900: '#37474F',

    // other colors

    cyan700: '#17a2b8',

    gray700: '#616161',

    // text

    text900: '#303030',
    text500: '#8A8A8A',
    text200: '#E9EBF5',
    text50: '#FAFAFA'
  },

  fontSize: {
    runt: '0.8em',
    small: '1.2em',
    medium: '1.6em',
    large: '2.0em',
    largeX: '2.8em',
    big: '3.2em',
    bigX: '4.2em',
    huge: '4.8em'
  },

  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    extraBold: '900'
  },
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(',')
  },

})
