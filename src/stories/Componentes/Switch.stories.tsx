import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '../../components/Switch';

export default {
  title: 'Componentes/Switch',
  component: Switch,
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'Roboto',
          backgroundColor: '#efefef',
          maxWidth: 400,
          margin: '0 auto',
          padding: 25,
          display: 'flex',
          justifyContent: 'center'
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
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  return <Switch {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  id: 'my-id'
};
