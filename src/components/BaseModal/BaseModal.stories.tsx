/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { BaseModal } from '.';

export default {
  title: 'UI Portal/BaseModal/BaseModal',
  component: BaseModal
} as ComponentMeta<typeof BaseModal>;

export const Template: ComponentStory<typeof BaseModal> = args => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      <BaseModal {...args} toggle={toggleModal} isOpen={isOpen}>
        {' '}
        <p>Stories do modal</p>
      </BaseModal>
    </>
  );
};
