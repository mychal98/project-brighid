import React, { Component, useState } from "react";
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
  Popover,
  FormControl,
  Input,
  TextArea,
} from "native-base";

interface AppState {
  obs_arr: obs_entry[];
}

export interface obs_entry {
  title: string;
  desc: string;
  occur_cnt: number;
}

export default class App extends Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      // obs_ranking : title, description, number of occurrences today
      obs_arr: []
    }
    this.state.obs_arr.push({ title: "Obsession 1", desc: "This obsession involves thinking about....", occur_cnt: 18 });
    this.state.obs_arr.push({ title: "Obsession 2", desc: "This obsession involves thinking about....", occur_cnt: 5 });
    this.state.obs_arr.push({ title: "Obsession 3", desc: "This obsession involves thinking about....", occur_cnt: 1 });
    this.state.obs_arr.push({ title: "Obsession 4", desc: "This obsession involves thinking about....", occur_cnt: 1 });
    this.state.obs_arr.push({ title: "Obsession 5", desc: "This obsession involves thinking about....", occur_cnt: 1 });
    this.state.obs_arr.push({ title: "Obsession 6", desc: "This obsession involves thinking about....", occur_cnt: 1 });
    this.state.obs_arr.push({ title: "Obsession 7", desc: "This obsession involves thinking about....", occur_cnt: 1 });
    this.state.obs_arr.push({ title: "Obsession 8", desc: "This obsession involves thinking about....", occur_cnt: 1 });
    this.state.obs_arr.push({ title: "Obsession 9", desc: "This obsession involves thinking about....", occur_cnt: 1 });
    this.state.obs_arr.push({ title: "Obsession 10", desc: "This obsession involves thinking about....", occur_cnt: 1 });
  }

  swapEntries = (index: number, up: boolean): any => {
    let otherIdx: number = up ? index - 1 : index + 1;
    let otherEntry: obs_entry = this.state.obs_arr[otherIdx];
    let new_obs_arr: obs_entry[] = this.state.obs_arr;

    new_obs_arr[otherIdx] = new_obs_arr[index];
    new_obs_arr[index] = otherEntry;
    return new_obs_arr;
  }

  createUpDownButtons = (index: number, length: number): any => {
    let result = [];
    if (index > 0) {
      result.push(
        <Button key="swap_up" size="md" variant="ghost" colorScheme="white" onPress={() => this.setState({ obs_arr: this.swapEntries(index, true) })}>
          <ChevronUpIcon />
        </Button>
      );
    }

    if (index < length - 1) {
      result.push(
        <Button key="swap_down" size="md" variant="ghost" colorScheme="white" onPress={() => this.setState({ obs_arr: this.swapEntries(index, false) })}>
          <ChevronDownIcon />
        </Button>
      );
    }

    return result;
  }

  updateCount = (index: number, increase: boolean): any => {
    let new_obs_arr: obs_entry[] = this.state.obs_arr;
    let target_entry_data: obs_entry = new_obs_arr[index];
    target_entry_data.occur_cnt = increase ? target_entry_data.occur_cnt + 1 : target_entry_data.occur_cnt - 1;
    target_entry_data.occur_cnt = target_entry_data.occur_cnt < 0 ? 0 : target_entry_data.occur_cnt;
    new_obs_arr[index] = target_entry_data;

    return new_obs_arr;
  }

  removeEntry = (index: number): any => {
    let new_obs_arr: obs_entry[] = this.state.obs_arr;
    new_obs_arr.splice(index, 1);
    return new_obs_arr;
  }

  render() {
    const theme = extendTheme({
      config: {
        // Changing initialColorMode to 'dark'
        initialColorMode: 'dark',
      },
    });

    let entries = [];

    for (let i = 0; i < this.state.obs_arr.length; i++) {
      let entry_data = this.state.obs_arr[i];
      entries.push(
        <Container key={i} alignItems="center" bg={"emerald." + (900 - (i * 100) >= 600 ? 900 - (i * 100) : 600)} rounded="md" shadow={3} p={6}>
          <HStack space={5}>
            <VStack space={3} alignItems="start">
              <Heading size="md">
                {entry_data.title}
              </Heading>
              <Text fontWeight={600}>
                {entry_data.desc}
              </Text>
              <HStack space={5} alignItems="center">
                <Heading size="sm">
                  Ocurrences today: {entry_data.occur_cnt}
                </Heading>
                <HStack space={1} alignItems="center">
                  <Button size="md" variant="ghost" colorScheme="white" onPress={() => this.setState({ obs_arr: this.updateCount(i, true) })}>
                    <AddIcon />
                  </Button>
                  <Button size="md" variant="ghost" colorScheme="white" onPress={() => this.setState({ obs_arr: this.updateCount(i, false) })}>
                    <MinusIcon />
                  </Button>
                  <Button size="md" variant="ghost" colorScheme="white" onPress={() => this.setState({ obs_arr: this.removeEntry(i) })}>
                    <CloseIcon />
                  </Button>
                </HStack>
              </HStack>
            </VStack>
            <VStack space={6}>
              {this.createUpDownButtons(i, this.state.obs_arr.length)}
            </VStack>
          </HStack>
        </Container>
      );
    }

    return (
      <NativeBaseProvider theme={theme}>
        <Greetings />
        <VStack m={9} space={4} alignItems="center">
          {entries}
        </VStack>
      </NativeBaseProvider>
    );
  }
}

