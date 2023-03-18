import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import ChatBackoffice from "./chat";

export default function BackofficePage() {
  const [lock, setLock] = useState(false);
  const [code, setCode] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("lock") === "true") {
  //     setLock(true);
  //   }
  // }, []);

  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {!lock ? (
        <InputGroup w="90%" maxW="400px">
          <InputLeftAddon bg="gray.300" _dark={{ bg: "gray.600" }}>
            Password
          </InputLeftAddon>
          <Input
            isInvalid={code !== "luca1234"}
            type="password"
            onChange={(e: any) => {
              setCode(e.target.value);
              if (e.target.value === "luca1234") {
                setLock(true);
                localStorage.setItem("lock", "true");
              }
            }}
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                if (code === "luca1234") {
                  setLock(true);
                  localStorage.setItem("lock", "true");
                }
              }
            }}
            variant="filled"
            placeholder="Enter password"
          ></Input>
        </InputGroup>
      ) : (
        <ChatBackoffice />
      )}
    </Box>
  );
}
