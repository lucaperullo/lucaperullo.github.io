import {
  Box,
  Hide,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ColorModeToggle from "../color";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const colorMode = useColorModeValue(false, true);
  return (
    <Box
      as="nav"
      w="100%"
      h="100%"
      minH="60px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px="4"
      position="sticky"
      zIndex={2}
      bg={colorMode ? "facebook.900" : "brand.400"}
      top="0"
    >
      <Box
        maxW="975px"
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          color="white"
          p="2"
          fontFamily="'Fuggles', cursive"
          fontWeight="extrabold"
          fontSize="42px"
          lineHeight="0.8"
        >
          Luca Perullo
          <br />
          <Text
            textAlign="center"
            mt="-2px"
            borderRadius={8}
            p="1"
            bgGradient={"linear(to-r, green.400,purple.500)"}
            fontSize={12}
            lineHeight="1"
            fontFamily="'Poppins', sans-serif"
          >
            Fullstack Developer
          </Text>
        </Text>
        <Box display="flex">
          <ColorModeToggle />
        </Box>
      </Box>
      <Hide below="md">
        <Box position="absolute" left="50%" transform="translateX(-50%)">
          <InputGroup h="36px" borderRadius={8} overflow="hidden">
            {search === "" && (
              <InputLeftAddon
                width="40px"
                p="0"
                display="flex"
                justifyContent="center"
                alignItems="center"
                children={
                  <Box mb="1">
                    <FiSearch color="rgb(142, 142, 142)" size="16px" />
                  </Box>
                }
                bg="transparent"
                border="none"
                zIndex="1"
                position="absolute"
              />
            )}
            <Input
              _focusVisible={{
                borderColor: "transparent",
              }}
              fontSize="14px"
              fontWeight={200}
              type="search"
              placeholder="Search"
              variant="filled"
              paddingLeft={search === "" ? "40px" : "12px"}
              w="268px"
              minH="36px"
              className={colorMode ? "dark" : "light"}
              h="36px"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </InputGroup>
        </Box>
      </Hide>
    </Box>
  );
}
