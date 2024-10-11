import { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

const skillsArray = [
  {
    name: "Patience",
    imagePath: "/patience.webp",
    pph: "100",
    cost: "1k",
    coinIcon: "/coin.webp",
    figure: '1 000',
    coin: "/coin.webp",
    note: "Develop the patience needed to navigate volatile markets, making informed decisions that lead to long-term trading success.",
    btn: "Insufficient balance",
  },
  {
    name: "Discipline",
    imagePath: "/discipline.webp",
    pph: "100",
    cost: "1k",
    coinIcon: "/coin.webp",
    figure: '1 000',
    coin: "/coin.webp",
    note: "Cultivate the discipline to stick to your trading strategy, minimizing risks and maximizing consistent returns over time.",
    btn: "Insufficient balance",
  },
  {
    name: "Adaptability",
    imagePath: "/adaptability.webp",
    pph: "240",
    cost: "Awareness lvl 1",
    coinIcon: "/coingrey.webp",
    figure: "2 000",
    coin: "/coin.webp",
    note: "Enhance your ability to adapt to market changes, ensuring your trading strategy remains effective in fluctuating conditions.",
    btn: "Unlock required level first"
  },
  {
    name: "Awareness",
    imagePath: "/awareness.webp",
    pph: "70",
    cost: "750",
    coinIcon: "/coin.webp",
    figure: "750",
    coin: "/coin.webp",
    note: "Increase your market awareness, enabling you to anticipate trends and make informed trading decisions with confidence.",
    btn: "Insufficient balance",
  },
  {
    name: "Technical Analysis",
    imagePath: "/analysis.webp",
    pph: "75",
    cost: "550",
    coinIcon: "/coin.webp",
    figure: "550",
    coin: "/coin.webp",
    note: "Master technical analysis to predict market movements and make data-driven trading decisions with greater precision.",
    btn: "Insufficient balance",
  },
  {
    name: "Networking",
    imagePath: "/networking.webp",
    pph: "90",
    cost: "T.Analysis lvl 2",
    coinIcon: "/coingrey.webp",
    figure: "1 000",
    coin: "/coin.webp",
    note: "Build a strong network within the crypto community, gaining insights and opportunities to enhance your trading performance.",
    btn: "Unlock required level first",
  },
];

export default function Skills() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  // Function to open drawer for a specific skill
  const openDrawer = (skill: any) => {
    setSelectedSkill(skill);
    setDrawerOpen(true);
  };

  // Function to close drawer
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Flex
      width={"100%"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Flex mb={4} py={"10px"} gap={"13px"} flexDirection={"column"}>
        <Box
          width={"100%"}
          display={"grid"}
          gridTemplateColumns={"repeat(2, 1fr)"}
          gap={"15px"} // Control the space between items
        >
          {skillsArray.map((skill) => {
            return (
              <Flex
                key={skill.name}
                flexDirection={"column"}
                color={"white"}
                gap={"5px"}
                p={"15px 0px"}
                bg={"#a4a4a433"}
                borderRadius={"12px"}
                width={"100%"}
                height={"174px"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => openDrawer(skill)} // Open drawer on click
                cursor={"pointer"} // Add pointer cursor
              >
                <Image
                  src={skill.imagePath}
                  width={"60px"}
                  borderRadius={"50%"}
                />
                <Text fontSize={"12px"} fontWeight={"700"}>
                  {skill.name}
                </Text>
                <Text
                  fontSize={"11px"}
                  display={"flex"}
                  gap={2}
                  alignItems={"center"}
                >
                  Profit per hour
                  <Image src="/coingrey.webp" width={"16px"} />
                  <Text color={"#bababa"} fontSize={"12px"} fontWeight={800}>
                    +{skill.pph}
                  </Text>
                </Text>
                <Box
                  width={"100%"}
                  borderTop={"1px solid #4141417b"}
                  pt={"10px"}
                >
                  <Flex
                    alignItems={"center"}
                    textAlign={"left"}
                    justifyContent={"space-between"}
                    ml={"-15px"}
                    width={"55%"}
                  >
                    <Text color={"#bababa"} fontSize={"16px"} fontWeight={600}>
                      lvl 0
                    </Text>
                    <Flex width={"50px"} alignItems={"center"} gap={1}>
                      <Image src={skill.coinIcon} width={"16px"} />
                      <Text color={"white"} fontSize={"11px"} fontWeight={800}>
                        +{skill.cost}
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            );
          })}
        </Box>
      </Flex>

      {/* Drawer Component */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="bottom"
        onClose={closeDrawer}
        size="sm"
      >
        <DrawerOverlay bg={"#303030c4"} />
        <DrawerContent
          bg={"#0a0a0a"}
          borderTopRadius={"48px"}
          p={"80px 16px 40px"}
          borderTop={"5px solid #f3ba2f"}
          boxShadow={"0px 0px 100px 10px #f3ba2f"}
        >
          <DrawerCloseButton
            color={"white"}
            bg={"#383838"}
            borderRadius={"50%"}
            mt={10}
            mr={5}
          />
          <DrawerBody
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
            <Flex
              direction="column"
              alignItems="center"
              gap={1}
              color={"white"}
            >
              <Image
                src={selectedSkill?.imagePath}
                width="80px"
                borderRadius="50%"
              />
              <Text fontSize={"28px"} fontWeight={"800"}>
                {selectedSkill?.name}
              </Text>
              <Text textAlign={'center'} fontSize={'14px'} p={'0px 16px 24px'} color={'#ffffffeb'} fontWeight={700}>
                {selectedSkill?.note}
              </Text>
              <Text fontSize={"14px"} display={"flex"} flexDirection={"column"} alignItems={'center'} textAlign={'center'} fontWeight={700} pb={3}>

                Profit per hour
                <Text display={'flex'} alignItems={'center'} gap={1}>
                <Image src={selectedSkill?.coin} width={'12px'}/>
                    {selectedSkill?.pph}</Text>
              </Text>
              <Text fontSize={'24px'} fontWeight={800} display={'flex'} alignItems={'center'} gap={2}> <Image src={selectedSkill?.coin} width={'30px'}/> {selectedSkill?.figure}</Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3}
            w={"100%"} h={'67px'} color={'#979797'} p={'20px 12px'} bg={'#42424264'} fontSize={'18px'} fontWeight={700}
            _hover={{bg: "#42424264"}}
            onClick={closeDrawer}>
              {selectedSkill?.btn}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
