import { css } from '../../theme';

export const ButtonStyle = css('button', {
  all: 'unset',
  padding: '$4',
  textAlign: 'center',
  fontWeight: '$bold',
  transition: 'filter .2s, box-shadow .2s, opacity .2s',
  cursor: 'pointer',

  '&:hover:not([disabled])': {
    filter: 'brightness(0.9)'
  },

  '&:active': {
    filter: 'brightness(0.6)'
  },

  '&[disabled]': {
    cursor: 'not-allowed',
    opacity: 0.5
  },

  '&:focus': {
    boxShadow: '0 0 0 3px rgba(66, 153, 255, 0.6)',
    borderRadius: '$2'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$green',
        color: 'White'
      },
      secondary: {
        backgroundColor: 'White',
        color: '$green'
      },
      info: {
        backgroundColor: '$blue',
        color: 'White'
      },
      warning: {
        backgroundColor: '$yellow',
        color: 'White'
      },
      danger: {
        backgroundColor: '$red',
        color: 'White'
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
});
