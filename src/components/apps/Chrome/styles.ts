import { styled } from "../../../styles";

export const Container = styled("div", {
  width: "100%",
  paddingTop: "0.5rem",
  paddingBottom: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: "$gray100",
  fontSize: "$sm",
  borderBottom: "1px solid $gray900",

  div: {
    marginLeft: "2rem",
    marginRight: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    backgroundColor: "$gray100",
    opacity: "0",
    
    "&:hover": {
      opacity: "1",
    },
  },

  img: {
    width: "2rem",
  },

  input: {
    outline: "none",
    backgroundColor: "$gray500",
    paddingLeft: "3rem",
    padding: "0.5rem 0",
    marginRight: "3rem",
    width: "5/6",
    color: "$gray900",

    "&:focus": {
      backgroundColor: "$gray100",
    },
  },
});

export const ContainerComponents = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  backgroundColor: "$gray500",

  iframe: {
    flexGrow: 1,
  }
});