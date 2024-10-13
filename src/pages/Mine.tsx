import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Hamster from "../icons/Hamster";
import { dollarCoin } from "../images";
import Info from "../icons/Info";
import { IoSettingsSharp } from "react-icons/io5";
import "../index.css";
import NavigationBar from "../components/NavigationBar";
import Skills from "../components/skills";
import Business from "../components/business";
import Specials from "../components/specials";
import { Link } from "react-router-dom";
import userEventEmitter from "../utils/eventEmitter";

interface mineProps{
  userData: any
  token: any
}
const Mine: React.FC<mineProps> = ({userData, token}) => {
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

  const [levelIndex, setLevelIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [profitPerHour, setProfitPerHour] = useState(0)
  const [userDeets, setUserDeets] = useState<any>()


      useEffect(() => {
    const handleUserUpdate = (updatedUser: any) => {
      // Update the state with the latest user data
      console.log(updatedUser)
      setUserDeets(updatedUser);
      setProfitPerHour(updatedUser.profitPerHour)
      setPoints(updatedUser.coins)
      console.log("User data updated:", updatedUser);
    };

    // Listen for the 'userUpdated' event
    userEventEmitter.on("userUpdated", handleUserUpdate);

    // Clean up the event listener when the component is unmounted
    return () => {
      userEventEmitter.off("userUpdated", handleUserUpdate);
    };
  }, []);

  useEffect(()=>{
    if(userData){
    setUserDeets(userData);
    setProfitPerHour(userData.profitPerHour)
    }
  }, [userData])

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
          <Flex gap={3} alignItems={"center"}>
            <Hamster size={20} />
            <Text fontSize={{ base: "12px", sm: "16px" }}>{userDeets && `${userDeets.username} CEO`}  </Text>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Flex gap={2} alignItems={"center"}>
                <Text fontWeight={"600"}>{levelNames[levelIndex]}</Text>
                <Text display={"flex"} fontWeight={"600"} gap={1}>
                  {levelIndex + 1}
                  <Text display={"flex"} color={"#95908a"} gap={1}>
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
              <Link to={'/exchange'}> 
              <Image src="/coinConvert.svg" w={{ base: "20px", sm: "24px" }} />
              </Link>
              <Box h={"32px"} w={"2px"} bg={"#43433b"} mx={2}></Box>
              <Box alignItems={"center"} textAlign={"center"}>
                <Text color={"#85827d"} fontSize={"12px"}>
                  Profit per hour
                </Text>
                <Flex gap={2} alignItems={"center"}>
                  <Image src={dollarCoin} w={"18px"} />
                  <Text fontSize={"14px"}>
                    {formatProfitPerHour(profitPerHour)}
                  </Text>
                  <Info size={16} />
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
            w={"100%"}
            top={"7.5px"}
            left={0}
            right={0}
            bgImage={"url(/bg.webp)"}
            minHeight={"100vh"}
            p={"10px 0px"}
            borderTopRadius={"48px"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={10}
            pb={{ base: 40, sm: 32 }}
            
          >
            <Tabs
              variant="unstyled"
              align="center"
              w={"90%"}
              mt={5}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              
            >
              {/* TabList with spacing and z-index */}
              <TabList
                bgColor={"#46464674"}
                h={"60px"}
                alignItems={"center"}
                borderRadius={"12px"}
                p={"5px"}
                position={"relative"}
                zIndex={1} // Ensure TabList is above the TabPanels
                mb={"30px"} // Space between TabList and TabPanels
              >
                <Tab
                  color={"#fff"}
                  fontWeight={700}
                  width={"32%"}
                  height={"90%"}
                  _selected={{
                    bg: "#a4a4a433",
                    outline: "none",
                    borderRadius: "10px",
                  }}
                >
                  Skills
                </Tab>
                <Tab
                  color={"#fff"}
                  fontWeight={700}
                  width={"32%"}
                  height={"90%"}
                  _selected={{
                    bg: "#a4a4a433",
                    outline: "none",
                    borderRadius: "10px",
                  }}
                >
                  Business
                </Tab>
                <Tab
                  color={"#fff"}
                  fontWeight={700}
                  width={"32%"}
                  height={"90%"}
                  _selected={{
                    bg: "#a4a4a433",
                    outline: "none",
                    borderRadius: "10px",
                  }}
                >
                  Specials
                </Tab>
              </TabList>

              {/* Scrollable TabPanels container */}
              <Box
                position={"relative"}
                w={"100%"}
                flexGrow={1}
                overflow={"hidden"}
                height={"100%"} // Make sure it occupies full height
                mt={"-20px"} // To make TabPanels go under the TabList a little
                pb={"20px"} // Add some bottom padding for space
              >
                {/* Add a gradient to create fade effect */}
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  right={0}
                  height={"30px"}
                  zIndex={1} // Ensure gradient is above TabPanels
                />

                {/* TabPanels with larger height and scrolling */}
                <Box
                  position={"relative"}
                  flexGrow={1} // Ensures it takes up available space
                  overflowY={"auto"} // Allow scrolling
                  height={"calc(100vh - 160px)"}
                   // Adjust the height as needed to provide more space within scroll
                  zIndex={0}
                  width={"100%"}
                  pb={36}
                  css={{
                    '&::-webkit-scrollbar': {
                      display: 'none', /* Hide scrollbar for Chrome, Safari, and newer Edge */
                    },
                    '-ms-overflow-style': 'none', /* Hide scrollbar for Internet Explorer and Edge */
                    'scrollbar-width': 'none', /* Hide scrollbar for Firefox */
                  }}
                >
                  <TabPanels>
                    <TabPanel p={0}>
                      {/* Increase height here if you want more vertical space */}
                      <Box minHeight={"500px"}>
                        <Skills userData={userDeets} token={token} />
                      </Box>
                    </TabPanel>
                    <TabPanel p={0}>
                      {/* Content for Business */}
                      <Box minHeight={"500px"}>
                        <Business userData={userDeets} token={token}/>
                        {/* Adjust the minHeight for content */}
                        {/* Business Content */}
                      </Box>
                    </TabPanel>
                    <TabPanel p={0}>
                      {/* Content for Assets */}
                      <Box minHeight={"500px"}>
                        <Specials userData={userDeets} token={token}/>
                        {/* Adjust the minHeight for content */}
                        {/* Assets Content */}
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Box>
              </Box>
            </Tabs>
          </Box>
        </Box>
      </Flex>

      <NavigationBar />
    </Box>
  );
};

export default Mine;
