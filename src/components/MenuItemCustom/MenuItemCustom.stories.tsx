import { MenuList } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FaTrash } from 'react-icons/fa';
import { MenuItemCustom } from '.';

export default {
  title: 'UI Portal/MenuItemCustom/MenuItemCustom',
  component: MenuItemCustom
} as ComponentMeta<typeof MenuItemCustom>;

export const Exemplo1: ComponentStory<typeof MenuItemCustom> = args => {
  return (
    <>
      <MenuList sx={{ padding: '5rem', maxWidth: '200px' }}>
        <MenuItemCustom
          title="Popover/MenuLateral"
          showPopover
          rigthDirection
          {...args}
        >
          <p style={{ padding: '0 1rem' }}>Popover</p>
        </MenuItemCustom>
      </MenuList>
      <MenuList sx={{ padding: '2rem', maxWidth: '200px' }}>
        <MenuItemCustom {...args}>
          <p style={{ padding: '0 1rem' }}>Ou só Menu</p>
        </MenuItemCustom>
      </MenuList>
    </>
  );
};
export const Exemplo2: ComponentStory<typeof MenuItemCustom> = args => {
  return (
    <div>
      <MenuList sx={{ padding: '2rem', maxWidth: '200px' }}>
        <MenuItemCustom
          rigthDirection
          icon={<FaTrash />}
          iconEnd
          showPopover
          title="MenuLateral"
          {...args}
        >
          <p style={{ padding: '0 1rem' }}>Com icone</p>
        </MenuItemCustom>
        <MenuItemCustom
          icon={<FaTrash />}
          iconStart
          showPopover
          title="MenuLateral"
          {...args}
        >
          <p style={{ padding: '0 1rem' }}>Direciona o lado do icone</p>
        </MenuItemCustom>

        <MenuItemCustom
          showPopover
          iconArrow
          title="E submenu expansível"
          {...args}
        >
          <p style={{ padding: '0 1rem' }}>Pode Escolher o lado</p>
          <MenuItemCustom
            rigthDirection
            icon={<FaTrash />}
            iconEnd
            showPopover
            title="MenuLateral"
            {...args}
          >
            <p style={{ padding: '0 1rem' }}>Com icone</p>
          </MenuItemCustom>
          <MenuItemCustom
            icon={<FaTrash />}
            iconStart
            showPopover
            title="MenuLateral"
            {...args}
          >
            <p style={{ padding: '0 1rem' }}>Direciona o lado do icone</p>
          </MenuItemCustom>
        </MenuItemCustom>
      </MenuList>
    </div>
  );
};
