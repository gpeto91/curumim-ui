import React, { HTMLAttributes, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { forwardRef } from 'react';
import { css } from '../../theme';
import useMask, { MaskTypes } from '../../hooks/useMask';

const InputWrapper = css({
  position: 'relative'
});

const PasswordIcon = css({
  all: 'unset',
  position: 'absolute',
  right: 0,
  top: 0,
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'box-shadow .2s',
  cursor: 'pointer',

  '&:focus': {
    boxShadow: '$focus',
    borderRadius: '$2'
  },

  '& svg': {
    width: 20,
    height: 20,
    stroke: '#bbb'
  }
});

const InputStyle = css({
  all: 'unset',
  padding: '0 $4',
  height: 40,
  backgroundColor: 'White',
  fontSize: '$base',
  transition: 'box-shadow .2s',
  width: '100%',
  boxSizing: 'border-box',

  '&[data-invalid="true"]': {
    boxShadow: '0 0 0 3px rgba(222, 33, 20, 0.6)',
    borderRadius: '$2'
  },

  '&:focus': {
    boxShadow: '$focus',
    borderRadius: '$2'
  },

  '&::-ms-reveal, &::-ms-clear': {
    display: 'none'
  },

  variants: {
    password: {
      true: {
        paddingRight: 45
      }
    }
  }
});

export interface IInput
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: 'text' | 'email' | 'password';
  isInvalid?: boolean;
  id: string;
  value?: string;
  mask?: MaskTypes;
  limitPercent?: boolean;
  decimalPrecision?: number;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      children,
      type = 'text',
      isInvalid = false,
      id,
      value = '',
      mask: maskType,
      onChange,
      limitPercent = false,
      decimalPrecision = 2,
      ...props
    },
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    const [showPass, setShowPass] = useState<boolean>(false);
    const { mask } = useMask();

    const _onChange = (event: React.FormEvent<HTMLInputElement>) => {
      let value = event.currentTarget.value;

      if (maskType === 'percent') {
        event.currentTarget.value = mask(value, maskType, {
          limit: limitPercent,
          precision: decimalPrecision
        });
      } else if (maskType === 'currency') {
        event.currentTarget.value = mask(value, maskType, { precision: decimalPrecision });
      } else if (maskType) {
        event.currentTarget.value = mask(value, maskType);
      }

      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className={InputWrapper()}>
        <input
          className={InputStyle({ password: type === 'password' })}
          id={id}
          name={id}
          type={type === 'password' && showPass ? 'text' : type}
          ref={ref}
          data-invalid={isInvalid}
          value={value}
          onChange={_onChange}
          {...props}
        />

        {type === 'password' && (
          <div
            className={PasswordIcon()}
            tabIndex={0}
            role="button"
            onKeyPress={(event) => event.key === 'Enter' && setShowPass(!showPass)}
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
