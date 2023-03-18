import { Text, Flex, Image, Show, SimpleGrid, Box } from "@chakra-ui/react";

export default function Projects() {
  return (
    <SimpleGrid
      mt="8"
      columns={{
        base: 1,
        md: 2,
        lg: 3,
      }}
    >
      <Show below="md">
        <Text
          textAlign="center"
          fontSize={28}
          fontWeight="500"
          textTransform="uppercase"
        >
          Projects
        </Text>
      </Show>
      <Flex mb="2">
        <Box as="a" target="_blank" href="https://www.dut.pt/" w="99%">
          <Image
            onTouchStart={(e: any) => {
              e.target.src = "/assets/dutpt.webp";
            }}
            onMouseOver={(e: any) => {
              e.target.src = "/assets/dutpt.webp";
            }}
            onMouseLeave={(e: any) => {
              e.target.src =
                "https://media.discordapp.net/attachments/912367384118063156/1009884380069629953/unknown.png?width=1345&height=671";
            }}
            src="https://media.discordapp.net/attachments/912367384118063156/1009884380069629953/unknown.png?width=1345&height=671"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="99%"
            minW="99%"
            h="200px"
            cursor="pointer"
          />
        </Box>
      </Flex>
      <Flex mb="2">
        <Box
          as="a"
          target="_blank"
          href="https://quizgame-eight.vercel.app/"
          w="99%"
        >
          <Image
            onTouchStart={(e: any) => {
              e.target.src = "/assets/game.webp";
            }}
            onMouseOver={(e: any) => {
              e.target.src = "/assets/game.webp";
            }}
            onMouseLeave={(e: any) => {
              e.target.src =
                "https://media.discordapp.net/attachments/912367384118063156/1009893933893029958/unknown.png?width=1345&height=671";
            }}
            src="https://media.discordapp.net/attachments/912367384118063156/1009893933893029958/unknown.png?width=1345&height=671"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="99%"
            minW="99%"
            h="200px"
            cursor="pointer"
          />
        </Box>
      </Flex>
      <Flex mb="2">
        <Box as="a" target="_blank" href="https://ourmusic.vercel.app/" w="99%">
          <Image
            onTouchStart={(e: any) => {
              e.target.src = "/assets/game.webp";
            }}
            onMouseOver={(e: any) => {
              e.target.src = "/assets/game.webp";
            }}
            onMouseLeave={(e: any) => {
              e.target.src =
                "https://media.discordapp.net/attachments/912367384118063156/1009894789786902569/unknown.png?width=1341&height=670";
            }}
            src="https://media.discordapp.net/attachments/912367384118063156/1009894789786902569/unknown.png?width=1341&height=670"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w="99%"
            minW="99%"
            h="200px"
            cursor="pointer"
          />
        </Box>
      </Flex>
    </SimpleGrid>
  );
}
