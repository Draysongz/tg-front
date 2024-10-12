import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import '../index.css'
export default function Reward() {
      const RewardList = [
        {
          name: " 3 ",
          amount: "50 000",
          progress: "50",
        },
        {
          name: " 5 ",
          amount: "150K",
          progress: "20",
        },
        {
          name: " 10 ",
          amount: "250K",
          progress: "10",
        },
        {
          name: " 25 ",
          amount: "500K",
          progress: "5",
        },
        {
          name: " 50 ",
          amount: "1M",
          progress: "1",
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
        {RewardList.map((reward) => {
          return (
            <Flex
              width={"100%"}
              flexDirection={"column"}
              //   h={"70px"}
              borderRadius={"10px"}
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
                <Flex alignItems={"center"} gap={2}>
                  <Box
                    w={"60px"}
                    h={"60px"}
                    bg={"#a4a4a433"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image src="/frens2.webp" borderRadius={"10px"} />
                  </Box>
                  <Box>
                    <Text fontSize={"18px"} color={"white"} fontWeight={800}>
                      Invite{reward.name}friends
                    </Text>
                    <Text
                      fontSize={"16px"}
                      fontWeight={800}
                      textAlign={"left"}
                      color={"white"}
                    >
                      {reward.amount}
                    </Text>
                  </Box>
                </Flex>

                <Button
                  w={"30%"}
                  h={"50px"}
                  fontSize={"22px"}
                  fontWeight={800}
                  borderRadius={"10px"}
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
                    style={{ width: `${reward.progress}%` }}
                  ></Box>
                </Box>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    );
}