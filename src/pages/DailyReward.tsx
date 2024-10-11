import { Box, Flex, Image, Button, Text, Icon } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { RiLockFill } from "react-icons/ri";
import NavigationBar from "../components/NavigationBar";
import Subheader from "../components/Subheader";

const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  `;

const buttons = [
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#1d4ed8"}
    gap={2}
    color={"white"}
  >
    <Flex gap={2}>
      <Text fontSize={"12px"}>Day 1</Text>
      <Box
        width="5px"
        height="5px"
        bg="white"
        borderRadius="50%"
        animation={`${blink} 1.5s infinite`}
        display="inline-block"
        mr={'-10px'}
      />
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>500</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>1000</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>2500</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>5000</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>15000</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>25000</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>100000</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>500000</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>1.00M</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>5.00M</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>10.00M</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>15.00M</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>20.00M</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>25.00M</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#4b5563"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />

    <Text>35.00M</Text>
  </Button>,
  <Button
    height={"80px"}
    display={"flex"}
    flexDirection={"column"}
    bg={"#a4a4a433"}
    gap={2}
    color={"white"}
  >
    <Flex>
      <Icon as={RiLockFill} color={'#c7c7c7'}/>
    </Flex>

    <Image src="/coin.webp" w={"15px"} />
  </Button>,
];

export default function Daily() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgColor={"#0d0d0d"}
      width={"100vw"}
      minHeight={"100vh"}
      alignItems={"center"}
      textColor={"white"}
      overflow={"hidden"}
      fontFamily={"sans-serif"}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        bgColor={"black"}
        flexDirection={"column"}
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
        pb={32}
        
      >

        <Subheader />

        <Flex
          flexDirection={"column"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            display={"flex"}
            width={"90px"}
            height={"90px"}
            borderRadius={"50%"}
            bg={"#a4a4a433"}
            justifyContent={"center"}
            alignItems={"center"}
            mb={5}
          >
            <Image src="/calendar.svg" />
          </Box>

          <Text fontSize={"20px"} fontWeight={800}>
            Daily checkin rewards
          </Text>
          <Text
            color={"#bababa"}
            fontSize={"15px"}
            width={"343px"}
            textAlign={"center"}
          >
            Accrue SUNF tokens for logging into the game daily!
          </Text>
        </Flex>
        <Box
          width={"90%"}
          display={"grid"}
          gridTemplateColumns={"repeat(4, 1fr)"}
          gap={"10px"}
          justifyContent={"center"}
        >
            {buttons.map((button) => {
                return(
                    <>
                    {button}
                    </>
                );
            })}
        </Box>
      </Flex>

      <NavigationBar />
    </Box>
  );
}
