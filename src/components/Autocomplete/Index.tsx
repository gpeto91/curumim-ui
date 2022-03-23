import React, { forwardRef, HTMLAttributes, useState } from 'react';
import { Input } from '../Input';
import { css } from '@stitches/core';

const Item = css({
  backgroundColor: 'White',
  transition: 'background-color .2s',
  padding: '10px 5px',

  variants: {
    active: {
      true: {
        backgroundColor: 'Orange'
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

const List = css({
  listStyle: 'none',
  paddingLeft: 0,
  position: 'absolute',
  top: '25px',
  width: '100%'
});

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

interface AutocompleteListProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

interface AutocompleteItemProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  disabled?: boolean;
  isActive: boolean;
}

enum Key {
  'ENTER' = 'Enter',
  'ARROW_UP' = 'ArrowUp',
  'ARROW_DOWN' = 'ArrowDown'
}

const AutocompleteList = forwardRef<HTMLUListElement, AutocompleteListProps>(
  ({ children, ...props }, ref) => {
    return (
      <ul {...props} ref={ref} className={List()}>
        {children}
      </ul>
    );
  }
);

const AutocompleteItem = forwardRef<HTMLLIElement, AutocompleteItemProps>(
  ({ children, isActive, ...props }, ref) => {
    return (
      <li {...props} ref={ref} className={Item({ disabled: props.disabled, active: isActive })}>
        {children}
      </li>
    );
  }
);

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  ({ suggestions, id, onValueChange, ...props }, ref) => {
    const [data, setData] = useState<IAutocompleteState>({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
    });

    const _onChange = (event: React.FormEvent<HTMLInputElement>) => {
      const userInput = event.currentTarget.value;
      const filteredSuggestions = suggestions.filter(
        (suggestion) => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );

      setData({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput: event.currentTarget.value
      });

      if (props.onChange) {
        props.onChange(event);
      }
    };

    const _onClick = (event: React.MouseEvent<HTMLLIElement>) => {
      setData({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: event.currentTarget.innerText
      });

      if (onValueChange) {
        onValueChange(event.currentTarget.innerText);
      }
    };

    const _onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const actions = {
        [Key.ENTER]: () => {
          event.preventDefault();

          setData({
            ...data,
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: data.filteredSuggestions[data.activeSuggestion]
          });

          if (onValueChange) {
            onValueChange(data.filteredSuggestions[data.activeSuggestion]);
          }
        },
        [Key.ARROW_UP]: () => {
          if (data.activeSuggestion === 0) return;

          setData({
            ...data,
            activeSuggestion: data.activeSuggestion - 1
          });
        },
        [Key.ARROW_DOWN]: () => {
          if (data.activeSuggestion === data.filteredSuggestions.length - 1) return;

          setData({
            ...data,
            activeSuggestion: data.activeSuggestion + 1
          });
        }
      };

      if (actions[event.key as Key]) {
        actions[event.key as Key]();
      }
    };

    const _onHover = (index: number) => {
      setData({
        ...data,
        activeSuggestion: index
      });
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
