import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Box
      position="relative"
      h={{ base: 163, lg: 335 }}
      backgroundImage="url('/Background.png')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      py={{ base: "28px", lg: "80px" }}
    >
      {/* <Image
        src="/Background.png"
        w="100%"
        height={[163, 335]}
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
      /> */}

      <Flex maxWidth={1240} mx="auto" position="relative">
        <Stack
          align="flex-start"
          spacing={{ base: "2", lg: "5" }}
          px={{ base: "16px", lg: "10" }}
        >
          <Text
            color="light.text"
            fontSize={{ base: "20px", lg: "4xl" }}
            lineHeight={{ base: "30px", lg: "54px" }}
            w={{ base: 238, lg: 426 }}
            fontWeight={500}
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text
            color="light.info"
            fontSize={{ base: "14px", lg: "xl" }}
            lineHeight="21px"
            w={{ base: 333, lg: 524 }}
            fontWeight={400}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>

        <Image
          src="/Airplane.svg"
          position="absolute"
          //top="80px"
          right="0"
          w={417}
          h={270}
          transform="rotate(3deg)"
          display={{ base: "none", lg: "block" }}
        />
      </Flex>
    </Box>
  );
}
