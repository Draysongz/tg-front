import { Flex, Button, Box, Text, Image } from "@chakra-ui/react";

const businessArray = [
  {
    name: "Leadership",
    imagePath: "/leadership.webp",
    pph: "100",
    cost: "1k",
    coinIcon: "/coin.webp",
  },
  {
    name: "Communication",
    imagePath: "/communication.webp",
    pph: "100",
    cost: "1k",
    coinIcon: "/coin.webp",
  },
  {
    name: "Negotiation",
    imagePath: "/negotiation.webp",
    pph: "240",
    cost: "2k",
    coinIcon: "/coin.webp",
  },
  {
    name: "Financial management",
    imagePath: "/finance.webp",
    pph: "2k",
    cost: "750",
    coinIcon: "/coin.webp",
  },
  {
    name: "Risk management",
    imagePath: "/risks.webp",
    pph: "75",
    cost:"finance mngmt lvl 3",
    coinIcon: "/coingrey.webp",
  },
  {
    name: "Networking",
    imagePath: "/networking.webp",
    pph: "90",
    cost: "risk mngmt lvl 1",
    coinIcon: "/coingrey.webp",
  },
];

export default function Business() {
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
    </Flex>
  );
}
