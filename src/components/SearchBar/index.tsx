/* eslint-disable no-use-before-define */
import React, { ReactNode } from 'react';

import { InputFilter } from './InputFilter';
import { SelectFilter } from './SelectFilter';
import { AutoCompleteFilter } from './AutoCompleteFilter';

import {
  ContentForm,
  CustomButton,
  WrapperButton,
  WrapperSearch
} from './style';

export interface ValuesSelectProps {
  key: string | number;
  value: string | number;
  label: string | number;
}

export interface FieldProps {
  element?: string;
  title?: string;
  name?: string;
  type?: string;
  selectItens?: ValuesSelectProps[];
  defaultValue?: string;
  onChange?: (event: any) => void;
  placeholderInvisible?: boolean;
  alwaysFocused?: boolean;
  componentNode?: ReactNode;
}

interface SearchBarProps {
  handleSubmit: (event: any) => void;
  fields: (FieldProps | undefined)[];
}

const SearchBar = ({ handleSubmit, fields }: SearchBarProps) => {
  const filterElement = fields?.filter(field => {
    return field !== undefined;
  });
  return (
    <WrapperSearch>
      <ContentForm>
        {filterElement &&
          filterElement?.map(field => {
            if (field?.element === 'select') {
              return <SelectFilter key={field.name} field={field} />;
            }
            if (field?.element === 'autocomplete') {
              return <AutoCompleteFilter key={field.name} field={field} />;
            }

            if (field?.element === 'component') {
              return field.componentNode;
            }

            return <InputFilter key={field?.name} field={field} />;
          })}
      </ContentForm>

      <WrapperButton>
        <CustomButton type="button" onClick={handleSubmit}>
          Buscar
        </CustomButton>
      </WrapperButton>
    </WrapperSearch>
  );
};

export { SearchBar };
