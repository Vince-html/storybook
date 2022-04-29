import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)({
  overflow: 'hidden'
});

export const WrappText = styled('div')({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});

export const Content = styled(Box)({
  backgroundColor: '#fff',
  padding: '10px',
  width: 'auto'
});
