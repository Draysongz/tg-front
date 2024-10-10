import { Flex, Box, Text, Image } from "@chakra-ui/react";

const skillsArray = [
  {
    name: "Patience",
    imagePath: "/patience.webp",
    pph: "100",
    cost: "1k",
    coinIcon: "/coin.webp",
  },
  {
    name: "Discipline",
    imagePath: "/discipline.webp",
    pph: "100",
    cost: "1k",
    coinIcon: "/coin.webp",
  },
  {
    name: "Adaptability",
    imagePath: "/adaptability.webp",
    pph: "240",
    cost: "Awareness lvl 1",
    coinIcon: "/coingrey.webp",
  },
  {
    name: "Awareness",
    imagePath: "/awareness.webp",
    pph: "70",
    cost: "750",
    coinIcon: "/coin.webp",
  },
  {
    name: "Technical Analysis",
    imagePath: "/analysis.webp",
    pph: "75",
    cost:"550",
    coinIcon: "/coin.webp",
  },
  {
    name: "Networking",
    imagePath: "/networking.webp",
    pph: "90",
    cost: "T.Analysis lvl 2",
    coinIcon: "/coingrey.webp",
  },
];

export default function Skills() {
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
                width={{base: '162px' , sm:"185px"}}
                height={"174px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image src={skill.imagePath} width={'60px'} borderRadius={'50%'} />
                <Text fontSize={"12px"} fontWeight={"700"}>
                  {skill.name}
                </Text>
                <Text fontSize={'11px'} display={'flex'} gap={2} alignItems={'center'}>
                    Profit per hour 
                    <Image src="/coingrey.webp" width={'16px'}/>
                    <Text color={'#bababa'} fontSize={'12px'} fontWeight={800}>
                    +{skill.pph}
                    </Text>
                </Text>
                <Box width={'100%'} borderTop={'1px solid #4141417b'} pt={'10px'}>
                <Flex
                  alignItems={"center"}
                  textAlign={"left"}
                  justifyContent={'space-between'}
                  ml={'-15px'}
                  width={'55%'}
                >
                    <Text color={'#bababa'} fontSize={'16px'} fontWeight={600}>
                        lvl 0
                    </Text>
                  <Flex width={'50px'} alignItems={'center'} gap={1}>  
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
    </Flex>
  );
}
