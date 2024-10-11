import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import "../index.css";

const qualifiersArray = [
    {
        image:'/coin.webp',
        name: 'Tasks & activities earn',
        points: '0',
    },
    {
        image:'/frens2.webp',
        name: 'Referral activities earn',
        points: '0',
    },
    {
        image:'/mine.webp',
        name: 'Mining profits per hour',
        points: '0',
    },
    {
        image:'hunter.webp',
        name: 'Special cards purchased',
        points: '0',
    },
]

export default function Airdrop() {
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
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          width={"100%"}
          height={"220px"}
          position={"relative"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box
            position="absolute"
            top="0"
            bottom="0"
            width={"160px"}
            bgImage="/sunflower.webp"
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundSize={"contain"}
            opacity="0.9"
            animation="rotate 10s linear infinite"
            zIndex="0"
          />
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
            top={"7.5px"}
            left={0}
            right={0}
            bgImage={"url(/bg.webp)"}
            height={"100%"}
            p={"10px 0px"}
            borderTopRadius={"48px"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={10}
            overflowY={"scroll"}
            pb={{ base: 40, sm: 32 }}
          >
            <Box alignItems={'center'} display={'flex'} flexDirection={'column'} gap={1} mt={5}>
            <Text fontSize={'20px'} color={'white'} fontWeight={600}>
                Airdrop Qualifiers
            </Text>
            <Text color={'#c6c6c6'} fontSize={'14px'} padding={'0px 12px 32px'} textAlign={'center'} fontWeight={'500'} width={'80%'}>
                Listing and Launching soon, all activities are important for qualification!
            </Text>
            </Box>

            <Box width={'90%'} display={'flex'} flexDirection={"column"} gap={3}>
                {qualifiersArray.map((qualify) => {
                    return(
                <Flex width={'100%'} bg={'#a4a4a433'} p={'16px'} justifyContent={'space-between'} alignItems={'center'}>
                    <Flex alignItems={'center'} gap={3}>
                        <Image w={'34px'} h={'34px'} borderRadius={'50%'} src={qualify.image}/>
                        <Text fontSize={'14px'} color={'white'} fontWeight={700}>{qualify.name}</Text>
                    </Flex>
                    <Text color={'#bababa'} fontSize={'14px'}>
                        {qualify.points}
                    </Text>
                </Flex>
                    )
                })}
            </Box>
          </Box>
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
}
