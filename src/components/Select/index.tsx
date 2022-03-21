import React, { ReactNode, forwardRef } from 'react';
import { css } from '../../theme';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import * as Select from '@radix-ui/react-select';
import SelectItem from './SelectItem';
import SelectGroup from './SelectGroup';

interface ISelectProps extends Select.SelectProps {
  id: string;
  ariaLabel: string;
  defaultValue: string;
  children?: ReactNode | ReactNode[];
  isInvalid?: boolean;
}

const SelectTrigger = css({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 $4',
  height: 40,
  fontSize: '$base',
  backgroundColor: 'White',

  '&[data-invalid="true"]': {
    boxShadow: '0 0 0 3px rgba(222, 33, 20, 0.6)',
    borderRadius: '$2'
  },

  '&:focus': {
    boxShadow: '$focus',
    borderRadius: '$2'
  }
});

const SelectContent = css({
  overflow: 'hidden',
  backgroundColor: 'White'
});

const SelectViewport = css({
  padding: '$4'
});

const SelectRoot = forwardRef<HTMLButtonElement, ISelectProps>(
  ({ children, ariaLabel, defaultValue, id, isInvalid = false, ...props }, ref) => {
    return (
      <Select.Root defaultValue={defaultValue} {...props}>
        <Select.Trigger
          id={id}
          data-invalid={isInvalid}
          className={SelectTrigger()}
          aria-label={ariaLabel}
          ref={ref}
        >
          <Select.Value />
          <Select.Icon>
            <FiChevronDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content className={SelectContent()}>
          <Select.ScrollUpButton>
            <FiChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport className={SelectViewport()}>{children}</Select.Viewport>
          <Select.ScrollDownButton>
            <FiChevronDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Root>
    );
  }
);

SelectRoot.displayName = 'SelectRoot';

const SelectNamespace = Object.assign(SelectRoot, { Group: SelectGroup, Item: SelectItem });

export { SelectNamespace as SelectRoot };
