import React from 'react';
import { css } from '../../theme';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

const Wrapper = css({
  display: 'flex',
  alignItems: 'center',

  '& label': {
    marginLeft: 20
  }
});

const Item = css({
  all: 'unset',
  width: 20,
  height: 20,
  backgroundColor: 'White',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&[data-invalid="true"]': {
    boxShadow: '0 0 0 3px rgba(222, 33, 20, 0.6)',
    borderRadius: '$2'
  },

  '&:focus': {
    boxShadow: '$focus',
    borderRadius: '$2'
  }
});

const Indicator = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&::after': {
    content: '""',
    display: 'block',
    width: 16,
    height: 16,
    backgroundColor: '$green'
  }
});

export interface IRadioGroupProps extends RadioGroupPrimitive.RadioGroupItemProps {
  id: string;
  label?: string;
}

const RadioItem: React.FC<IRadioGroupProps> = ({ id, label, ...props }) => {
  return (
    <div className={Wrapper()}>
      <RadioGroupPrimitive.Item {...props} id={id} className={Item()}>
        <RadioGroupPrimitive.Indicator className={Indicator()} />
      </RadioGroupPrimitive.Item>

      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

RadioItem.displayName = 'RadioItem';

export { RadioItem };
