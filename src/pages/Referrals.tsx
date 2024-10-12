import { Box, Flex, Button, Text, Icon } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiShare2Line } from "react-icons/ri";
import { BsLink45Deg } from "react-icons/bs";

import { HiUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserAPI } from "../hooks/useUserApi";
import { initUtils } from '@telegram-apps/sdk';

export default function Friends({userData, token}: {userData: any, token: any}) {
  const FriendList = [
  {
    name: "Habibilord",
    level: "Bronze",
    funds: "4 000",
  },
  {
    name: "Cryptodray",
    level: "Platinum",
    funds: "500 000",
  },
]


  const [referredUser, setReferredUsers] = useState<any[]>([]);

  const {fetchRefferals} = useUserAPI(userData?.telegramId, token)


  const handleInviteFriend = () => {
    const utils = initUtils()
    const inviteLink = `https://t.me/Slothgames_bot?start=${userData.telegramId}`
    const shareText = `Join me on this awesome Telegram mini app!`
    const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent(shareText)}`
    utils.openTelegramLink(fullUrl)
  }

  useEffect(()=>{
    const fetchRef = async ()=>{
      const refUsers = await fetchRefferals()
      console.log("ref users from ref page", refUsers)
       setReferredUsers(refUsers.referredUsers || [])
    }

    if(userData){
      fetchRef()
    }
  }, [userData])

  console.log(referredUser)

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
            onClick={handleInviteFriend}
          >
            <Icon as={RiShare2Line}/>
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
            <Icon as={BsLink45Deg}/>
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
                  <Link to={'/claim'}>
                    Claim rewards 
                  </Link>
                    <Icon as={FaArrowRightLong} color={'#f5bb5f'} boxSize={3} mt={'3px'}/>
                </Button>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'} mt={5} flexDirection={'column'} gap={5}>
              {FriendList.map((friend) => {
                return(

              <Flex width={'100%'} h={'70px'} borderRadius={'10px'} alignItems={'center'} px={'10px'} bg={'#2b2b2be2'} justifyContent={'space-between'}>
                <Flex alignItems={'center'}  gap={2}>
                <Box w={'40px'} h={'40px'} bg={'#a4a4a433'} borderRadius={'50%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

                <Icon as={HiUser} boxSize={5} color={'#ffbb5f'}/>
                </Box>
                <Box>
                <Text fontSize={'14px'}>
                  {friend.name}
                </Text>
                <Text fontSize={'11px'} textAlign={'left'} color={'#ffffff9e'}>
                  {friend.level}
                </Text>
                </Box>
                </Flex>

                <Flex alignItems={'center'} justifyContent={'center'} gap={2}>
                    <Text fontSize={'16px'} fontWeight={700}>
                      {friend.funds}
                    </Text>
                    <Text fontSize={'11px'}> SUNF</Text>
                </Flex>
              </Flex>

                );
            })}
            </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