function Greetings() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitle = (text: React.SetStateAction<string>) => {
    setTitle(text);
  };

  const handleDesc = (text: React.SetStateAction<string>) => {
    setDesc(text);
  };

  const handleClear = () => {
    setTitle("");
    setDesc("");
  }

  const handleSave = () => {
    setIsOpen(false);
  }

  return (
    <Center>
      <Container bg="emerald.50" m={5} p={7}>
        <HStack space={200}>
          <Heading color="emerald.500">
            Hello Bob!
          </Heading>

          <Box alignItems="center">
            <Popover trigger={triggerProps => {
              return (
                <Button {...triggerProps} size="lg" variant="outline" colorScheme="white" onPress={() => setIsOpen(true)}>
                  <Heading size="sm" color="emerald.500">
                    Add Obsession Entry
                  </Heading>
                </Button>
              );
            }} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
              <Popover.Content width="56">
                <Popover.Arrow />
                <Popover.CloseButton onPress={() => setIsOpen(false)} />
                {
                  /* @ts-ignore */
                }
                <Popover.Header>Add Obsession Entry</Popover.Header>
                <Popover.Body>
                  <FormControl>
                    <FormControl.Label _text={{
                      fontSize: "xs",
                      fontWeight: "medium"
                    }}>
                      Obsession Name/Title
                    </FormControl.Label>
                    <Input value={title} rounded="sm" fontSize="xs" onChangeText={handleTitle}/>
                  </FormControl>
                  <FormControl mt="3">
                    <FormControl.Label _text={{
                      fontSize: "xs",
                      fontWeight: "medium"
                    }}>
                      Obsession and Compulsion Description
                    </FormControl.Label>
                    <TextArea value={desc} h={20} placeholder="What this obsession is about?
                     What compulsions and rituals do you use to respond/cope?" w="100%" maxW="300" onChangeText={handleDesc}/>
                  </FormControl>
                </Popover.Body>
                <Popover.Footer>
                  <Button.Group>
                    <Button colorScheme="coolGray" variant="ghost" onPress={handleClear}>
                      Clear
                    </Button>
                    <Button onPress={handleSave}>Save</Button>
                  </Button.Group>
                </Popover.Footer>
              </Popover.Content>
            </Popover>
          </Box>
        </HStack>
        <Text color="emerald.500" mt="3" fontWeight="medium">
          Try ranking your obsessions and counting the number of times they've occurred today!
        </Text>
      </Container>
    </Center>
  );
}
