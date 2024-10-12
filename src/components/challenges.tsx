import { Box, Flex, Text, Image, Button, Icon } from "@chakra-ui/react";
import "../index.css";
import { FaCircle } from "react-icons/fa";
export default function Challenges() {
  const ChallengeList = [
    {
      image: "/gold.webp",
      name: "Gold",
      amount: "250 000",
      progress: "70",
    },
    {
      image: "/platinum.webp",
      name: "Platinum",
      amount: "500 000",
      progress: "45",
    },
    {
      image: "/diamond.webp",
      name: "Diamond",
      amount: "1 000 000",
      progress: "25",
    },
    {
      image: "/master.webp",
      name: "Master",
      amount: "2 500 000",
      progress: "10",
    },
  ];

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      mt={5}
      flexDirection={"column"}
      gap={5}
    >
      {ChallengeList.map((challenge) => {
        return (
          <Flex
            width={"100%"}
            flexDirection={"column"}
            //   h={"70px"}
            borderRadius={"20px"}
            alignItems={"center"}
            p={"20px 10px"}
            bg={"rgb(47 47 47)"}
            gap={4}
          >
            <Box
              display={"flex"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Flex alignItems={"center"} gap={3}>
                <Box
                  w={"60px"}
                  h={"60px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image src={challenge.image} borderRadius={"10px"} />
                </Box>
                <Box>
                  <Text fontSize={"18px"} color={"white"}
                  textAlign={'left'} fontWeight={800}>{challenge.name}
                  </Text>
                  <Text
                    fontSize={"16px"}
                    fontWeight={800}
                    textAlign={"left"}
                    color={"white"}
                    display={'flex'}
                    alignItems={'center'}
                    gap={2}
                  >
                    <Icon as={FaCircle} color={'rgb(199 125 60)'} boxSize={3} mt={1}/>
                    {challenge.amount}
                  </Text>
                </Box>
              </Flex>

              <Button
                w={"30%"}
                h={"50px"}
                fontSize={'22px'}
                fontWeight={800}
                borderRadius={'10px'}
                bg={"rgb(33 33 33)"}
                color={"rgb(129 129 129)"}
              >
                Claim
              </Button>
            </Box>
            <Flex alignItems={"center"} borderRadius={"20px"} w={"100%"}>
              <Box
                className="w-full h-2  rounded-full flex"
                bg={"rgb(29 29 29)"}
                p={"7px 3px"}
                justifyContent={"left"}
                alignItems={"center"}
              >
                <Box
                  className=" h-2 rounded-full"
                  bg={"rgb(190 128 47)"}
                  style={{ width: `${challenge.progress}%` }}
                ></Box>
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
