import React, { forwardRef, HTMLAttributes } from 'react';
import { css } from '../../theme';

interface AutocompleteListProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

const List = css({
  listStyle: 'none',
  paddingLeft: 0,
  position: 'absolute',
  top: '25px',
  width: '100%'
});

const AutocompleteList = forwardRef<HTMLUListElement, AutocompleteListProps>(
  ({ children, ...props }, ref) => {
    return (
      <ul {...props} ref={ref} className={List()}>
        {children}
      </ul>
    );
  }
);

AutocompleteList.displayName = 'AutocompleteList';

export default AutocompleteList;
