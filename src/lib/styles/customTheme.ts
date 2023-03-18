import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";
const styles = {
  global: (props: StyleFunctionProps | Dict<any>) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("brand.100", "facebook.700")(props),
    },
  }),
};

const colors = {
  brand: {
    50: "#CFA6A0",
    100: "#C89892",
    200: "#C18D85",
    300: "#BB8077",
    400: "#B4746A",
    500: "#0B6581",
    900: "#27194A",
  },
};
const config = {
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    // Button: {
    // }
  },
  config: {
    initialColorMode: "light",
  },
};

const theme = extendTheme({ config, styles, colors });
export default theme;
