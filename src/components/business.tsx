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

const businessArray = [
  {
    name: "Leadership",
    imagePath: "/leadership.webp",
    pph: "100",
    cost: "1k",
    coinIcon: "/coin.webp",
    figure: "1 000",
    coin: "/coin.webp",
    note: "Build a strong network within the crypto community, gaining insights and opportunities to enhance your trading performance.",
    btn: "Unlock required level first",
  },
  {
    name: "Communication",
    imagePath: "/communication.webp",
    pph: "100",
    cost: "1k",
    coinIcon: "/coin.webp",
    figure: "1 000",
    coin: "/coin.webp",
    note: "Build a strong network within the crypto community, gaining insights and opportunities to enhance your trading performance.",
    btn: "Unlock required level first",
  },
  {
    name: "Negotiation",
    imagePath: "/negotiation.webp",
    pph: "240",
    cost: "2k",
    coinIcon: "/coin.webp",
    figure: "1 000",
    coin: "/coin.webp",
    note: "Build a strong network within the crypto community, gaining insights and opportunities to enhance your trading performance.",
    btn: "Unlock required level first",
  },
  {
    name: "Financial management",
    imagePath: "/finance.webp",
    pph: "2k",
    cost: "750",
    coinIcon: "/coin.webp",
    figure: "1 000",
    coin: "/coin.webp",
    note: "Build a strong network within the crypto community, gaining insights and opportunities to enhance your trading performance.",
    btn: "Unlock required level first",
  },
  {
    name: "Risk management",
    imagePath: "/risks.webp",
    pph: "75",
    cost:"finance mngmt lvl 3",
    coinIcon: "/coingrey.webp",
    figure: "1 000",
    coin: "/coin.webp",
    note: "Build a strong network within the crypto community, gaining insights and opportunities to enhance your trading performance.",
    btn: "Unlock required level first",
  },
  {
    name: "Networking",
    imagePath: "/networking.webp",
    pph: "90",
    cost: "risk mngmt lvl 1",
    coinIcon: "/coingrey.webp",
    figure: "1 000",
    coin: "/coin.webp",
    note: "Build a strong network within the crypto community, gaining insights and opportunities to enhance your trading performance.",
    btn: "Unlock required level first",
  },
];

export default function Business() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);

  // Function to open drawer for a specific skill
  const openDrawer = (skill: any) => {
    setSelectedBusiness(skill);
    setDrawerOpen(true);
  };

  // Function to close drawer
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <Flex width={"100%"} flexDirection={"column"} justifyContent={"space-between"}>
      <Flex
        mb={4}
        py={"10px"}
        gap={"13px"}
        flexDirection={"column"}
      >
        <Box 
          width={"100%"} 
          display={"grid"} 
          gridTemplateColumns={"repeat(2, 1fr)"}
          gap={"15px"}  // Control the space between items
        >
          {businessArray.map((business) => {
            return (
              <Flex
                key={business.name}
                flexDirection={"column"}
                color={"white"}
                gap={"5px"}
                p={"15px 0px"}
                bg={"#a4a4a433"}
                borderRadius={"12px"}
                width={{base: '162px' , sm:"185px"}}
                height={"174px"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => openDrawer(business)}
              >
                <Image src={business.imagePath} width={'60px'} borderRadius={'50%'} />
                <Text fontSize={"12px"} fontWeight={"700"}>
                  {business.name}
                </Text>
                <Text fontSize={'11px'} display={'flex'} gap={2} alignItems={'center'}>
                    Profit per hour 
                    <Image src="/coingrey.webp" width={'16px'}/>
                    <Text color={'#bababa'} fontSize={'12px'} fontWeight={800}>
                    +{business.pph}
                    </Text>
                </Text>
                <Box width={'100%'} borderTop={'1px solid #4141417b'} pt={'10px'} alignItems={'center'} justifyContent={'center'}>
                <Flex
                  alignItems={"center"}
                  textAlign={"left"}
                  justifyContent={'space-between'}
                  ml={'-10px'}
                  width={'80%'}
                >
                    <Text color={'#bababa'} fontSize={'14px'} fontWeight={600}>
                        lvl 0
                    </Text>
                  <Flex width={'80px'} alignItems={'center'} gap={1} justifyContent={'center'}>  
                  <Image src={business.coinIcon} width={"16px"} />
                  <Text color={"white"} fontSize={"10px"} fontWeight={800}> 
                    + {business.cost}
                  </Text>
                  </Flex>  
                </Flex>
                </Box>

              </Flex>
            );
          })}
        </Box>
      </Flex>
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
                src={selectedBusiness?.imagePath}
                width="80px"
                borderRadius="50%"
              />
              <Text fontSize={"28px"} fontWeight={"800"}>
                {selectedBusiness?.name}
              </Text>
              <Text textAlign={'center'} fontSize={'14px'} p={'0px 16px 24px'} color={'#ffffffeb'} fontWeight={700}>
                {selectedBusiness?.note}
              </Text>
              <Text fontSize={"14px"} display={"flex"} flexDirection={"column"} alignItems={'center'} textAlign={'center'} fontWeight={700} pb={3}>

                Profit per hour
                <Text display={'flex'} alignItems={'center'} gap={1}>
                <Image src={selectedBusiness?.coin} width={'12px'}/>
                    {selectedBusiness?.pph}</Text>
              </Text>
              <Text fontSize={'24px'} fontWeight={800} display={'flex'} alignItems={'center'} gap={2}> <Image src={selectedBusiness?.coin} width={'30px'}/> {selectedBusiness?.figure}</Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3}
            w={"100%"} h={'67px'} color={'#979797'} p={'20px 12px'} bg={'#42424264'} fontSize={'18px'} fontWeight={700}
            _hover={{bg: "#42424264"}}
            onClick={closeDrawer}>
              {selectedBusiness?.btn}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
