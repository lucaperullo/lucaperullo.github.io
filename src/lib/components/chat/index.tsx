import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Show,
  Avatar,
  chakra,
  Box,
  InputGroup,
  Input,
  InputLeftElement,
  InputLeftAddon,
  Textarea,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  CloseButton,
  Flex,
  InputRightAddon,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import * as io from "socket.io-client";
import ChatButton from "../chat-button";
import ChatStarted from "./chat-started";

export default function ChatModal() {
  const socket = io.connect("http://localhost:3000");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [startChat, setStartChat] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const sendMessage = () => {
    console.log(message);
    if (message !== "") {
      console.log(message);
      const messageData = {
        author: name,
        message: message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      socket.emit("message", messageData);
      setMessage("");
      console.log(message);
    }
  };
  useEffect(() => {
    socket.on("recive-message", (message: any) => {
      console.log(message);
      setMessage(message);
    });
  }, [socket]);
  return (
    <>
      <Alert
        opacity={showAlert ? 1 : 0}
        maxW="90%"
        position="fixed"
        top={showAlert ? "15px" : "-100%"}
        transition="opacity 0.3s ease-in-out"
        left="15px"
        zIndex={99999999}
        status="error"
      >
        <AlertIcon />

        <AlertTitle>Name must contain at least 3 characters!</AlertTitle>
        <CloseButton onClick={() => setShowAlert(false)} />
      </Alert>

      <ChatButton onOpen={onOpen} />
      <Show below="md">
        <Modal size="full" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              bg="brand.50"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              _dark={{
                bg: "gray.600",
              }}
            >
              <Box position="relative">
                <Avatar
                  border="1px solid #333"
                  src="/assets/luca.webp"
                  mr="2"
                />
                <chakra.div
                  position="absolute"
                  top="10"
                  left="9"
                  h="10px"
                  w="10px"
                  borderRadius="50%"
                  bg="green.500"
                  border="1px solid #fff"
                ></chakra.div>
              </Box>
              <chakra.span>Live chat</chakra.span>
              <CloseButton
                position="relative"
                top="-12px"
                right="-12px"
                onClick={onClose}
                bg="brand.100"
                _dark={{
                  bg: "gray.700",
                }}
              />
            </ModalHeader>

            <ModalBody>
              {!startChat ? (
                <>
                  {" "}
                  <InputGroup>
                    <InputLeftAddon minW="95px">
                      <chakra.span>Name</chakra.span>
                    </InputLeftAddon>
                    <Input
                      onChange={(e: any) => {
                        setName(e.target.value);
                      }}
                    ></Input>
                  </InputGroup>
                  <InputGroup my="2">
                    <InputLeftAddon minW="95px">
                      <chakra.span>Message</chakra.span>
                    </InputLeftAddon>
                    <Textarea
                      onChange={(e: any) => {
                        setMessage(e.target.value);
                      }}
                      onInput={(e: any) => {
                        e.currentTarget.style.height = ""; /* Reset the height*/
                        e.currentTarget.style.height =
                          e.currentTarget.scrollHeight + "px";
                      }}
                      borderTopLeftRadius={0}
                    ></Textarea>
                  </InputGroup>
                </>
              ) : (
                <ChatStarted socket={socket} name={name} />
              )}
            </ModalBody>

            <ModalFooter>
              {!startChat ? (
                <Button
                  onClick={() => {
                    if (name.length > 2) {
                      setStartChat(true);
                      socket.emit("join_room");
                      socket.emit("message", { name, message });
                    } else {
                      setShowAlert(true);
                      setTimeout(() => {
                        setShowAlert(false);
                      }, 3000);
                    }
                  }}
                  colorScheme="green"
                >
                  Start chat
                </Button>
              ) : (
                <InputGroup w="100%">
                  <Input
                    defaultValue={message}
                    w="100%"
                    variant="filled"
                    placeholder="type your message.."
                    onChange={(e: any) => {
                      setMessage(e.target.value);
                    }}
                  ></Input>
                  <InputRightAddon p={0}>
                    <Button
                      onClick={() => {
                        sendMessage();
                      }}
                    >
                      Send
                    </Button>
                  </InputRightAddon>
                </InputGroup>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Show>
    </>
  );
}
