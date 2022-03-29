import React, { useState, useCallback, HTMLAttributes } from 'react';
import { FiSearch, FiLoader } from 'react-icons/fi';
import { keyframes } from '@stitches/core';
import { debounce } from 'lodash';

import { Input } from '../Input';
import { css } from '../../theme';

interface ISearchInputProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  onSearch: (value: string) => void;
  placeholder?: string;
  isLoading?: boolean;
}

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

const SearchBox = css({
  position: 'relative'
});

const SearchIcon = css({
  all: 'unset',
  position: 'absolute',
  right: 0,
  top: 0,
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'box-shadow .2s',
  cursor: 'pointer',

  '&:focus': {
    boxShadow: '$focus',
    borderRadius: '$2'
  },

  '& svg': {
    width: 20,
    height: 20,
    stroke: '#bbb'
  },

  variants: {
    loading: {
      true: {
        pointerEvents: 'none',

        '& svg': {
          animation: `${spin} 1s infinite linear`
        }
      }
    }
  }
});

const SearchInput = React.forwardRef<HTMLInputElement, ISearchInputProps>(
  ({ id, placeholder = '', onSearch, isLoading = false, ...props }, ref) => {
    const [query, setQuery] = useState<string>('');

    const handleDebounceFn = (value: string) => {
      onSearch(value);
    };

    const debounceFn = useCallback(debounce(handleDebounceFn, 300), []);

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
      setQuery(event.currentTarget.value);
      debounceFn(event.currentTarget.value);
    };

    return (
      <div className={SearchBox()}>
        <Input
          {...props}
          type="search"
          ref={ref}
          value={query}
          onChange={handleChange}
          id={id}
          placeholder={placeholder}
        />
        <div className={SearchIcon({ loading: isLoading })} tabIndex={0} role="button">
          {isLoading ? <FiLoader /> : <FiSearch />}
        </div>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export { SearchInput };
