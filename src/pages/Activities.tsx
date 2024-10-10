import React from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaAngleRight } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { GoVideo } from "react-icons/go";
import { MdGroups2 } from "react-icons/md";
import Friends from "./Referrals";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const Activities: React.FC = () => {
  const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  `;
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
        <Box
          display={"flex"}
          px={4}
          justifyContent={"space-between"}
          width={"100%"}
          alignItems={'center'}
          
        >
        <Link to={"/daily"}>
          <Flex alignItems={"center"} gap={2}>
            <Box
              width="10px"
              height="10px"
              bg="rgb(34, 197, 94, 1)"
              borderRadius="50%"
              animation={`${blink} 1.5s infinite`}
              display="inline-block"
            />
            <Text color={"#c7b292"} fontSize={"15px"} display={'flex'} alignItems={'center'}>
              Daily Checkin
              <Icon as={FaAngleRight} />
            </Text>
          </Flex>
        </Link>

          <Flex
            border={"1px solid rgb(112, 112, 112)"}
            p={"2px 10px"}
            borderRadius={"15px"}
            alignItems={"center"}
            gap={1}
            width={"54px"}
          >
            <Image src="/sunflower.webp" w={"15px"} />
            <Text> 0 </Text>
          </Flex>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          w={"100%"}
          justifyContent={"center"}
        >
          <Tabs
            variant={"unstyled"}
            w={"90%"}
            align="center"
            display={"flex"}
            flexDirection={"column"}
          >
            <TabList
              border={"1px solid #46464674"}
              h={"60px"}
              alignItems={"center"}
              borderRadius={"12px"}
              p={"5px"}
              position={'relative'}
              zIndex={1}
              mb={"30px"}
            >
              <Tab
                color={"#fff"}
                fontWeight={700}
                width={"32%"}
                height={"90%"}
                gap={2}
                fontSize={{ base: '12px', sm: '16px'}}
                _selected={{
                  bg: "#a4a4a433",
                  outline: "none",
                  borderRadius: "5px",
                }}
              >
                <Icon as={HiClipboardDocumentList}/>
                Tasks
              </Tab>
              <Tab
                color={"#fff"}
                fontWeight={700}
                width={"32%"}
                height={"90%"}
                gap={2}
                fontSize={{ base: '12px', sm: '16px'}}
                _selected={{
                  bg: "#a4a4a433",
                  outline: "none",
                  borderRadius: "5px",
                }}
              >
                <Icon as={GoVideo}/>
                Videos
            <Box
              width={{base: "5px", sm:"7px"}}
              height={{base: "5px", sm:"7px"}}
              bg="rgb(239, 68, 68)"
              borderRadius="50%"
              animation={`${blink} 1.5s infinite`}
              display="inline-block"
              mt={-6}
            />
              </Tab>
              <Tab
              color={"#fff"}
              fontWeight={700}
              width={"32%"}
              height={"90%"}
              gap={2}
              fontSize={{ base: '12px', sm: '16px'}}
              _selected={{
                bg: "#a4a4a433",
                outline: "none",
                borderRadius: "5px",
              }}>
                <Icon as={MdGroups2}/>
                Referrals
              </Tab>
            </TabList>
            <Box
            position={"relative"}
            w={"100%"}
            flexGrow={1}
            overflow={"hidden"}
            height={"100%"}
            mt={'-20px'}
            pb={'20px'}>
                <Box
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                height={"30px"}
                zIndex={1}
                />
                <Box
                position={"relative"}
                flexGrow={1}
                overflowY={"auto"} // Allow scrolling
                height={"calc(100vh - 160px)"}
                zIndex={0}
                width={"100%"}
                pb={36}>

            <TabPanels>
              <TabPanel p={0}>
                <Flex
                flexDirection={'column'}
                width={'100%'}
                textAlign={'left'}>
                    <Text fontSize={'24px'} fontWeight={800}>
                        Social Tasks
                    </Text>
                    <Text color={"#c6c6c6"}>
                        Perform social tasks to earn more  Maxtap tokens and stay updated!
                    </Text>
                </Flex>
              </TabPanel>
              <TabPanel p={0}>
              <Flex
                flexDirection={'column'}
                width={'100%'}
                textAlign={'left'}>
                    <Text fontSize={'24px'} fontWeight={800}>
                        Watch & Earn
                    </Text>
                    <Text color={"#c6c6c6"}>
                        Watch video ads and earn high token rewards Daily!
                    </Text>
                </Flex>
              </TabPanel>
              <TabPanel p={0}>
                <Friends />
              </TabPanel>
            </TabPanels>
                </Box>                
            </Box>
          </Tabs>
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
};

export default Activities;
