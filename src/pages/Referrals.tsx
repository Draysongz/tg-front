import { Box, Flex, Button, Text, Icon } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Friends({userData}: {userData: any}) {
  const refLink = `https://t.me/Slothgames_bot?start=${userData.telegramId}`


  const copyRefLink = async()=>{
    await navigator.clipboard.writeText(refLink)
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgColor={"black"}
      width={"100%"}
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
        pb={32}
      >
        <Flex
          flexDirection={"column"}
          width={"100%"}
          textAlign={"left"}
          gap={1}
        >
          <Text fontSize={"18px"} fontWeight={700}>
            Invite friends, get rewards!
          </Text>
          <Text fontSize={"14px"} color={"#bababa"}>
            The more frens you refer, the more you earn and get rewarded!
          </Text>
        </Flex>

        <Flex width={"100%"} justifyContent={"space-between"}>
          <Button
            width={"60%"}
            h={"60px"}
            gap={2}
            bg={"#2b2b2be2"}
            color={"rgb(265, 187, 95)"}
          >
            <Icon />
            <Text>Share invite link</Text>
          </Button>
          <Button
            w={"35%"}
            h={"60px"}
            gap={2}
            bg={"#2b2b2be2"}
            color={"rgb(265, 187, 95)"}
            onClick={copyRefLink}
          >
            <Icon />
            <Text>Copy</Text>
          </Button>
        </Flex>

        <Flex width={"100%"} justifyContent={"space-between"}>
          <Box
            width={"47%"}
            h={"85px"}
            bg={"#2b2b2be2"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            borderRadius={"15px"}
          >
            <Text
              display={"flex"}
              fontSize={"22px"}
              fontWeight={"700"}
              gap={1}
              px={"20px"}
            >
              0
              <Text fontSize={"14px"} mt={"8px"}>
                FRENS
              </Text>
            </Text>
            <Text
              fontSize={"10px"}
              color={"#ffffff9e"}
              w={"60%"}
              textAlign={"left"}
              ml={"20px"}
            >
              More frens, better rewards
            </Text>
          </Box>
          <Box
            width={"47%"}
            h={"85px"}
            bg={"#2b2b2be2"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            borderRadius={"15px"}
          >
            <Text
              display={"flex"}
              fontSize={"22px"}
              fontWeight={"700"}
              gap={1}
              px={"20px"}
            >
              0
              <Text fontSize={"18px"} mt={"5px"}>
                SUNF
              </Text>
            </Text>
            <Text
              fontSize={"10px"}
              color={"#ffffff9e"}
              w={"60%"}
              textAlign={"left"}
              ml={"20px"}
            >
              10% of your frens earnings
            </Text>
          </Box>
        </Flex>

        <Box display={'flex'}
        flexDirection={'column'}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Text fontSize={'17px'} p={'0px 0px 0px 4px'} color={'#ffffffe0'} fontWeight={700}>Frens list</Text>

                <Button bgColor={'#2b2b2be2'} width={'149px'} height={'37px'} color={'#e7e7e7d6'} fontSize={'15px'} p={'8px 12px'} gap={3} alignItems={'center'} fontWeight={700}>
                    Claim rewards 
                    <Icon as={FaArrowRightLong} color={'#f5bb5f'} boxSize={3} mt={'3px'}/>
                </Button>
            </Flex>
            <Flex h={'150px'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={'14px'} color={'#d0d0d0'} p={'32px 20px 0px'} w={'335px'} h={'104px'}>
                You have no frens 👨‍👦‍👦 Refer your frens and family, get 10% of their earnings & unlock more rewards!
                </Text>
            </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
