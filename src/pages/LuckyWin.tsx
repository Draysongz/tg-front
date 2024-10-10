import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Image, Icon } from "@chakra-ui/react";
import Hamster from "../icons/Hamster";
import {
  dollarCoin,
} from "../images";
import Info from "../icons/Info";
import { IoSettingsSharp } from "react-icons/io5"
import "../index.css";
import { Link } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import SpinRoulette from "../components/SpinRoulette";

const LuckyWin: React.FC = () => {
  const levelNames = [
    "Bronze", // From 0 to 4999 coins
    "Silver", // From 5000 coins to 24,999 coins
    "Gold", // From 25,000 coins to 99,999 coins
    "Platinum", // From 100,000 coins to 999,999 coins
    "Diamond", // From 1,000,000 coins to 2,000,000 coins
    "Epic", // From 2,000,000 coins to 10,000,000 coins
    "Legendary", // From 10,000,000 coins to 50,000,000 coins
    "Master", // From 50,000,000 coins to 100,000,000 coins
    "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
    "Lord", // From 1,000,000,000 coins to ∞
  ];

  const levelMinPoints = [
    0, // Bronze
    5000, // Silver
    25000, // Gold
    100000, // Platinum
    1000000, // Diamond
    2000000, // Epic
    10000000, // Legendary
    50000000, // Master
    100000000, // GrandMaster
    1000000000, // Lord
  ];

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(0);
  
  const profitPerHour = 126420;




  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress =
      ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);

  const formatProfitPerHour = (profit: number) => {
    if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
    if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
    if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
    return `+${profit}`;
  };

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints((prevPoints) => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [profitPerHour]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgColor={"black"}
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      textColor={"white"}
      overflow={"hidden"}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        bgColor={"black"}
        flexDirection={"column"}
        pt={3}
        gap={5}
      >
        <Box display={"flex"} flexDirection={"column"} gap={1} p={"0px 15px"}>
          <Flex gap={3} alignItems={'center'}>
            <Hamster size={20}/>
            <Text fontSize={{base: "12px", sm: "16px"}}>Habibilord CEO </Text>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box display={"flex"} flexDirection={"column"} gap={1} w={'25%'}>
              <Flex gap={2} alignItems={"center"}>
                <Text fontWeight={"600"} fontSize={{base: "12px", sm: "16px"}}>
                    <Link to={'/level'}>
                    {levelNames[levelIndex]}
                    </Link>
                    </Text>
                <Text display={"flex"} fontWeight={"600"} gap={1} fontSize={{base: "12px", sm: "16px"}}>
                  {levelIndex + 1}
                  <Text display={"flex"} color={"#95908a"} gap={1} fontSize={{base: "12px", sm: "16px"}}>
                    /<Text>{levelNames.length}</Text>
                  </Text>
                </Text>
              </Flex>
              <Flex
                border={"4px solid #43433b"}
                alignItems={"center"}
                borderRadius={"20px"}
              >
                <Box className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                  <Box
                    className="progress-gradient h-2 rounded-full"
                    style={{ width: `${calculateProgress()}%` }}
                  ></Box>
                </Box>
              </Flex>
            </Box>
            <Box
              display={"flex"}
              w={"60%"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              border={"2px solid #43433b"}
              borderRadius={"25px"}
              className="bg-[#43433b]/[0.6]"
              px={2}
            >
              <Image src="/coinConvert.svg" w={{ base: "20px", sm: "32px" }} />
              <Box h={"32px"} w={"2px"} bg={"#43433b"} mx={2}></Box>
              <Box alignItems={"center"} textAlign={"center"}>
                <Text color={"#85827d"} fontSize={"12px"}>
                  Profit per hour
                </Text>
                <Flex gap={2} alignItems={"center"} textAlign={'center'}>
                  <Image src={dollarCoin} w={"18px"} />
                  <Text fontSize={"14px"}>
                    {formatProfitPerHour(profitPerHour)}
                  </Text>
                  <Info size={16}  />
                </Flex>
              </Box>
              <Box h={"32px"} w={"2px"} bg={"#43433b"} mx={2}></Box>
              <Link to={'/settings'}>
                <Icon as={IoSettingsSharp} boxSize={'20px'} />
                </Link>
            </Box>
          </Flex>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          position={"relative"}
          bg={"#f3ba2f"}
          flexGrow={2}
          mt={4}
          width={"100vw"}
          borderTopRadius={"48px"}
          className="top-glow"
          zIndex={0}

        >
          <Box
            position={"absolute"}
            top={"7.5px"}
            left={0}
            right={0}
            bgImage={'url(/bg.webp)'}
            height={"100%"}
            p={"10px 0px"}
            borderTopRadius={"48px"}
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            gap={10}
            overflowY={"scroll"}
            pb={{base: 40, sm: 32}}
            >
            
            <Text fontSize={'20px'} color={'white'}>
                Lucky Spin & Win
            </Text>

            <SpinRoulette />

            
          </Box>
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
};

export default LuckyWin;
