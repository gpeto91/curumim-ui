import React, { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { css } from '../../theme';

const InputStyle = css({
  all: 'unset',
  padding: '0 $4',
  height: 40,
  backgroundColor: 'White',
  fontSize: '$base',
  transition: 'box-shadow .2s',
  textAlign: 'left',

  '&[data-invalid="true"]': {
    boxShadow: '0 0 0 3px rgba(222, 33, 20, 0.6)',
    borderRadius: '$2'
  },

  '&:focus': {
    boxShadow: '$focus',
    borderRadius: '$2'
  }
});

export interface IInput extends React.DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: 'text' | 'email';
  isInvalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, IInput>(({ children, type = 'text', isInvalid = false, ...props }, ref: React.LegacyRef<HTMLInputElement>) => {
  return <input className={InputStyle()} type={type} {...props} ref={ref} data-invalid={isInvalid} />;
});

Input.displayName = 'Input';

export { Input };
