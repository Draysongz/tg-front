import { Flex, Box, Text, Image } from "@chakra-ui/react";

const specialsArray = [
  {
    name: "Airdrop Hunter",
    imagePath: "/leadership.webp",
    description: "Withdrawal access",
    pph: "10 TON",
    cost: "0.5 TON",
    coinIcon: "/ton.png",
  },
  {
    name: "Early Access",
    imagePath: "/communication.webp",
    description: "Withdrawal access",
    pph: "5 TON",
    cost: "0.1 TON",
    coinIcon: "/ton.png",
  },
  {
    name: "Balance Booster",
    imagePath: "/negotiation.webp",
    description: "Get more tokens",
    pph: "50 TON",
    cost: "1 TON",
    coinIcon: "/ton.png",
  },
  {
    name: "Token Swap Access",
    imagePath: "/finance.webp",
    description: "Swap tokens special",
    pph: "5 TON",
    cost: "0.2 TON",
    coinIcon: "/ton.png",
  },
];

const color = ["linear-gradient(180deg,#b36bb0,#362338)", "linear-gradient(180deg,#b2c0c8,#0d293d)", "linear-gradient(180deg,#047265,#01241f)", "linear-gradient(180deg,#4c577d,#081530)" ];

export default function Specials() {
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
          {specialsArray.map((special,index) => {
            return (
              <Flex
                key={index}
                flexDirection={"column"}
                color={"white"}
                gap={"5px"}
                p={"15px 0px"}
                bg={color[index % color.length]}
                borderRadius={"12px"}
                width={{base: '162px' , sm:"185px"}}
                height={"174px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image src={special.imagePath} width={'96px'} height={'60px'} borderRadius={'15px'} />
                <Text fontSize={"12px"} fontWeight={"700"}>
                  {special.name}
                </Text>
                <Text fontSize={'11px'} display={'flex'} gap={1} alignItems={'center'}>
                    Profit per hour 
                    <Image src="/ton.png" width={'16px'}/>
                    <Text color={'#bababa'} fontSize={'12px'} fontWeight={800}>
                    +{special.pph}
                    </Text>
                </Text>
                <Box width={'100%'} borderTop={'1px solid #4141417b'} pt={'10px'} alignItems={'center'} justifyContent={'center'}>
                <Flex
                  alignItems={"center"}
                  textAlign={"left"}
                  justifyContent={'space-between'}
                  width={'70%'}
                >
                    <Text color={'#bababa'} fontSize={'14px'} fontWeight={600}>
                        lvl 0
                    </Text>
                  <Flex width={'80px'} alignItems={'center'} gap={1} justifyContent={'center'}>  
                  <Image src={special.coinIcon} width={"16px"} />
                  <Text color={"white"} fontSize={"10px"} fontWeight={800} textAlign={'center'}> 
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
    </Flex>
  );
}
