import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Autocomplete } from '../../components/Autocomplete';

export default {
  title: 'Componentes/Autocomplete',
  component: Autocomplete
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'my-id',
  suggestions: ['Oranges', 'Apples', 'Banana', 'Kiwi', 'Mango']
};
