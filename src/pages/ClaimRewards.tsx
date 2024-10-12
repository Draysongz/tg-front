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
import { MdGroups2 } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Reward from "../components/refRewards";
import Challenges from "../components/challenges";
export default function Claim() {
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
          alignItems={"center"}
        >
          <Link to={"/level"}>
            <Flex alignItems={"center"} gap={2}>
              <Image src="/gold.webp" w={"15px"} />
              <Text
                color={"#c7b292"}
                fontSize={"15px"}
                display={"flex"}
                alignItems={"center"}
              >
                Gold
                <Icon as={FaAngleRight} />
              </Text>
            </Flex>
          </Link>

          <Flex
            border={"1px solid rgb(112, 112, 112)"}
            p={"2px 10px"}
            borderRadius={"15px"}
            alignItems={"center"}
            gap={3}
            width={"auto"}
          >
            <Image src="/sunflower.webp" w={"15px"} />
            <Text> 440 011 </Text>
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
              h={"60px"}
              alignItems={"center"}
              borderRadius={"12px"}
              p={"5px"}
              position={"relative"}
              zIndex={1}
              mb={"30px"}
              justifyContent={'space-between'}
            >
              <Tab
                color={"#fff"}
                fontWeight={700}
                width={"45%"}
                height={"90%"}
                gap={2}
                fontSize={{ base: "12px", sm: "16px" }}
                _selected={{
                  bg: "#a4a4a433",
                  outline: "none",
                  borderRadius: "5px",
                }}
              >
                <Icon as={MdGroups2} />
                Ref rewards
              </Tab>

              <Tab
                color={"#fff"}
                fontWeight={700}
                width={"45%"}
                height={"90%"}
                gap={2}
                fontSize={{ base: "12px", sm: "16px" }}
                _selected={{
                  bg: "#a4a4a433",
                  outline: "none",
                  borderRadius: "5px",
                }}
              >
                <Icon as={FaBoxes} />
                Challenges
              </Tab>
            </TabList>
            <Box
              position={"relative"}
              w={"100%"}
              flexGrow={1}
              overflow={"hidden"}
              height={"100%"}
              mt={"-20px"}
              pb={"20px"}
            >
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
                pb={36}
                css={{
                  "&::-webkit-scrollbar": {
                    display:
                      "none" /* Hide scrollbar for Chrome, Safari, and newer Edge */,
                  },
                  "-ms-overflow-style":
                    "none" /* Hide scrollbar for Internet Explorer and Edge */,
                  "scrollbar-width": "none" /* Hide scrollbar for Firefox */,
                }}
              >
                <TabPanels>
                  <TabPanel p={0}>
                    <Reward />
                  </TabPanel>
                  <TabPanel p={0}>
                    <Challenges />
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
}
