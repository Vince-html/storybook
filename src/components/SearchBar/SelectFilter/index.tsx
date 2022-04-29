/* eslint-disable no-use-before-define */
import { useEffect, useState } from 'react';
import { InputLabel, MenuItem, Select } from '@mui/material';

import { CustomFormControl } from './style';

import { FieldProps } from '..';

interface InputProps {
  field: FieldProps;
}

const SelectFilter = ({ field }: InputProps) => {
  const [inputValue, setInputValue] = useState(field.defaultValue || '');
  const [focused, setFocused] = useState(field.alwaysFocused || false);

  const handleFocused = (value: boolean) => {
    if (!field.alwaysFocused) {
      const toogle = inputValue !== '' ? true : value;

      setFocused(toogle);
    }
  };

  useEffect(() => {
    if (inputValue !== '') setFocused(true);
  }, []);

  return (
    <CustomFormControl
      fullWidth
      size="small"
      variant="standard"
      focused={focused}
    >
      <Select
        name={field.name}
        id={field.name}
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
          handleFocused(true);

          if (field.onChange) field.onChange(e);
        }}
        onBlur={() => handleFocused(false)}
        onClick={() => handleFocused(true)}
      >
        {field?.selectItens &&
          field.selectItens.map(item => (
            <MenuItem key={item.key} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
      </Select>
      <InputLabel id={field.name}>{field.title}</InputLabel>
    </CustomFormControl>
  );
};

export { SelectFilter };
