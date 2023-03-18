import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function ChatStarted({
  socket,
  name,
}: {
  socket: any;
  name: string;
}) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    socket.on("recive-message", (message: any) => {
      console.log(message);
      setMessage(message);
    });
  }, [socket]);

  const chatBubble = (message: any) => {
    return (
      <Flex
        direction="column"
        align="flex-start"
        justify="flex-start"
        ml={2}
        mr={2}
        mb={2}
        mt={2}
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
        p={2}
      >
        <Box>{message.message}</Box>
        <Box>{message.author}</Box>
        <Box>{message.time}</Box>
      </Flex>
    );
  };

  return (
    <Box>
      <Flex as="header" align="center" justify="space-between">
        {chatBubble(message)}
      </Flex>
    </Box>
  );
}
