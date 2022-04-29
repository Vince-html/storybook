import styled from '@emotion/styled';

interface ContainerProps {
  focused: boolean;
  placeholderInvisible?: boolean;
}

export const Container = styled('div')<ContainerProps>(
  ({ theme, focused, placeholderInvisible }) => {
    const colorPlaceholder = placeholderInvisible
      ? 'rgba(0, 0, 0, 0)'
      : 'rgba(0, 0, 0, 0.6)';

    return {
      fontSize: '8px',
      width: '100%',
      cursor: 'pointer',
      position: 'relative',

      '& .inputText': {
        width: '100%',
        fontSize: '1rem',
        backgroundColor: '#fff',
        color: '#000',

        height: '36px',
        display: 'flex',
        alignItems: 'center',
        marginTop: 0,
        border: 'none'
      },
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
