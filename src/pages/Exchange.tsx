import { Box, Flex, Image, Icon, Button, Text } from "@chakra-ui/react";
import { MdOutlineChevronRight } from "react-icons/md";
import NavigationBar from "../components/NavigationBar";

const exchangeArray = [
    {
        icon:"/binance.webp",
        name: "Binance vendor",

    },
    {
        icon:"/bybit.webp",
        name: "Bybit vendor",

    },
    {
        icon:"/mexc.webp",
        name: "MEXC vendor",

    },
    {
        icon:"/kukoin.webp",
        name: "Kukoin vendor",

    },
    {
        icon:"/okx.webp",
        name: "OKX vendor",

    },
    {
        icon:"/bingx.webp",
        name: "BingX vendor",

    },
    {
        icon:"/gateio.webp",
        name: "Gateio vendor",

    },
    {
        icon:"/htx.webp",
        name: "HTX vendor",

    },
    {
        icon:"/bitget.webp",
        name: "Bitget vendor",

    },
]
export default function Exchange() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgColor={"black"}
      width={"100vw"}
      minHeight={"100vh"}
      alignItems={"center"}
      textColor={"white"}
      overflow={"hidden"}
    >
      <Flex
        width={"100%"}
        height={"100%"}
        bgColor={"black"}
        flexDirection={"column"}
        pt={5}
        gap={5}
        alignItems={'center'}
        pb={32}
      >
        <Text fontSize={'24px'} p={'0px 0px 5px'} fontWeight={600}>
            Choose exchange
        </Text>
        <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={4}>
        {exchangeArray.map((exchange) => {
            return(
        <Button w={'92.5%'} h={'65px'} bg={'#2b2b2be2'} p={'0px 16px'} justifyContent={'space-between'} borderRadius={'15px'}>
            <Flex gap={4} alignItems={'center'}>
            <Image src={exchange.icon} width={'35px'}/>
            <Box color={'#d2d2d2'} textAlign={'left'}>
                <Text fontSize={'18px'} fontWeight={700}>{exchange.name}</Text>                
            </Box>
            </Flex>
            <Icon as={MdOutlineChevronRight} color={'#d2d2d2'} boxSize={'30px'}/>

        </Button>
            )
        })}
        </Box>       
      </Flex>
      <NavigationBar />
    </Box>
  );
}
