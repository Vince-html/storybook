/* eslint-disable no-alert */
import { SelectChangeEvent } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { SearchBar } from '.';

export default {
  title: 'Example/SearchBar',
  component: SearchBar,
  parameters: {
    componentSubtitle: 'SearchBar'
  }
} as ComponentMeta<typeof SearchBar>;

export const Template: ComponentStory<typeof SearchBar> = () => {
  const [localSearchVms, setLocalSearchVms] = useState({
    tipoServidor: '',
    hostname: '',
    uors_number: [],
    has_sub: true,
    ip: '',
    tags: []
  });

  const handleValueSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLocalSearchVms({ ...localSearchVms, [name]: value });
  };

  const handleTipo = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setLocalSearchVms(oldState => ({
      ...oldState,
      [name]: value
    }));
  };
  const TiposServidores = [
    {
      key: '0',
      value: '',
      label: 'Tipo'
    },
    {
      key: '1',
      value: 'vmware',
      label: 'VIRTUAL'
    },
    {
      key: '2',
      value: 'fisico',
      label: 'FÍSICO'
    }
  ];
  const fields = [
    {
      element: 'inputText',
      title: 'Hostname',
      type: 'text',
      name: 'hostname',
      onChange: handleValueSearch
    },

    {
      element: 'inputText',
      title: 'IP',
      name: 'ip',
      type: 'text',
      onChange: handleValueSearch
    },

    {
      element: 'select',
      title: 'Tipo',
      name: 'tipoServidor',
      selectItens: TiposServidores,
      onChange: handleTipo
    }
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert(localSearchVms);
  };

  return <SearchBar fields={fields} handleSubmit={handleSubmit} />;
};
