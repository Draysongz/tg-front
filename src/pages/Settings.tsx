import { Box, Flex, Image, Icon, Button, Text } from "@chakra-ui/react";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
export default function Settings() {
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
        pt={5}
        gap={5}
        alignItems={'center'}
      >
        <Text fontSize={'24px'} p={'0px 0px 5px'} fontWeight={600}>
            Settings
        </Text>
        <Link to={'/exchange'} className=" flex w-[100%] items-center justify-center" >        
        <Button w={'90%'} h={'60px'} bg={'#2b2b2be2'} p={'0px 16px'} justifyContent={'space-between'}>
            <Flex gap={2}>
            <Image src="/coinConvert.svg" width={'20px'}/>
            <Box color={'#d2d2d2'} textAlign={'left'}>
                <Text fontSize={'13px'}>Choose exchange</Text>
                <Text fontSize={'12px'}>None</Text>
            </Box>
            </Flex>
            <Icon as={MdOutlineChevronRight} color={'#d2d2d2'} boxSize={'24px'}/>

        </Button>
        </Link>
      </Flex>
      <NavigationBar />
    </Box>
  );
}
