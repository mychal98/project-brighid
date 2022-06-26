import React, { Component } from "react";
import {
  Text,
  Box,
  Center,
  Heading,
  NativeBaseProvider,
  extendTheme,
  VStack,
  HStack,
  Container,
  Button,
  AddIcon,
  MinusIcon,
  CloseIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "native-base";


export default class App extends Component {
  state = {
    obs_map: new Map<number, [string, string, number]>()
  }

  render() {
    const theme = extendTheme({
      config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'dark',
      },
    });

    return (
      <NativeBaseProvider theme={theme}>
        <Greetings />
        <Obs_List />
      </NativeBaseProvider>
    );
  }
}

function Greetings() {
  return (
    <Center>
      <Container bg="emerald.50" m={5} p={7}>
        <HStack space={200}>
          <Heading color="emerald.500">
            Hello Bob!
          </Heading>
          <Button size="lg" variant="outline" colorScheme="white">
            <Heading size="sm" color="emerald.500">
              Add Obsession Entry
            </Heading>
          </Button>
        </HStack>
        <Text color="emerald.500" mt="3" fontWeight="medium">
          Try ranking your obsessions and counting the number of times they've occurred today!
        </Text>
      </Container>
    </Center>
  );
}

function Obs_List() {
  return (
    <VStack m={9} space={4} alignItems="center">
      <Container key={1} alignItems="center" bg="emerald.900" rounded="md" shadow={3} p={6}>
        <HStack space={5}>
          <VStack space={3} alignItems="start">
            <Heading size="md">
              Obsession 1
            </Heading>
            <Text fontWeight={600}>
              This obsession involves thinking about....
            </Text>
            <HStack space={5} alignItems="center">
              <Heading size="sm">
                Ocurrences today: 1
              </Heading>
              <HStack space={1} alignItems="center">
                <Button size="md" variant="ghost" colorScheme="white">
                  <AddIcon />
                </Button>
                <Button size="md" variant="ghost" colorScheme="white">
                  <MinusIcon />
                </Button>
                <Button size="md" variant="ghost" colorScheme="white">
                  <CloseIcon />
                </Button>
              </HStack>
            </HStack>
          </VStack>
          <VStack space={6}>
            <Button size="md" variant="ghost" colorScheme="white">
              <ChevronUpIcon />
            </Button>
            <Button size="md" variant="ghost" colorScheme="white">
              <ChevronDownIcon />
            </Button>
          </VStack>
        </HStack>        
      </Container>
      <Center w="64" h="20" bg="emerald.800" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="emerald.700" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="emerald.600" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="emerald.400" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="emerald.300" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="emerald.200" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="emerald.100" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="emerald.100" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="emerald.100" rounded="md" shadow={3} />
    </VStack>
  );
}
