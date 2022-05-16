import React, { forwardRef } from 'react';
import { FiCheck } from 'react-icons/fi';
import * as Select from '@radix-ui/react-select';
import { css } from '../../theme';

const SelectItemStyle = css({
  all: 'unset',
  lineHeight: 1,
  padding: '$4',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',

  '&[data-disabled]': {
    pointerEvents: 'none',
    color: '#ccc'
  },

  '&:focus': {
    boxShadow: '$focus',
    borderRadius: '$2'
  }
});

export interface ISelectItem extends Select.SelectItemProps {
  value: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ISelectItem>(({ description, ...props }, ref) => {
  return (
    <Select.Item className={SelectItemStyle()} {...props} ref={ref}>
      <Select.ItemText>{description}</Select.ItemText>

      {!props.disabled ? (
        <Select.ItemIndicator>
          <FiCheck />
        </Select.ItemIndicator>
      ) : (
        <Select.ItemIndicator />
      )}
    </Select.Item>
  );
});

SelectItem.displayName = 'SelectItem';

export default SelectItem;
