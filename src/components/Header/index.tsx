import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      maxWidth={1240}
      p="7"
      align="center"
      justify="center"
      mx="auto"
    >
      <Image src="/Logo.svg" alt="Logo" width={184} height={45} />
    </Flex>
  );
}
