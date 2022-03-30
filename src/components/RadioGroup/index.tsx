import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { RadioItem } from './RadioItem';

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupPrimitive.RadioGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Root {...props} ref={ref}>
        {children}
      </RadioGroupPrimitive.Root>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

const RadioNamespace = Object.assign(RadioGroup, { Item: RadioItem });

export { RadioNamespace as RadioGroup };
