import {
  Avatar,
  Button,
  Text,
  GridItem,
  IconButton,
  SimpleGrid,
  Show,
  Hide,
} from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";

export default function Description() {
  return (
    <SimpleGrid
      columns={8}
      mt={{
        base: "2",
        md: "4",
        lg: "12",
      }}
    >
      <GridItem
        colSpan={{
          base: 8,
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          mr="2"
          border="4px solid #E2E8F0"
          size={{
            base: "xl",
            md: "2xl",
          }}
          src="https://media.discordapp.net/attachments/912367384118063156/1009803419638312990/unknown.png?width=334&height=408"
        />

        <Text textAlign="end">
          In search of knowledge, love for computer science, spirit of
          sacrifice, empathy is the key, creativity, these are some of the key
          points I follow, others will come, some will be improved, my whole
          approach to life seems to have evolved since I started programming.
        </Text>
      </GridItem>

      <GridItem colSpan={8} pt="3">
        <SimpleGrid columns={3} gap="1">
          <GridItem colSpan={3}>
            <Button w="100%" variant="solid">
              <a href="tel:+393534343018">Hire me now</a>
            </Button>
          </GridItem>
          <GridItem colSpan={3}>
            <Text
              w="100%"
              textAlign="center"
              userSelect="none"
              fontWeight={200}
              fontSize={13}
            >
              {" "}
              or contact me over
            </Text>
          </GridItem>
          <GridItem colSpan={1}>
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/luca-perullo/"
              target="_blank"
              w="100%"
              icon={<FaLinkedinIn />}
              colorScheme="linkedin"
              aria-label="linkedin"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <IconButton
              as="a"
              href="https://github.com/lucaperullo"
              target="_blank"
              w="100%"
              colorScheme="gray"
              aria-label="github"
              icon={<SiGithub />}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <IconButton
              as="a"
              href="https://wa.me/393534343018"
              target="_blank"
              w="100%"
              colorScheme="whatsapp"
              aria-label="whatsapp"
              icon={<ImWhatsapp />}
            />
          </GridItem>
          <GridItem colSpan={3}>
            <Text
              w="100%"
              textAlign="center"
              userSelect="none"
              fontWeight={200}
              fontSize={13}
            >
              you can also
            </Text>
          </GridItem>
          <GridItem colSpan={3}>
            <Button as="a" download colorScheme="pink" w="100%" href="/CV.pdf">
              Download CV
            </Button>
          </GridItem>
        </SimpleGrid>
      </GridItem>
    </SimpleGrid>
  );
}
