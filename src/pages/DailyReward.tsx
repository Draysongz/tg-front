import { Box, Flex, Image, Button, Text, useToast } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import NavigationBar from "../components/NavigationBar";
import Subheader from "../components/Subheader";
import { useUserAPI } from "../hooks/useUserApi";
import { useEffect, useState } from "react";
import userEventEmitter from "../utils/eventEmitter";

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const rewardAmounts = [
  500, 1000, 2500, 5000, 15000, 25000, 100000, 500000, 1000000, 5000000,
  10000000, 15000000, 20000000, 25000000, 35000000,
];

// Utility function to format large numbers
const formatNumber = (num: number) => {
  if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

export default function Daily({ userData }: { userData: any }) {
  const [checkInStreak, setCheckInStreak] = useState(userData.checkInStreak || 0);
  const [userDeets, setUserDeets] = useState<any>();
  const { dailyCheckIn } = useUserAPI(userData.telegramId);
  const toast = useToast();

         useEffect(() => {
    const handleUserUpdate = (updatedUser: any) => {
      // Update the state with the latest user data
      console.log(updatedUser)
      setUserDeets(updatedUser);
      setCheckInStreak(updatedUser.checkInStreak)
      console.log("User data updated:", updatedUser);
    };

    // Listen for the 'userUpdated' event
    userEventEmitter.on("userUpdated", handleUserUpdate);

    // Clean up the event listener when the component is unmounted
    return () => {
      userEventEmitter.off("userUpdated", handleUserUpdate);
    };
  }, []);

  useEffect(() => {
    if (userData) {
      setUserDeets(userData);
    }
  }, [userData]);

  const handleCheckIn = async () => {
    console.log(userDeets)
    try {
      const result = await dailyCheckIn();
      console.log("streak reuslt", result)
      toast({
        title: "Check-in successful!",
        description: ``,
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    } catch (error: any) {
      console.log(error)
      toast({
        title: "Check-in failed",
        description: error.response?.data?.message || "Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const renderButtons = () => {
    return rewardAmounts.map((reward, index) => {
      const isToday = checkInStreak === index; // Button represents today's reward

      return (
        <Button
          key={index}
          height={"80px"}
          display={"flex"}
          flexDirection={"column"}
          bg={ isToday ? "#1d4ed8" : "#4b5563"  }
          gap={2}
          color={"white"}
          onClick={isToday ? handleCheckIn : undefined}
          isDisabled={!isToday}
        >
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"12px"}>Day {index + 1}</Text>
            {isToday && (
              <Box
                width="5px"
                height="5px"
                bg="white"
                borderRadius="50%"
                animation={`${blink} 1.5s infinite`}
                display="inline-block"
                mr={"-10px"}
              />
            )}
          </Flex>
          <Image src="/coin.webp" w={"15px"} />
          <Text>{formatNumber(reward)}</Text>
        </Button>
      );
    });
  };

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
        <Subheader userData={userData} />

        <Flex flexDirection={"column"} width={"100%"} alignItems={"center"} justifyContent={"center"}>
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
            Daily check-in rewards
          </Text>
          <Text color={"#bababa"} fontSize={"15px"} width={"343px"} textAlign={"center"}>
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
          {renderButtons()}
        </Box>
      </Flex>

      <NavigationBar />
    </Box>
  );
}
