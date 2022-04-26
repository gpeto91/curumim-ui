import { css } from '@stitches/core';

export const PaginationComponent = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '15px 0',
  backgroundColor: 'White'
});

export const PaginationContainer = css({
  display: 'flex',
  alignItems: 'center'
});

export const PaginationPages = css({
  marginRight: 10,

  '& label': {
    marginRight: 5,
    fontSize: 12
  },

  '& select': {
    width: 50,
    textAlign: 'center',
    padding: '0 5px',
    height: 25
  }
});

export const PaginationSizes = css({
  marginRight: 10,

  '& label': {
    marginRight: 5,
    fontSize: 12
  },

  '& select': {
    width: 50,
    textAlign: 'center',
    padding: '0 5px',
    height: 25
  }
});

export const PaginationTotals = css({
  marginRight: 10,

  '& span': {
    fontSize: 12
  }
});

export const PaginationButtons = css({
  display: 'grid',
  gridTemplateColumns: '40px 40px',
  gap: 5,

  button: {
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    transition: 'background-color .2s',

    '&:hover': {
      backgroundColor: '#efefef'
    },

    '&:disabled': {
      opacity: 0.6,
      pointerEvents: 'none'
    }
  },

  svg: {
    width: 20,
    height: 20
  }
});
