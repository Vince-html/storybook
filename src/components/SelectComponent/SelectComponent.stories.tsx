/* eslint-disable import/no-extraneous-dependencies */
import { MenuItem } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import { SelectComponent } from '.';

export default {
  title: 'Example/SelectComponent',
  component: SelectComponent,
  args: {
    name: 'fabricante',
    label: 'Fabricante',
    errors: {
      fabricante: false
    },

    touched: {
      fabricante: false
    }
  }
} as ComponentMeta<typeof SelectComponent>;
export const data = [
  { id: 1, fabricante: 'intel' },
  { id: 2, fabricante: 'amd' }
];

export const Template: ComponentStory<typeof SelectComponent> = args => {
  const [localValue, setValue] = useState({
    name: 'Placeholder'
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValue({ ...localValue, [name]: value });
  };
  return (
    <div>
      <SelectComponent
        {...args}
        handleChange={onChangeInput}
        value={localValue}
      >
        {data?.map(item => (
          <MenuItem key={item.id} value={item.fabricante}>
            {item.fabricante}
          </MenuItem>
        ))}
      </SelectComponent>
    </div>
  );
};
