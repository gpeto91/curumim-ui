import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Datepicker } from '../../components/Datepicker';

export default {
  title: 'Componentes/Datepicker',
  component: Datepicker,
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'Roboto',
          backgroundColor: '#efefef',
          maxWidth: 400,
          margin: '250px auto',
          marginTop: 30,
          padding: 20
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
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => {
  return <Datepicker {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  id: 'my-id'
};
