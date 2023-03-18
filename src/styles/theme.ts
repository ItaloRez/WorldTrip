import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    dark: {
      black: "#000000",
      text: "#47585B",
      info: "#999999",
      opacity: "rgba(153, 153, 153, 0.5);",
    },
    light: {
      white: "#FFFFFF",
      text: "#F5F8FA",
      background: "#F5F8FA",
      info: "#DADADA",
    },
    highlight: {
      main: "#FFBA08",
      opacity: "rgba(255,186,8,0.5)",
    },
  },
  fonts: {
    heading: "var(--font-poppins)",
    body: "var(--font-poppins)",
  },
  styles: {
    global: {
      body: {
        bg: "light.background",
        color: "dark.text",
      },
    },
  },
});
