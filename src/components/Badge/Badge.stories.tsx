/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from '.';

export default {
  title: 'UI Portal/Badge/Badge',
  component: Badge,
  args: {
    children: 'virtual'
  }
} as ComponentMeta<typeof Badge>;

export const Template: ComponentStory<typeof Badge> = args => {
  return <Badge {...args}>{args.children}</Badge>;
};
