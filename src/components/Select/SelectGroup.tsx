import React, { forwardRef } from 'react';
import * as Select from '@radix-ui/react-select';
import SelectItem from './SelectItem';
import { css } from '../../theme';

export interface ISelectGroup extends Select.SelectGroupProps {
  label: string;
}

const Label = css({
  fontSize: '$base',
  padding: '$4',
  color: '#999'
});

const SelectGroup = forwardRef<HTMLDivElement, ISelectGroup>(
  ({ children, label, ...props }, ref) => {
    return (
      <Select.Group ref={ref} {...props}>
        <Select.Label className={Label()}>{label}</Select.Label>
        {children &&
          React.Children.map(children, (child) => {
            if (
              React.isValidElement(child) &&
              (child as React.ReactElement<any>).type === SelectItem
            ) {
              return child;
            }

            return null;
          })}
      </Select.Group>
    );
  }
);

SelectGroup.displayName = 'SelectGroup';

export default SelectGroup;
