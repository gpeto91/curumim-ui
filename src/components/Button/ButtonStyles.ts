import { keyframes } from '@stitches/core';
import { css } from '../../theme';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

export const ButtonStyle = css('button', {
  all: 'unset',
  padding: '0 $4',
  height: 40,
  textAlign: 'center',
  fontSize: '$base',
  fontWeight: '$bold',
  transition: 'filter .2s, box-shadow .2s, opacity .2s',
  cursor: 'pointer',
  userSelect: 'none',

  '&:hover:not([disabled]):not(:active)': {
    filter: 'brightness(0.9)'
  },

  '&:active': {
    filter: 'brightness(0.8)'
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
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        opacity: 0.6
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
});

export const Loader = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    marginRight: '$4',
    animation: `${spin} 1s infinite linear`
  }
});
