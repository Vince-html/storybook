/* eslint-disable no-use-before-define */
import { useEffect, useState } from 'react';

// import { DebounceInput } from 'react-debounce-input';
import { TextField } from '@mui/material';
import { Container } from './style';

import { FieldProps } from '..';

interface InputFilterProps {
  field?: FieldProps | undefined;
}

const InputFilter = ({ field }: InputFilterProps) => {
  const [inputValue, setInputValue] = useState(field?.defaultValue || '');
  const [focused, setFocused] = useState(field?.alwaysFocused || false);

  const handleFocused = (value: boolean) => {
    if (!field?.alwaysFocused) {
      const toogle = inputValue !== '' ? true : value;

      setFocused(toogle);
    }
  };

  useEffect(() => {
    if (inputValue !== '') setFocused(true);
  }, []);

  return (
    <Container
      focused={focused}
      placeholderInvisible={field?.placeholderInvisible}
    >
      <input
        className="inputText"
        type={field?.type}
        name={field?.name}
        value={inputValue}
        onBlur={e => {
          handleFocused(false);
          if (field?.onChange) field.onChange(e);
        }}
        onClick={() => handleFocused(true)}
        onChange={e => {
          const valueInput = e.target.value;
          setInputValue(valueInput);
          handleFocused(!!valueInput);
        }}
      />
      <span className="titleInput">{field?.title}</span>
    </Container>
  );
};

export { InputFilter };
