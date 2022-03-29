import React, { forwardRef, HTMLAttributes } from 'react';
import { css } from '../../theme';

interface AutocompleteListProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

const List = css({
  margin: 0,
  listStyle: 'none',
  paddingLeft: 0,
  position: 'absolute',
  zIndex: 10,
  top: 40,
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

// TODO adicionar altura limite da lista e habilitar scroll
