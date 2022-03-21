import React from 'react';
import * as Label from '@radix-ui/react-label';
import { Input, SelectRoot } from '..';
import { css } from '../../theme';

interface IFormField {
  label: string;
  labelFor: string;
  hintText?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
}

const FormFieldWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
});

const FormFieldLabel = css({
  fontWeight: '$bold',
  marginBottom: '$2',

  '& sup': {
    color: '$red'
  }
});

const HintText = css({
  fontSize: '$small',
  color: '#999',
  marginTop: '$2',
  fontStyle: 'italic',
  position: 'absolute',
  bottom: -20
});

const ErrorMessage = css({
  fontSize: '$small',
  color: '$red',
  marginTop: '$2',
  position: 'absolute',
  bottom: -20
});

const FormField: React.FunctionComponent<IFormField> = ({
  children,
  label,
  labelFor,
  hintText,
  isInvalid = false,
  isRequired = false,
  errorMessage
}) => {
  return (
    <div className={FormFieldWrapper()}>
      <Label.Root className={FormFieldLabel()} htmlFor={labelFor}>
        {label} {isRequired && <sup>*</sup>}
      </Label.Root>

      {children &&
        React.Children.map(children, (child) => {
          if (
            (React.isValidElement(child) && (child as React.ReactElement<any>).type === Input) ||
            (child as React.ReactElement<any>).type === SelectRoot ||
            (child as React.ReactElement<any>).type === 'Controller'
          ) {
            return React.cloneElement(child as React.ReactElement<any>, { isInvalid });
          }

          return null;
        })}

      {hintText && !isInvalid && <span className={HintText()}>{hintText}</span>}

      {isInvalid && <span className={ErrorMessage()}>{errorMessage}</span>}
    </div>
  );
};

FormField.displayName = 'FormField';

export { FormField };
