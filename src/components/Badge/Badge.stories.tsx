/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from '.';

export default {
  title: 'Example/Badge',
  component: Badge,
  args: {
    title: 'title'
  }
} as ComponentMeta<typeof Badge>;

export const Template: ComponentStory<typeof Badge> = args => {
  return <Badge {...args}>VIRTUALIZAÇÃO</Badge>;
};
