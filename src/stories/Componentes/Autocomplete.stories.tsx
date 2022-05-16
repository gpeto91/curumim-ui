import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Autocomplete } from '../../components/Autocomplete';

export default {
  title: 'Componentes/Autocomplete',
  component: Autocomplete,
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'Roboto',
          backgroundColor: '#efefef',
          maxWidth: 400,
          margin: '0 auto',
          padding: 25
        }}
      >
        {Story()}
      </div>
    )
  ],
  parameters: {
    docs: {
      source: {
        excludeDecorators: true
      }
    }
  }
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => {
  return <Autocomplete {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'my-id',
  suggestions: ['Oranges', 'Apples', 'Banana', 'Kiwi', 'Mango']
};
