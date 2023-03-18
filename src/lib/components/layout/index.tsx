import { Box, Divider } from "@chakra-ui/react";
import Tabs from "../tabs";

import Navbar from "../navbar";
import Description from "../description";
export default function Layout() {
  return (
    <Box
      w="100%"
      h="100%"
      display={"flex"}
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Navbar />
      <Divider />

      <Box
        maxW="975px"
        w="100%"
        p={{
          base: 2,
          md: 4,
          lg: 0,
        }}
      >
        <Description />
        <Tabs />
        <Box>{/* main content */}</Box>
      </Box>
    </Box>
  );
}
