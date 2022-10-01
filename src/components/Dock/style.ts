import { styled } from "../../styles";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  padding: "0.5rem",
  backgroundColor:"rgba(0,0,0,0.6)",
  backdropFilter:"blur(0.2rem)",
  borderRadius: "6px",

  a: {
    display: "flex",
    alignItems: "center",
    cursors: "pointer",
    transition: "all 0.4s ease-in-out",
    
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
  
  '.desktop': {
    color: "$gray100",
  },

  '.AppStore': {
    color: "$gray100",
  },
  
  '.discord': {
    color: '$gray100',
    backgroundColor: '$discord',
    borderRadius: '6px',
  },
  '.spotify': {    
    color: '$gray900',
    backgroundColor: '$spotify',
    borderRadius: '6px',
  },
  '.messenger': {
    color: '$messenger',
    backgroundColor: '$gray100',
    borderRadius: '6px',
  },
  '.chrome': {
    color: '$chrome',
    backgroundColor: '$gray100',
    borderRadius: '6px',
  },
  '.terminal': {
    color: '$gray100',
    border: '1px solid $gray100',
    backgroundColor: '$gray800',
    borderRadius: '6px',
  },
  '.vscode': {
    color: '$vscode',
  },
  '.folder': {
    color: '$folder',
  },
  '.folder_user': {
    color: '$folder',
  },
  '.border': {
    color: '$gray600',
    height: '100%',
    fontSize: '$2xl',
    fontWeight: '$thin',
  },
  '.trash': {
    color: '$gray500',    
  }
});