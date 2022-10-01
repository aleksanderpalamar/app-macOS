import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'body': {
    backgroundImage: '$lineargradient',     
    color: '$gray100',
    fontFamily: '$body',
    fontSize: '$md',
    fontWeight: '$normal',
  },
  'input, button, textarea, select': {
    fontFamily: '$body',
    fontSize: '$md',
    fontWeight: '$normal',
    color: '$gray100',
    backgroundColor: '$gray800',
    border: '2px solid $gray700',
    borderRadius: '6px',
    padding: '1rem',

    '&:focus': {
      outline: 'none',
      borderColor: '$gray600',
    },
  },
});