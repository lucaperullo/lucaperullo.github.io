import { Button } from "@chakra-ui/react";
import { IoChatbubblesOutline } from "react-icons/io5";

export default function ChatButton({ onOpen }: { onOpen: () => void }) {
  return (
    <Button
      position="fixed"
      bottom="15px"
      right="15px"
      colorScheme="messenger"
      onClick={onOpen}
      rightIcon={<IoChatbubblesOutline />}
    >
      Chat with me
    </Button>
  );
}
