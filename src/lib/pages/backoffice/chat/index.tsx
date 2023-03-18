import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";

export default function ChatBackoffice() {
  return (
    <Modal
      isOpen={true}
      onClose={function (): void {
        throw new Error("Function not implemented.");
      }}
    >
      <ModalOverlay />
      <ModalContent minH="95vh" m="4">
        <ModalHeader>Nuovi messaggi(2)</ModalHeader>

        <ModalBody>asd</ModalBody>

        <ModalFooter>
          <InputGroup w="100%">
            <Input
              w="100%"
              variant="filled"
              placeholder="type your message.."
            ></Input>
            <InputRightAddon p={0}>
              <Button>Send</Button>
            </InputRightAddon>
          </InputGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
