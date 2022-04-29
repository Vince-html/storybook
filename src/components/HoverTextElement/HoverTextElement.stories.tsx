import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HoverTextElement } from '.';

export default {
  title: 'Example/HoverTextElement',
  component: HoverTextElement,
  args: {
    children: 'Title'
  }
} as ComponentMeta<typeof HoverTextElement>;

export const Template: ComponentStory<typeof HoverTextElement> = args => {
  const textExemplo =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <HoverTextElement
      {...args}
      style={{ maxWidth: '200px' }}
      textSize={textExemplo.length}
      maxTextSize={15}
    >
      <p>{textExemplo}</p>
    </HoverTextElement>
  );
};
