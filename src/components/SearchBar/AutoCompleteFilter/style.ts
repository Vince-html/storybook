import styled from '@emotion/styled';
import { Autocomplete, Theme } from '@mui/material';

interface ContainerProps {
  focused: boolean;
  placeholderInvisible?: boolean;
}

interface AutocompleteProps {
  theme?: Theme;
}

export const Container = styled('div')<ContainerProps>(
  ({ focused, placeholderInvisible }) => {
    const colorPlaceholder = placeholderInvisible
      ? 'rgba(0, 0, 0, 0)'
      : 'rgba(0, 0, 0, 0.6)';

    return {
      fontSize: '8px',
      width: '100%',
      cursor: 'pointer',
      position: 'relative',

      '& .titleInput': {
        paddingLeft: '5px',
        position: 'absolute',
        top: '0',
        fontSize: focused ? '0.75rem' : '1rem',
        color: focused ? '#fff' : colorPlaceholder,
        transform: focused ? 'translate(0, -20px)' : 'translate(0, 7px)',
        transition:
          'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, fontSize 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
        pointerEvents: 'none'
      }
    };
  }
);

const AutocompleteWrapper = styled(Autocomplete)(
  ({ theme }: AutocompleteProps) => ({
    fontSize: '8px',
    width: '100%',
    cursor: 'pointer',
    color: theme.colors.primary500,
    backgroundColor: '#007ACC',
    alignSelf: 'flex-end',

    '& fieldset': {
      borderStyle: 'none !important'
    },

    '& .MuiOutlinedInput-root': {
      padding: '0 !important'
    },
    '& .MuiOutlinedInput-input': {
      backgroundColor: '#fff'
    },
    '& .MuiAutocomplete-endAdornment ': {
      backgroundColor: '#fff'
    },
    '& .MuiInputLabel-formControl.Mui-focused': {
      color: '#fff',
      transform: 'translate(0, -20px) scale(0.75)',
      marginTop: '0'
    }
  })
);

export { AutocompleteWrapper };
