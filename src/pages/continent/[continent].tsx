import CityCard from "@/components/CityCard";
import Header from "@/components/Header";
import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const continents = [
  {
    id: 1,
    url: "europe",
    name: "Europa",
    banner: "/continentBanner/Europe.png",
    text: `A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais,
        o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste`,
    countries: 50,
    languages: 60,
    citiesPlus100: 27,
    cities: [
      {
        id: 1,
        city: "Londres",
        country: "Reino Unido",
        flag: "/flags/UK.svg",
        flagAlt: "Bandeira do Reino Unido",
        image: "/cities/London.png",
      },
      {
        id: 2,
        city: "Paris",
        country: "França",
        flag: "/flags/France.svg",
        flagAlt: "Bandeira da França",
        image: "/cities/Paris.png",
      },
      {
        id: 3,
        city: "Roma",
        country: "Itália",
        flag: "/flags/Italy.svg",
        flagAlt: "Bandeira da Itália",
        image: "/cities/Rome.png",
      },
      {
        id: 4,
        city: "Praga",
        country: "República Tcheca",
        flag: "/flags/Czech.svg",
        flagAlt: "Bandeira da República Tcheca",
        image: "/cities/Prague.png",
      },
      {
        id: 5,
        city: "Amsterdã",
        country: "Holanda",
        flag: "/flags/Netherlands.svg",
        flagAlt: "Bandeira da Holanda",
        image: "/cities/Amsterdam.png",
      },
    ],
  },
  {
    id: 2,
    url: "southAmerica",
    name: "América do Sul",
    banner: "/continents/SouthAmerica.jpg",
    text: `A América do Sul é um continente localizado no hemisfério sul,
        principalmente no hemisfério ocidental. É banhada pelo Oceano
        Atlântico a leste e faz fronteira com o Oceano Pacífico a oeste. Faz
        fronteira com a América Central e do Norte ao norte e com a
        Antártida ao sul. A Cordilheira dos Andes, a maior cordilheira do
        mundo, atravessa a América do Sul de norte a sul, passando por
        vários países. O continente tem uma rica diversidade cultural e
        natural, incluindo a Floresta Amazônica e as Montanhas dos Andes.`,
    countries: 12,
    languages: "400+",
    citiesPlus100: 3,
    cities: [
      {
        id: 1,
        city: "Buenos Aires",
        country: "Argentina",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2000px-Flag_of_Argentina.svg.png",
        flagAlt: "Bandeira da Argentina",
        image:
          "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 2,
        city: "Rio de Janeiro",
        country: "Brasil",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1920px-Flag_of_Brazil.svg.png",
        flagAlt: "Bandeira do Brasil",
        image: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e",
      },
      {
        id: 3,
        city: "Lima",
        country: "Peru",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1920px-Flag_of_Peru.svg.png",
        flagAlt: "Bandeira do Peru",
        image:
          "https://th.bing.com/th/id/R.40023826d8e97474c683c7ae7b26c7e7?rik=4Hxt4S6CAT0kXA&riu=http%3a%2f%2fwww.godsavethepoints.com%2fwp-content%2fuploads%2f2018%2f04%2flima2.jpg&ehk=GNgraiL%2fNRs3yqhSNVK0jGwJERYMFyd3jlpOQFTmoL8%3d&risl=&pid=ImgRaw&r=0",
      },
    ],
  },
  {
    id: 3,
    url: "northAmerica",
    name: "América do Norte",
    banner: "/continents/NorthAmerica.jpg",
    text: `A América do Norte é o terceiro maior continente do mundo, composto
        por 23 países, incluindo Estados Unidos, Canadá e México, além de
        diversas ilhas.`,
    countries: 23,
    languages: "300+",
    citiesPlus100: 21,
    cities: [
      {
        id: 1,
        city: "Nova York",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=406&q=80",
      },
      {
        id: 2,
        city: "Miami",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
      },
      {
        id: 3,
        city: "Las Vegas",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      },
      {
        id: 4,
        city: "Los Angeles",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 5,
        city: "Orlando",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1597466599360-3b9775841aec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      },
      {
        id: 6,
        city: "San Francisco",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1534050359320-02900022671e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      },
      {
        id: 7,
        city: "Chicago",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1597933534024-debb6104af15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 8,
        city: "Honolulu",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1628997342702-3716c14c958d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      },
      {
        id: 9,
        city: "Washington D.C.",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1583176689170-990094dcd953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      },
      {
        id: 10,
        city: "Boston",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1565127803082-69dd82351360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
      {
        id: 11,
        city: "Seattle",
        country: "Estados Unidos",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
        flagAlt: "Bandeira dos Estados Unidos",
        image:
          "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1426&q=80",
      },
      // {
      // id: "",
      //   city: "Atlanta",
      //   country: "Estados Unidos",
      //   flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
      //   flagAlt: "Bandeira dos Estados Unidos",
      //   image:
      //     "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // },
      // {
      // id: "",
      //   city: "New Orleans",
      //   country: "Estados Unidos",
      //   flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
      //   flagAlt: "Bandeira dos Estados Unidos",
      //   image:
      //     "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // },
      // {
      // id: "",
      //   city: "Houston",
      //   country: "Estados Unidos",
      //   flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
      //   flagAlt: "Bandeira dos Estados Unidos",
      //   image:
      //     "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // },
      // {
      // id: "",
      //   city: "San Diego",
      //   country: "Estados Unidos",
      //   flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
      //   flagAlt: "Bandeira dos Estados Unidos",
      //   image:
      //     "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // },
      // {
      // id: "",
      //   city: "Philadelphia",
      //   country: "Estados Unidos",
      //   flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
      //   flagAlt: "Bandeira dos Estados Unidos",
      //   image:
      //     "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // },
      // {
      // id: "",
      //   city: "Denver",
      //   country: "Estados Unidos",
      //   flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2000px-Flag_of_the_United_States.svg.png",
      //   flagAlt: "Bandeira dos Estados Unidos",
      //   image:
      //     "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      // },
      {
        id: 12,
        city: "Cancún",
        country: "México",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2000px-Flag_of_Mexico.svg.png",
        flagAlt: "Bandeira do México",
        image:
          "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
      },
      {
        id: 13,
        city: "Cidade do México",
        country: "México",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2000px-Flag_of_Mexico.svg.png",
        flagAlt: "Bandeira do México",
        image:
          "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 14,
        city: "Playa del Carmen",
        country: "México",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2000px-Flag_of_Mexico.svg.png",
        flagAlt: "Bandeira do México",
        image:
          "https://images.unsplash.com/photo-1620095198790-2f663d67677d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ],
  },
];

export enum Continent {
  europe = "europe",
  southAmerica = "southAmerica",
  northAmerica = "northAmerica",
}

export default function Europa() {
  const { query } = useRouter();
  const { continent } = query as { continent: Continent };

  const continentData = continents.find(
    (continentData) => continentData.url === continent
  );

  if (!continentData) {
    return <Header goBack />;
  }

  return (
    <>
      <Header goBack />

      <AspectRatio maxW="100%" ratio={2.88}>
        <Box
          w="100%"
          position="relative"
          backgroundImage={`url("${continentData.banner}")`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
        >
          <Text
            color="light.text"
            fontWeight={600}
            fontSize={["2xl", "5xl"]}
            lineHeight={["2xl", "72px"]}
            position={["relative", "absolute"]}
            bottom={["0", "10%"]}
            left={["0", "10%"]}
            mx={["auto", "unset"]}
          >
            {continentData.name}
          </Text>
        </Box>
      </AspectRatio>

      <Box maxWidth={1240} mx="auto" mt={["24px", "80px"]} px="4">
        <Stack
          justifyContent="space-between"
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            base: "center",
            lg: "flex-start",
          }}
          spacing={{
            base: "16px",
            lg: "0",
          }}
        >
          <Text
            fontWeight={400}
            fontSize={["14px", "2xl"]}
            lineHeight="36px"
            color="dark.text"
            w={["auto", "400px"]}
            textAlign="justify"
          >
            {continentData.text}
          </Text>

          <Flex align="flex-end">
            <HStack spacing={["4", "10"]}>
              <Stack align="center">
                <Text
                  fontWeight={600}
                  fontSize={["2xl", "5xl"]}
                  lineHeight={["30px", "72px"]}
                  color="highlight.main"
                >
                  {continentData.countries}
                </Text>
                <Text
                  fontWeight={600}
                  fontSize={["18px", "2xl"]}
                  lineHeight={["27px", "36px"]}
                  color="dark.text"
                >
                  países
                </Text>
              </Stack>
              <Stack align="center">
                <Text
                  fontWeight={600}
                  fontSize={["2xl", "5xl"]}
                  lineHeight={["30px", "72px"]}
                  color="highlight.main"
                >
                  {continentData.languages}
                </Text>
                <Text
                  fontWeight={600}
                  fontSize={["18px", "2xl"]}
                  lineHeight={["27px", "36px"]}
                  color="dark.text"
                >
                  línguas
                </Text>
              </Stack>
              <Stack align="center">
                <Text
                  fontWeight={600}
                  fontSize={["2xl", "5xl"]}
                  lineHeight={["30px", "72px"]}
                  color="highlight.main"
                >
                  {continentData.citiesPlus100}
                </Text>
                <Text
                  fontWeight={600}
                  fontSize={["18px", "2xl"]}
                  lineHeight={["27px", "36px"]}
                  color="dark.text"
                  textAlign="center"
                >
                  cidades +100
                </Text>
              </Stack>
            </HStack>

            <Tooltip
              label="As cidades +100 são as cidades que este continente possui que estão entre as 100 cidades mais visitadas do mundo. "
              aria-label="A tooltip"
            >
              <Image
                src="/Info.svg"
                alt="Informação"
                mb={["1", "2.5"]}
                ml="1"
              />
            </Tooltip>
          </Flex>
        </Stack>

        <Text
          fontWeight={600}
          fontSize={["2xl", "4xl"]}
          lineHeight="54px"
          color="dark.text"
          mt={["32px", "80px"]}
        >
          Cidades +100
        </Text>

        <SimpleGrid
          columns={[1, 2, 3, 4]}
          spacing="40px"
          mt={["20px", "40px"]}
          mb="35px"
        >
          {continentData.cities.map((city, index) => (
            <CityCard key={index} {...city} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
