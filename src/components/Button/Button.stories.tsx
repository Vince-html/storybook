/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AddCircleOutline } from '@mui/icons-material';
import { useState } from 'react';
import { Button } from '.';

export default {
  title: 'UI Portal/Button/Button',
  component: Button,
  args: {
    children: 'Title'
  }
} as ComponentMeta<typeof Button>;

export const ButtonPrimary: ComponentStory<typeof Button> = args => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column'
        // width: '150px'
      }}
    >
      <Button {...args}>Salvar</Button>
    </div>
  );
};

export const ButtonSecondary: ComponentStory<typeof Button> = args => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column'
        // width: '150px'
      }}
    >
      <Button {...args} primary={false} iconEnd={<AddCircleOutline />} />
    </div>
  );
};

export const ButtonLoading: ComponentStory<typeof Button> = args => {
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
    </div>
  );
};

export const ButtonDisabled: ComponentStory<typeof Button> = args => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column'
        // width: '150px'
      }}
    >
      <Button {...args} disabled loadingStart primary />
    </div>
  );
};

export const ButtonIcons: ComponentStory<typeof Button> = args => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column'
        // width: '150px'
      }}
    >
      <Button {...args} disabled iconStart={<AddCircleOutline />} />
      <Button {...args} primary={false} iconEnd={<AddCircleOutline />} />
    </div>
  );
};

export const ButtonCustomStyle: ComponentStory<typeof Button> = args => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '2rem',
        flexDirection: 'column'
        // width: '150px'
      }}
    >
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
