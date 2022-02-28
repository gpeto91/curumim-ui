import React from 'react';

import { ButtonStyle } from './ButtonStyles';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary' | 'info' | 'warning' | 'danger';
}

export const Button: React.FunctionComponent<IButtonProps> = ({ children, variant = 'primary', isDisabled = false, ...props }) => {
  return (
    <button disabled={isDisabled} className={ButtonStyle({ variant })} {...props}>
      {children}
    </button>
  );
};
