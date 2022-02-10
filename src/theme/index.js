import { extendTheme } from "@chakra-ui/react";
import Button from "./button";
import { createBreakpoints } from '@chakra-ui/theme-tools'
// const breakpoints = createBreakpoints({
//   sm: '320px',
//   md: '768px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// })
const theme = extendTheme({
  // breakpoints,
  styles: {
    global: {
      "html, body": {
        backgroundImage: "/assets/body.png" ,
        height: '600px',
        width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        fontSize: "1rem",
        color: "#000",
      },
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
  components: {
    Button,
    Select: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
    Input: {
      baseStyle: {
        borderRadius: "8px",
      },
    },
  },
  fontSizes: {
    xs: "0.625rem",
    sm: "0.75rem",
    md: "0.875rem",
    lg: "1rem",
    xl: "1.125rem",
    "2xl": "1.25rem",
    "3xl": "1.5rem",
    "4xl": "2.0rem",
  },
});

export default theme;
