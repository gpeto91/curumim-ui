import { keyframes } from '@stitches/core';
import { css } from '../../theme';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

export const ButtonStyle = css('button', {
  all: 'unset',
  padding: '0 $4',
  textAlign: 'center',
  fontSize: '$base',
  fontWeight: '$bold',
  transition: 'filter .2s, box-shadow .2s, opacity .2s, background-color .2s',
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
    layout: {
      fill: {
        height: 40
      },
      outline: {
        height: 37,
        border: '3px solid',
        backgroundColor: 'White'
      },
      ghost: {
        height: 40,
        backgroundColor: 'transparent'
      }
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        opacity: 0.6
      }
    }
  },

  compoundVariants: [
    {
      layout: 'outline',
      variant: 'primary',
      css: {
        color: '$green',
        borderColor: '$green'
      }
    },
    {
      layout: 'outline',
      variant: 'secondary',
      css: {
        color: '$gray',
        borderColor: '$gray'
      }
    },
    {
      layout: 'outline',
      variant: 'info',
      css: {
        color: '$blue',
        borderColor: '$blue'
      }
    },
    {
      layout: 'outline',
      variant: 'warning',
      css: {
        color: '$yellow',
        borderColor: '$yellow'
      }
    },
    {
      layout: 'outline',
      variant: 'danger',
      css: {
        color: '$red',
        borderColor: '$red'
      }
    },

    {
      layout: 'ghost',
      variant: 'primary',
      css: {
        color: '$green',

        '&:hover:not(:active)': {
          backgroundColor: 'rgba(65, 140, 71, 0.25)'
        },

        '&:active': {
          backgroundColor: 'rgba(65, 140, 71, 0.35)'
        }
      }
    },
    {
      layout: 'ghost',
      variant: 'secondary',
      css: {
        color: '$gray',

        '&:hover:not(:active)': {
          backgroundColor: 'rgba(117, 117, 117, 0.25)'
        },

        '&:active': {
          backgroundColor: 'rgba(117, 117, 117, 0.35)'
        }
      }
    },
    {
      layout: 'ghost',
      variant: 'info',
      css: {
        color: '$blue',

        '&:hover:not(:active)': {
          backgroundColor: 'rgba(66, 135, 245, 0.25)'
        },

        '&:active': {
          backgroundColor: 'rgba(66, 135, 245, 0.35)'
        }
      }
    },
    {
      layout: 'ghost',
      variant: 'warning',
      css: {
        color: '$yellow',

        '&:hover:not(:active)': {
          backgroundColor: 'rgba(252, 219, 3, 0.25)'
        },

        '&:active': {
          backgroundColor: 'rgba(252, 219, 3, 0.35)'
        }
      }
    },
    {
      layout: 'ghost',
      variant: 'danger',
      css: {
        color: '$red',

        '&:hover:not(:active)': {
          backgroundColor: 'rgba(247, 59, 59, 0.25)'
        },

        '&:active': {
          backgroundColor: 'rgba(247, 59, 59, 0.35)'
        }
      }
    },

    {
      layout: 'ghost',
      variant: 'primary',
      disabled: true,
      css: {
        color: '$green',
        backgroundColor: 'rgba(65, 140, 71, 0.35)'
      }
    },
    {
      layout: 'ghost',
      variant: 'secondary',
      disabled: true,
      css: {
        color: '$red',
        backgroundColor: 'rgba(117, 117, 117, 0.35)'
      }
    },
    {
      layout: 'ghost',
      variant: 'info',
      disabled: true,
      css: {
        color: '$red',
        backgroundColor: 'rgba(66, 135, 245, 0.35)'
      }
    },
    {
      layout: 'ghost',
      variant: 'warning',
      disabled: true,
      css: {
        color: '$red',
        backgroundColor: 'rgba(252, 219, 3, 0.35)'
      }
    },
    {
      layout: 'ghost',
      variant: 'danger',
      disabled: true,
      css: {
        color: '$red',
        backgroundColor: 'rgba(247, 59, 59, 0.35)'
      }
    }
  ],

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
