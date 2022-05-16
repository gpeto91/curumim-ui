import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagination } from '../../components/Pagination';

export default {
  title: 'Componentes/Pagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'Roboto',
          backgroundColor: '#efefef',
          maxWidth: 600,
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
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  return <Pagination {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  totalElements: 144
};
