import  { useState } from 'react';
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
const levelArrays = [
  {
    levelName: "Bronze",
    levelImage: "bronze.webp",
    amount: "0 / 1 000",
  },
  {
    levelName: "Silver",
    levelImage: "silver.webp",
    amount: "50 000",
  },
  {
    levelName: "Gold",
    levelImage: "gold.webp",
    amount: "500 000",
  },
  {
    levelName: "Platinum",
    levelImage: "platinum.webp",
    amount: "1 000 000",
  },
  {
    levelName: "Diamond",
    levelImage: "diamond.webp",
    amount: "2 500 000",
  },
  {
    levelName: "Master",
    levelImage: "master.webp",
    amount: "5 000 000",
  },
];




export default function Levels() {
    const [currentLevel, setCurrentLevel] = useState(0);

    // Function to go to the next slide
const nextLevel = () => {
    if (currentLevel < levelArrays.length - 1) {
      setCurrentLevel((prev) => prev + 1);
    }
  };
  
  // Function to go to the previous slide
  const prevLevel = () => {
    if (currentLevel > 0) {
      setCurrentLevel((prev) => prev - 1);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgColor={"black"}
      width={"100vw"}
      minHeight={"100vh"}
      alignItems={"center"}
      textColor={"white"}
      overflow={"hidden"}
    >
      <Flex
        width={"100%"}
        minHeight={"100%"}
        bgColor={"#0a0a0a"}
        flexDirection={"column"}
        alignItems={"center"}
        pt={3}
        gap={5}
        pb={32}
        transition="transform 0.5s ease"
        transform={`translateX(-${currentLevel * 100}%)`}
      >
        {levelArrays.map((level) => (
        <Box
          width={"90%"}
          mt={5}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
          position={"relative"}
        >
                
          <Text fontSize={"22px"} fontWeight={600}>
            {level.levelName}
          </Text>

          <Text
            width={"90%"}
            textAlign={"center"}
            color={"#c6c6c6"}
            fontSize={"15px"}
          >
            Your number of shares determines the league you enter
          </Text>

          <Image src={level.levelImage} w={"200px"} h={"200px"} mt={7} />

          <Text
            width={"100%"}
            alignItems={"center"}
            display={"flex"}
            gap={1}
            fontSize={"16px"}
            color={"#c6c6c6"}
            justifyContent={"center"}
            p={"32px 20px 10px"}
          >
            From
            <Text>{level.amount}</Text>
          </Text>

        </Box>
            ))}
      </Flex>
      <NavigationBar />
    </Box>
  );
}
