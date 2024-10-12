import { Box, Flex, Text, Image, Button, Icon } from "@chakra-ui/react";
import "../index.css";
import { FaYoutube } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
export default function Videos() {
  const SocialTasks = [
    {
      name: "Watch How to Play",
      amount: "20 000",
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
      {SocialTasks.map((social) => {
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
                  <Icon as={FaYoutube} boxSize={10} color={"red"} />
                </Box>
                <Box>
                  <Text
                    fontSize={"18px"}
                    color={"white"}
                    textAlign={"left"}
                    fontWeight={800}
                  >
                    {social.name}
                  </Text>
                  <Text
                    fontSize={"16px"}
                    fontWeight={800}
                    textAlign={"left"}
                    color={"white"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Icon
                      as={FaCircle}
                      color={"rgb(199 125 60)"}
                      boxSize={3}
                      mt={1}
                    />
                    +{social.amount}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex
              alignSelf={"flex-end"}
              alignItems={"center"}
              borderRadius={"20px"}
              w={"100%"}
              justifyContent={"space-between"}
            >
              <Button
                w={"30%"}
                h={"50px"}
                fontSize={"18px"}
                fontWeight={800}
                borderRadius={"10px"}
                bg={"#505050"}
                color={"#fcfcfc"}
              >
                Perform
              </Button>
              <Button
                w={"30%"}
                h={"50px"}
                fontSize={"18px"}
                fontWeight={800}
                borderRadius={"10px"}
                bg={"#1b1b1b"}
                color={"#7f7f7f"}
              >
                Verify
              </Button>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
