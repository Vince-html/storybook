import { BoxProps, Popover } from '@mui/material';
import React, { ReactNode, useRef, useState } from 'react';

import { Container, Content, WrappText } from './styles';

interface HoverTextElementProps extends BoxProps {
  children: ReactNode;
  textSize?: number | undefined;
  maxTextSize?: number | undefined;
}

const HoverTextElement = ({
  children,
  textSize,
  maxTextSize,
  ...rest
}: HoverTextElementProps) => {
  const [open, setOpen] = useState(false);

  const containerEl = useRef(null);

  const handleMouseOn = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const showsPopover = textSize && maxTextSize ? textSize > maxTextSize : true;

  return (
    <Container onMouseEnter={handleMouseOn} ref={containerEl} {...rest}>
      <WrappText>{children}</WrappText>

      {showsPopover && (
        <Popover
          open={open}
          anchorEl={containerEl.current}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          disableRestoreFocus
          sx={{ width: 'auto' }}
        >
          <Content onMouseLeave={handleMouseLeave}>{children}</Content>
        </Popover>
      )}
    </Container>
  );
};

export { HoverTextElement };
