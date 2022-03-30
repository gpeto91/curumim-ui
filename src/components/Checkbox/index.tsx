import React from 'react';
import { css } from '../../theme';
import { FiCheck, FiMinus } from 'react-icons/fi';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const CheckWrapper = css({
  display: 'flex',
  alignItems: 'center',

  '& label': {
    marginLeft: 20
  }
});

const CheckboxRoot = css({
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
  },

  '& span': {
    display: 'flex'
  }
});

const CheckboxIcon = css({
  '& svg': {
    stroke: '$green'
  }
});

interface ICheckboxProps extends CheckboxPrimitive.CheckboxProps {
  id: string;
  isInvalid?: boolean;
  isIndetermined?: boolean;
  label?: string;
}

const Checkbox = React.forwardRef<HTMLButtonElement, ICheckboxProps>(
  ({ label, id, isInvalid = false, isIndetermined = false, ...props }, ref) => {
    return (
      <div className={CheckWrapper()}>
        <CheckboxPrimitive.Root
          {...props}
          className={CheckboxRoot()}
          ref={ref}
          id={id}
          data-invalid={isInvalid}
        >
          <CheckboxPrimitive.CheckboxIndicator className={CheckboxIcon()}>
            {isIndetermined ? <FiMinus /> : <FiCheck />}
          </CheckboxPrimitive.CheckboxIndicator>
        </CheckboxPrimitive.Root>
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
