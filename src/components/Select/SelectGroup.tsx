import React from 'react';
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

const SelectGroup: React.FunctionComponent<ISelectGroup> = ({ children, label, ...props }) => {
  return (
    <Select.Group {...props}>
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
};

SelectGroup.displayName = 'Group';

export default SelectGroup;
