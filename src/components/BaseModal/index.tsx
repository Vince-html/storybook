/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { AiOutlineCloseCircle } from 'react-icons/ai';

import { Box } from '@mui/material';

import { ModalModeloServidor, WrapperHeader, WrapperModal } from './style';
import { BaseModalProps } from './BaseModal';

const BaseModal = ({
  isOpen,
  toggle,
  icon,
  children,
  title,
  maxWidth,
  maxHeight,
  scrollHidden,
  iconSize,
  styles
}: BaseModalProps) => {
  const Icon = icon;

  return (
    <ModalModeloServidor open={isOpen} onClose={toggle}>
      <WrapperModal
        maxHeight={maxHeight}
        scrollHidden={scrollHidden}
        maxWidth={maxWidth}
        styles={styles}
      >
        <WrapperHeader iconSize={iconSize}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.5rem',
              padding: '1rem'
            }}
          >
            {Icon}
            <h1 style={{ margin: 0, fontFamily: 'Lato' }}>{title}</h1>
          </div>

          <AiOutlineCloseCircle
            onClick={toggle}
            data-testid="testId-closeModal"
            style={{ marginRight: '1rem' }}
          />
        </WrapperHeader>
        <Box style={{ padding: '1rem' }}>{children}</Box>
      </WrapperModal>
    </ModalModeloServidor>
  );
};

export { BaseModal };
