import { Flex, IconButton, Image, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface HeaderProps {
  goBack?: boolean;
}

export default function Header({ goBack = false }: HeaderProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <Flex
      as="header"
      maxWidth={1240}
      py="7"
      px="4"
      align="center"
      justify={goBack ? "flex-start" : "center"}
      mx="auto"
      position="relative"
    >
      {goBack && (
        <IconButton
          aria-label="Open navigation"
          icon={<Image src="/LeftArrow.svg" alt="Voltar" />}
          onClick={handleGoBack}
        />
      )}
      {goBack ? (
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={184}
          height={45}
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
        />
      ) : (
        <Image src="/Logo.svg" alt="Logo" width={184} height={45} />
      )}
    </Flex>
  );
}
