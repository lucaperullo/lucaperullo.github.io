import { IconButton, useColorMode } from "@chakra-ui/react";
import { transform } from "framer-motion";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      size="sm"
      onClick={() => toggleColorMode()}
      icon={
        colorMode === "light" ? (
          <IoSunnyOutline size={20} />
        ) : (
          <IoMoonOutline size={20} />
        )
      }
      color="white"
      transition={"0.25s ease"}
      _hover={{
        bg: "transparent",
        transform: "rotate(360deg)",
      }}
      _active={{
        bg: "transparent",
      }}
      aria-label="colormode"
      borderRadius="8"
      variant="ghost"
    />
  );
}
