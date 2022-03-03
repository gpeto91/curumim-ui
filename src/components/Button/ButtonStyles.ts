import { css } from '../../theme';

export const ButtonStyle = css('button', {
  all: 'unset',
  padding: '0 $4',
  height: 40,
  textAlign: 'center',
  fontSize: '$base',
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
    boxShadow: '$focus',
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
