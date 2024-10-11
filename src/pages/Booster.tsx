import { Box, Flex, Text, Button, Image, Icon } from "@chakra-ui/react";
import "../index.css";
import { MdOutlineChevronRight, MdBolt, MdInfoOutline } from "react-icons/md";

import NavigationBar from "../components/NavigationBar";
// import { useUserAPI } from "../hooks/useUserApi";
// import { useState } from "react";

interface boostprops{
  userData: any
  token: any
}

const Boosters: React.FC<boostprops> = () => {
  // const {updateUserProfile} = useUserAPI(userData.telegramId, token)
  // const [basePrice, setBasePrice ]= useState(2000)
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
        justifyContent={'center'}
        alignItems={'center'}
        pt={3}
        gap={5}
      >
        <Box display={'flex'} flexDirection={'column'} width={"90%"} alignItems={'center'} justifyContent={'center'} gap={4}>
          <Flex width={"100%"} alignItems={'center'} justifyContent={'space-between'}>
            <Flex gap={1} alignItems={'center'}>
              <Image src="/bronze.webp" w={"16px"} />
              <Text color={'#bababa'} fontSize={'15px'}>
                Bronze
                <Icon as={MdOutlineChevronRight} />
              </Text>
            </Flex>
            <Flex
              border={"1px solid rgb(112, 112, 112)"}
              p={"2px 10px"}
              borderRadius={"15px"}
              alignItems={"center"}
              gap={1}
              width={"54px"}
            >
              <Image src="/sunflower.webp" w={"15px"} />
              <Text> 0 </Text>
            </Flex>
          </Flex>

          <Flex flexDirection={'column'}
          width={'100%'}>
            <Text fontSize={'24px'} fontWeight={'600'} p={'0px 0px 4px'}>
                Buy Boosters
            </Text>
            <Text color={'#bababa'} fontSize={'14px'} p={'0px 24px 0px 0px'}>
                Purchase boosters & earm more tokens!
            </Text>
          </Flex>

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
            <Box display={'flex'} flexDirection={'column'} w={'100%'} justifyContent={'center'} alignItems={'center'} mt={10} gap={4}>
                <Flex width={'90%'}  gap={3}>
                    <Button width={'50%'} p={'12px'} bg={'#2b2b2be2'} height={'120px'} display={'flex'} flexDirection={'column'} gap={1}>
                        <Flex alignItems={'center'} gap={3} width={'100%'}>
                            <Image src="/palm.svg" w={'45px'}/>
                            <Flex flexDirection={'column'} textAlign={'left'}
                            gap={1}>
                                <Text fontSize={'15px'} color={'white'}>Multitap</Text>
                                <Text color={'#d0d0d0'} fontSize={'11px'} margin={'2px 0px 0px'}>Level 1</Text>
                            </Flex>
                        </Flex>
                        <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                            <Text color={'#e7e7e7'} fontSize={'24px'}>2 000</Text>
                            <Icon as={MdOutlineChevronRight} boxSize={10} color={'#959595'}/>
                        </Flex>
                    </Button>
                    <Button width={'50%'} p={'12px'} bg={'#2b2b2be2'} height={'120px'} display={'flex'} flexDirection={'column'} gap={1}>
                        <Flex alignItems={'center'} gap={2} width={'100%'}>
                            <Image src="/battery.svg" w={'45px'}/>
                            <Flex flexDirection={'column'} textAlign={'left'}
                            gap={1}>
                                <Text fontSize={'15px'} color={'white'}>Tap Limit</Text>
                                <Text color={'#d0d0d0'} fontSize={'11px'} margin={'2px 0px 0px'}>Level 1</Text>
                            </Flex>
                        </Flex>
                        <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                            <Text color={'#e7e7e7'} fontSize={'24px'}>3 000</Text>
                            <Icon as={MdOutlineChevronRight} boxSize={10} color={'#959595'}/>
                        </Flex>
                    </Button>
                </Flex>

                <Button bg={'#2b2b2be2'} width={'90%'} h={'90px'} p={'12px'} justifyContent={'space-between'}>
                    <Image src="/flame.svg"/>
                    <Flex justifyContent={'space-between'} alignItems={'center'} width={'80%'} >
                        <Box display={'flex'} flexDirection={'column'}
                        gap={1}>
                            <Text fontSize={'15px'} color={'white'} fontWeight={800}>
                                Tapping Guru
                            </Text>
                            <Flex color={'#d0d0d0'} fontSize={'11px'} gap={1 } fontWeight={800}>
                            <Text>
                                Boost points 
                            </Text>
                            <Text> x5 
                                <Icon as={MdBolt}/>
                            </Text>
                            </Flex>
                            <Text fontSize={'14px'} color={'#f5bb5f'} fontWeight={800}>
                                3/3 boosts left
                            </Text>
                        </Box>
                        <Icon as={MdOutlineChevronRight} color={'#d0d0d0'} boxSize={8}/>
                    </Flex>
                </Button>

                <Button bg={'#2b2b2be2'} width={'90%'} height={'190px'}
                p={'24px'} display={'flex'} flexDirection={'column'}
                >
                    <Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                        <Image src="/boostCard.svg" w={'40px'}/>
                        <Icon as={MdInfoOutline} color={'#bababa'} boxSize={5} />
                    </Flex>
                    <Text color={'#f2f2f2'} fontSize={'16px'}
                    margin={'8px 0px 0px'} width={'100%'} 
                    textAlign={'left'} mb={2}>
                        BALANCE BOOST CARD
                    </Text>

                    <Flex width={'100%'} gap={2}>
                        <Text color={'#ffffffeb'} fontSize={'26px'}>0</Text>
                        <Text color={'#f5bb5f'} display={'flex'} fontSize={'16px'} mt={2}>x2
                        <Image src="/boltColored.svg" w={'20px'}/>
                        </Text>
                    </Flex>
                    <Box width={'122px'} height={'30px'} color={'#f5bb5f'}  bg={'#ffffff14'} p={'4px 12px'} display={'flex'} alignSelf={'flex-start'} mt={2} fontSize={'13px'} justifyContent={'center'}
                    alignItems={'center'} borderRadius={'5px'}>
                        Coming soon...
                    </Box>
                </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
      <NavigationBar />
    </Box>
  );
};

export default Boosters;
