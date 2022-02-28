import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const { children } = props;

  return <button>{children}</button>;
};
