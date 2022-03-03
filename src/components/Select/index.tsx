import React, { ReactNode } from 'react';
import { css } from '../../theme';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import * as Select from '@radix-ui/react-select';
import SelectItem, { ISelectItem } from './SelectItem';
import SelectGroup, { ISelectGroup } from './SelectGroup';

interface ISelectProps extends Select.SelectProps {
  ariaLabel: string;
  defaultValue: string;
  children?: ReactNode | ReactNode[];
}

interface ISelectComponents {
  Group: React.FunctionComponent<ISelectGroup>;
  Item: React.FunctionComponent<ISelectItem>;
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

const SelectRoot: React.FunctionComponent<ISelectProps> & ISelectComponents = ({
  children,
  ariaLabel,
  defaultValue,
  ...props
}) => {
  return (
    <Select.Root defaultValue={defaultValue} {...props}>
      <Select.Trigger className={SelectTrigger()} aria-label={ariaLabel}>
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
};

SelectRoot.Group = SelectGroup;
SelectRoot.Item = SelectItem;

export { SelectRoot };
