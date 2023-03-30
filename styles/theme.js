import { extendTheme } from "@chakra-ui/react";

const customTheme = {

  fonts: {
    heading: "'montserrat', sans-serif",
    body: "'inter', sans-serif",
  },
  config: {
    initialColorMode: "dark",
  },
};

const theme = extendTheme(customTheme);

export default theme;