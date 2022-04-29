/* eslint-disable no-alert */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { ConfirmComponent } from '.';
import { Button } from '../Button';

export default {
  title: 'Example/ConfirmComponent',
  component: ConfirmComponent
} as ComponentMeta<typeof ConfirmComponent>;

export const Template: ComponentStory<typeof ConfirmComponent> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRemove = () => {
    window.alert('Removido com sucesso');
    setIsOpen(false);
  };
  const toggleModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Abrir Confirm
      </Button>
      <ConfirmComponent
        title="Tem certeza que deseja remover?"
        handleRemove={handleRemove}
        handleClose={toggleModal}
        open={isOpen}
      />
    </>
  );
};
