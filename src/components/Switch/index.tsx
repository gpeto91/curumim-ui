import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { css } from '../../theme';

const SwitchWrapper = css({
  display: 'flex',
  alignItems: 'center',

  '& label': {
    marginLeft: 20
  }
});

const SwitchRoot = css({
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$greenLight',
  borderRadius: '9999px',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  '&:focus': {
    boxShadow: '$focus'
  },

  '&[data-state="checked"]': {
    backgroundColor: '$green'
  }
});

const SwitchThumb = css({
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  transition: 'transform 300ms',
  transform: 'translateX(2px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(19px)'
  }
});

interface ISwitchProps extends SwitchPrimitive.SwitchProps {
  id: string;
  label?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, ISwitchProps>(({ id, label, ...props }, ref) => {
  return (
    <div className={SwitchWrapper()}>
      <SwitchPrimitive.Root {...props} ref={ref} id={id} className={SwitchRoot()}>
        <SwitchPrimitive.SwitchThumb className={SwitchThumb()} />
      </SwitchPrimitive.Root>

      {label && <label>{label}</label>}
    </div>
  );
});

Switch.displayName = 'Switch';

export { Switch };
