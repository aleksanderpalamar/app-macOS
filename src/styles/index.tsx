import { createStitches } from "@stitches/react";
import wallpaperImg from "../assets/images/wallpaper.jpg";


export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray100: "#f7fafc",
      gray200: "#edf2f7",
      gray300: "#e2e8f0",
      gray400: "#cbd5e0",
      gray500: "#a0aec0",
      gray600: "#718096",
      gray700: "#4a5568",
      gray800: "#2d3748",
      gray900: "#1a202c",

      success: "#00875f",
      error: "#e53e3e",
      warning: "#faf089",
      info: "#1c6be9",

      discord: "#7289da",
      spotify: "#1db954",
      messenger: "#0084ff",      
      chrome: "#e53e3e",
      vscode: "#007acc",
      folder: "#4285f4",

      primary: "#8257e6",
      secondary: "#e559f9",

      lineargradient: "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)",
      desktop: "url("+wallpaperImg+")",
    },
    fonts: {
      body: "Roboto, sans-serif",
    },
    fontSizes: {
      sm: "0.875rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
    fontWeights: {
      thin: 100,
      normal: 400,
      bold: 700,
    },
  },
} as const);
