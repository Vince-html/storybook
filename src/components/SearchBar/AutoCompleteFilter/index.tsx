import React, { useEffect, useState } from 'react';

import { TextField } from '@mui/material';
import { AutocompleteWrapper, Container } from './style';
import { FieldProps } from '..';

interface InputProps {
  field: FieldProps;
}

const AutoCompleteFilter = ({ field }: InputProps) => {
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
    <Container
      focused={focused}
      placeholderInvisible={field?.placeholderInvisible}
    >
      <AutocompleteWrapper
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        id={field.name}
        options={field.selectItens!}
        onBlur={e => {
          handleFocused(false);
          if (field.onChange) field.onChange(e);
        }}
        onOpen={() => handleFocused(true)}
        onChange={(e, values: any) => {
          const valueInput = values ? values.value : '';
          setInputValue(valueInput);
          handleFocused(!!valueInput);
        }}
        isOptionEqualToValue={(option, value) => value === option}
        renderInput={params => <TextField {...params} />}
        value={inputValue}
      />
      <span className="titleInput">{field?.title}</span>
    </Container>
  );
};

export { AutoCompleteFilter };
