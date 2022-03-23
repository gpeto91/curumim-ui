import React from 'react';
import { FiLoader } from 'react-icons/fi';

import { ButtonStyle, Loader } from './ButtonStyles';

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary' | 'info' | 'warning' | 'danger';
  isLoading?: boolean;
  loadingText?: string;
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  variant = 'primary',
  isDisabled = false,
  isLoading = false,
  loadingText = 'Carregando...',
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={ButtonStyle({ variant, disabled: isDisabled || isLoading })}
    >
      {isLoading && (
        <div className={Loader()}>
          <FiLoader />
          {loadingText}
        </div>
      )}

      {!isLoading && children}
    </button>
  );
};
