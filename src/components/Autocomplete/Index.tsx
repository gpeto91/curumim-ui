import React, { forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { css } from '@stitches/core';

import { Input } from '../Input';
import AutocompleteList from './AutocompleteList';
import AutocompleteItem from './AutocompleteItem';

const AutocompleteWrapper = css({
  position: 'relative'
});

interface IAutocompleteState {
  activeSuggestion: number;
  filteredSuggestions: Array<string>;
  showSuggestions: boolean;
  userInput: string;
}

export interface AutocompleteProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  suggestions: Array<string>;
  id: string;
  value?: string;
  onValueChange?: (value: string) => void;
  strict?: boolean; // aceita apenas valores definidos na sugestão
}

enum Key {
  'ENTER' = 'Enter',
  'ARROW_UP' = 'ArrowUp',
  'ARROW_DOWN' = 'ArrowDown',
  'ESCAPE' = 'Escape'
}

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  ({ suggestions, id, onValueChange, strict = false, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const [value, setValue] = useState<string>('');
    const [data, setData] = useState<IAutocompleteState>({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
    });

    function handleClickOutside(this: HTMLElement, ev: Event) {
      const input = document.getElementById(id);

      if (
        listRef.current &&
        !listRef.current.contains(ev?.target as Node) &&
        document.activeElement !== input
      ) {
        setData({
          ...data,
          showSuggestions: false
        });
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);

      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [data.showSuggestions]);

    const setItem = (
      userInput: string,
      showSuggestions: boolean,
      filteredSuggestions: Array<any> = []
    ) => {
      setData({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions,
        userInput
      });
    };

    const setActiveSuggestion = (value: number) => {
      setData({
        ...data,
        activeSuggestion: value
      });
    };

    const keyboardActions = {
      [Key.ENTER]: (event: React.KeyboardEvent<HTMLInputElement>) => {
        const showSuggestions = false;
        event.preventDefault();

        setItem(data.filteredSuggestions[data.activeSuggestion], showSuggestions);
        setValue(data.filteredSuggestions[data.activeSuggestion]);

        if (onValueChange) {
          onValueChange(data.filteredSuggestions[data.activeSuggestion]);
        }
      },
      [Key.ARROW_UP]: () => {
        if (data.activeSuggestion === 0) return;

        setActiveSuggestion(data.activeSuggestion - 1);
      },
      [Key.ARROW_DOWN]: () => {
        if (data.activeSuggestion === data.filteredSuggestions.length - 1) return;

        setActiveSuggestion(data.activeSuggestion + 1);
      },
      [Key.ESCAPE]: () => {
        if (data.showSuggestions) {
          setData({
            ...data,
            showSuggestions: false
          });
        }
      }
    };

    const _onChange = (event: React.FormEvent<HTMLInputElement>) => {
      const userInput = event.currentTarget.value;
      const filteredSuggestions = suggestions.filter(
        (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      const showSuggestions = true;

      setItem(event.currentTarget.value, showSuggestions, filteredSuggestions);
      setValue(event.currentTarget.value);

      if (onValueChange && strict) {
        if (strict) onValueChange('');
        else onValueChange(event.currentTarget.value);
      }

      if (props.onChange) {
        props.onChange(event);
      }
    };

    const _onClick = (event: React.MouseEvent<HTMLLIElement>) => {
      const showSuggestions = false;
      setItem(event.currentTarget.innerText, showSuggestions);
      setValue(event.currentTarget.innerText);

      if (onValueChange) {
        onValueChange(event.currentTarget.innerText);
      }
    };

    const _onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (keyboardActions[event.key as Key]) {
        keyboardActions[event.key as Key](event);
      }
    };

    const _onHover = (index: number) => {
      setActiveSuggestion(index);
    };

    return (
      <div className={AutocompleteWrapper()}>
        {data.showSuggestions && data.userInput && data.filteredSuggestions.length && (
          <AutocompleteList ref={listRef}>
            {data.filteredSuggestions.map((suggestion, index) => {
              return (
                <AutocompleteItem
                  key={suggestion}
                  onMouseDown={_onClick}
                  onMouseOver={() => _onHover(index)}
                  isActive={index === data.activeSuggestion}
                >
                  {suggestion}
                </AutocompleteItem>
              );
            })}
          </AutocompleteList>
        )}

        {data.showSuggestions && data.userInput && !data.filteredSuggestions.length && (
          <AutocompleteList ref={listRef}>
            <AutocompleteItem isActive={false}>Nenhum resultado encontrado</AutocompleteItem>
          </AutocompleteList>
        )}

        <Input
          {...props}
          id={id}
          type="text"
          value={strict ? value : props.value}
          onChange={_onChange}
          onKeyDown={_onKeyDown}
          ref={strict ? inputRef : ref}
        />
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
