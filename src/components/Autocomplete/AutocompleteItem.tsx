import React, { forwardRef, HTMLAttributes } from 'react';
import { css } from '../../theme';

const Item = css({
  backgroundColor: 'White',
  transition: 'background-color .2s',
  padding: '10px 5px',

  variants: {
    active: {
      true: {
        backgroundColor: 'rgba(65, 140, 71, 0.35)'
      }
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        cursor: 'default',
        opacity: 0.6
      }
    }
  }
});

interface AutocompleteItemProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  disabled?: boolean;
  isActive: boolean;
}

const AutocompleteItem = forwardRef<HTMLLIElement, AutocompleteItemProps>(
  ({ children, isActive, ...props }, ref) => {
    return (
      <li {...props} ref={ref} className={Item({ disabled: props.disabled, active: isActive })}>
        {children}
      </li>
    );
  }
);

AutocompleteItem.displayName = 'AutocompleteItem';

export default AutocompleteItem;
