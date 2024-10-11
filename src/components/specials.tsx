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

const specialsArray = [
  {
    icon: "/notice.svg",
    name: "Airdrop Hunter",
    imagePath: "/leadership.webp",
    description: "Withdrawal access",
    pph: "10 TON",
    cost: "0.5 TON",
    coinIcon: "/ton.png",
    note: "This is a special card that gives you special access benefits to some of the wallet features on SunFlower",
    btn: "Connect Wallet",
  },
  {
    icon: "/notice.svg",
    name: "Early Access",
    imagePath: "/communication.webp",
    description: "Withdrawal access",
    pph: "5 TON",
    cost: "0.1 TON",
    coinIcon: "/ton.png",
    note: "With this special card you will stand high airdrop qualification chances and be among early token holders.",
    btn: "Connect Wallet",
  },
  {
    icon: "/notice.svg",
    name: "Balance Booster",
    imagePath: "/negotiation.webp",
    description: "Get more tokens",
    pph: "50 TON",
    cost: "1 TON",
    coinIcon: "/ton.png",
    note: "Get special access to boost your total balance in the boosters section, never a dull moment!",
    btn: "Connect Wallet",
  },
  {
    icon: "/notice.svg",
    name: "Token Swap Access",
    imagePath: "/finance.webp",
    description: "Swap tokens special",
    pph: "5 TON",
    cost: "0.2 TON",
    coinIcon: "/ton.png",
    note: "This special card gives you access to token swap and withdrawal features in your wallet section.",
    btn: "Connect Wallet",
  },
];

const color = [
  "linear-gradient(180deg,#b36bb0,#362338)",
  "linear-gradient(180deg,#b2c0c8,#0d293d)",
  "linear-gradient(180deg,#047265,#01241f)",
  "linear-gradient(180deg,#4c577d,#081530)",
];

export default function Specials() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedSpecial, setSelectedSpecial] = useState<any>(null);

  // Function to open drawer for a specific skill
  const openDrawer = (skill: any) => {
    setSelectedSpecial(skill);
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
          {specialsArray.map((special, index) => {
            return (
              <Flex
                key={index}
                flexDirection={"column"}
                color={"white"}
                gap={"5px"}
                p={"15px 0px"}
                bg={color[index % color.length]}
                borderRadius={"12px"}
                width={{ base: "162px", sm: "185px" }}
                height={"174px"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => openDrawer(special)}
              >
                <Image
                  src={special.imagePath}
                  width={"96px"}
                  height={"60px"}
                  borderRadius={"15px"}
                />
                <Text fontSize={"12px"} fontWeight={"700"}>
                  {special.name}
                </Text>
                <Text
                  fontSize={"11px"}
                  display={"flex"}
                  gap={1}
                  alignItems={"center"}
                >
                  Profit per hour
                  <Image src="/ton.png" width={"16px"} />
                  <Text color={"#bababa"} fontSize={"12px"} fontWeight={800}>
                    +{special.pph}
                  </Text>
                </Text>
                <Box
                  width={"100%"}
                  borderTop={"1px solid #4141417b"}
                  pt={"10px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Flex
                    alignItems={"center"}
                    textAlign={"left"}
                    justifyContent={"space-between"}
                    width={"70%"}
                  >
                    <Text color={"#bababa"} fontSize={"14px"} fontWeight={600}>
                      lvl 0
                    </Text>
                    <Flex
                      width={"80px"}
                      alignItems={"center"}
                      gap={1}
                      justifyContent={"center"}
                    >
                      <Image src={special.coinIcon} width={"16px"} />
                      <Text
                        color={"white"}
                        fontSize={"10px"}
                        fontWeight={800}
                        textAlign={"center"}
                      >
                        +{special.cost}
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
                src={selectedSpecial?.icon}
                width="80px"
                borderRadius="50%"
              />
              <Text fontSize={"32px"} fontWeight={"800"}>
                {selectedSpecial?.name}
              </Text>
              <Text
                textAlign={"center"}
                fontSize={"14px"}
                p={"0px 0px 24px"}
                color={"#ffffffeb"}
                fontWeight={700}
                width={"100%"}
              >
                {selectedSpecial?.note}
              </Text>
              <Text
                fontSize={"14px"}
                display={"flex"}
                alignItems={"center"}
                textAlign={"center"}
                fontWeight={700}
                gap={1}
              >
                Price: 
                <Image src={selectedSpecial?.coinIcon} w={'14px'}/>
                <Text>
                  {selectedSpecial?.cost}
                </Text>
              </Text>
              <Text
                fontSize={"14px"}
                display={"flex"}
                alignItems={"center"}
                textAlign={"center"}
                fontWeight={700}
                gap={1}
                pb={3}
              >
                Price: 
                <Image src={selectedSpecial?.coinIcon} w={'14px'}/>
                <Text color={'#22c55e'}>
                  +{selectedSpecial?.pph}
                </Text>
              </Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button
              mr={3}
              w={"100%"}
              h={"67px"}
              color={"white"}
              p={"20px 12px"}
              bg={"#0089cd"}
              fontSize={"18px"}
              fontWeight={700}
              _hover={{ bg: "#0089cd" }}
              onClick={closeDrawer}
            > 
            <Image src={selectedSpecial?.coinIcon} w={'40px'}/>
              {selectedSpecial?.btn}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
