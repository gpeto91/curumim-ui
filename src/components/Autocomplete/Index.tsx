import React, { forwardRef, HTMLAttributes, useState } from 'react';
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

interface AutocompleteProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  suggestions: Array<string>;
  id: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

enum Key {
  'ENTER' = 'Enter',
  'ARROW_UP' = 'ArrowUp',
  'ARROW_DOWN' = 'ArrowDown'
}

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  ({ suggestions, id, onValueChange, ...props }, ref) => {
    const [data, setData] = useState<IAutocompleteState>({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
    });

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
      }
    };

    const _onChange = (event: React.FormEvent<HTMLInputElement>) => {
      const userInput = event.currentTarget.value;
      const filteredSuggestions = suggestions.filter(
        (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      const showSuggestions = true;

      setItem(event.currentTarget.value, showSuggestions, filteredSuggestions);

      if (props.onChange) {
        props.onChange(event);
      }
    };

    const _onClick = (event: React.MouseEvent<HTMLLIElement>) => {
      const showSuggestions = false;
      setItem(event.currentTarget.innerText, showSuggestions);

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

    const _onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setData({
        ...data,
        showSuggestions: false
      });

      if (props.onBlur) {
        props.onBlur(event);
      }
    };

    return (
      <div className={AutocompleteWrapper()}>
        {data.showSuggestions && data.userInput && data.filteredSuggestions.length && (
          <AutocompleteList>
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
          <AutocompleteList>
            <AutocompleteItem isActive={false}>Nenhum resultado encontrado</AutocompleteItem>
          </AutocompleteList>
        )}

        <Input
          {...props}
          id={id}
          onKeyDown={_onKeyDown}
          type="text"
          onBlur={_onBlur}
          onChange={_onChange}
          value={props.value}
          ref={ref}
        />
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';

export { Autocomplete };
