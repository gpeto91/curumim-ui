import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../components/Button/Button';

export default {
  title: 'Componentes/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'Roboto',
          backgroundColor: '#efefef',
          maxWidth: 400,
          margin: '0 auto',
          padding: 20,
          display: 'grid'
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Salvar</Button>;
};

export const Primary = Template.bind({});
