import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SelectRoot } from '../../components/Select';

export default {
  title: 'Componentes/Select',
  component: SelectRoot,
  subcomponents: { 'SelectRoot.Group': SelectRoot.Group, 'SelectRoot.Item': SelectRoot.Item },
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
} as ComponentMeta<typeof SelectRoot>;

const Template: ComponentStory<typeof SelectRoot> = (args) => {
  return (
    <SelectRoot {...args} defaultValue="item-1">
      <SelectRoot.Group label="Grupo 1">
        <SelectRoot.Item value="item-1" description="Item 1" />
        <SelectRoot.Item value="item-2" description="Item 2" />
        <SelectRoot.Item value="item-3" description="Item 3" />
      </SelectRoot.Group>

      <SelectRoot.Group label="Grupo 2">
        <SelectRoot.Item value="item-2-1" description="Item 1" />
        <SelectRoot.Item value="item-2-2" description="Item 2" />
      </SelectRoot.Group>
    </SelectRoot>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  id: 'my-id'
};
