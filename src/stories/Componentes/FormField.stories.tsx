import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormField } from '../../components/FormField';
import { Input } from '../../components/Input';

export default {
  title: 'Componentes/FormField',
  component: FormField,
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
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => {
  return (
    <FormField {...args}>
      <Input id="my-input" />
    </FormField>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  labelFor: 'my-input',
  label: 'Nome completo'
};
