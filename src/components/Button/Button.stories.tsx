/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AddCircleOutline } from '@mui/icons-material';
import { useState } from 'react';
import { Button } from '.';

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    children: 'Title'
  }
} as ComponentMeta<typeof Button>;

export const ButtonTemplate: ComponentStory<typeof Button> = args => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column'
        // width: '150px'
      }}
    >
      <Button {...args} loading={loading} loadingStart primary />
      <Button {...args}>Salvar e Adicionar outro</Button>
      <Button {...args} disabled iconStart={<AddCircleOutline />} />
      <Button {...args} primary={false} iconEnd={<AddCircleOutline />} />
      <Button
        {...args}
        primary
        iconStart={<AddCircleOutline />}
        style={{
          backgroundColor: 'yellow',
          color: 'black',
          border: 'none',
          display: 'flex'
        }}
      />
    </div>
  );
};
