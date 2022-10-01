import { styled } from "../../styles";

export const Container = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const Header = styled("header", {
  backgroundColor:"rgba(0,0,0,0.6)",
  backdropFilter:"blur(0.2rem)",
  color: "$gray100",
  height: "2rem",
  padding: "1rem",
  width: "100%",
  maxWidth: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  div: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",

    a: {
      display: "flex",
      gap: "1rem",
      color: "$gray100",
      textDecoration: "none",

      span: {
        fontSize: "$sm",
        fontWeight: "$bold",
        transition: "all 0.4s ease-in-out",

        "&:hover": {
          color: "$gray500",
        },
      },
    }
  },
});