import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioGroup } from '../../components/RadioGroup';

export default {
  title: 'Componentes/RadioGroup',
  component: RadioGroup,
  subcomponents: { 'RadioGroup.Item': RadioGroup.Item },
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'Roboto',
          backgroundColor: '#efefef',
          maxWidth: 400,
          margin: '0 auto',
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
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  return (
    <RadioGroup {...args} style={{ display: 'grid', gap: 10 }} defaultValue="checkbox-2">
      <RadioGroup.Item id="group1" value="checkbox-1" label="Radio 1" />
      <RadioGroup.Item id="group2" value="checkbox-2" label="Radio 2" />
      <RadioGroup.Item id="group3" value="checkbox-3" label="Radio 3" />
    </RadioGroup>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  id: 'my-id'
};
