
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { TonConnectButton } from "@tonconnect/ui-react";
import {
  Flex,
  Box,
  Text,
  Image,
  Icon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const Wallet: React.FC = () => {
  const balanceArray = [
    {
      imagePath: "/sunflower.webp",
      token: "SUNF",
      tokenName: "Sunflower Coin",
      tokenAmount: "0.00",
      cost: "$0.00",
    },
    {
      imagePath: "/tether.webp",
      token: "USDT",
      tokenName: "Tether US",
      tokenAmount: "0.00",
      cost: "$0.00",
    },
    {
      imagePath: "/ton.png",
      token: "TON",
      tokenName: "Toncoin",
      tokenAmount: "0.00",
      cost: "$0.00",
    },
    {
      imagePath: "/notcoin.jpg",
      token: "NOT",
      tokenName: "Notcoin",
      tokenAmount: "0.00",
      cost: "$0.00",
    },
    {
      imagePath: "/bnb2.webp",
      token: "BNB",
      tokenName: "BNB",
      tokenAmount: "0.00",
      cost: "$0.00",
    },
    {
      imagePath: "/solana.png",
      token: "SOL",
      tokenName: "Solana",
      tokenAmount: "0.00",
      cost: "$0.00",
    },
  ];

  const {isOpen, onClose, onOpen} = useDisclosure()
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgColor={"#0d0d0d"}
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      textColor={"white"}
      overflow={"hidden"}
    >
      <Flex
        width={"90%"}
        height={"100%"}
        bgColor={"#0d0d0d"}
        alignItems={"center"}
        flexDirection={"column"}
        pt={3}
        gap={5}
      >
        <Flex
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={3}
        >
          <Text fontSize={"17px"} fontWeight={700}>
            My Assets
          </Text>

          <TonConnectButton />
        </Flex>

        <Box
          width={"100%"}
          bg={"#a4a4a433"}
          height={"129px"}
          p={"16px"}
          borderRadius={"10px"}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
        >
          <Flex
            justifyContent={"space-between"}
            color={"#a4a4a4"}
            fontSize={"15px"}
            fontWeight={500}
          >
            <Text display={"flex"} alignItems={"center"} gap={2}>
              Total Assets
              <Icon as={IoEyeOutline} />
            </Text>
            <Text display={"flex"} gap={1} alignItems={"center"}>
              <Image src="/History.svg" />
              History
            </Text>
          </Flex>

          <Text display={"flex"} fontSize={"30px"} fontWeight={700}>
            0.00
            <Text fontSize={"13px"} fontWeight={500} m={"16px 0px 0px 12px"}>
              USDT
            </Text>
          </Text>

          <Flex>
            <Image src="/wave.svg" />
            <Text
              fontSize={"13px"}
              m={"0px 0px 0px 4px"}
              display={"flex"}
              gap={1}
              fontWeight={400}
            >
              0.00
              <Text>BTC</Text>
            </Text>
          </Flex>
        </Box>

        <Flex width={"100%"} justifyContent={"space-between"}>
          <Box
            bg={"#a4a4a433"}
            p={"10px 16px"}
            width={"30%"}
            height={"66px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
            onClick={onOpen}
          >
            <Image src="/withdraw.svg" w={"24px"} />
            <Text fontSize={"12px"} margin={"4px 0px 0px"}>
              Withdraw
            </Text>
          </Box>
          <Box
            bg={"#a4a4a433"}
            p={"10px 16px"}
            width={"30%"}
            height={"66px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Link to={'/convert'} className="w-[100] items-center justify-center flex flex-col">
            <Image src="/convert.webp" w={"24px"} />
            <Text fontSize={"12px"} margin={"4px 0px 0px"}>
              Swap
            </Text>
            </Link>
          </Box>
          <Box
            bg={"#a4a4a433"}
            p={"10px 16px"}
            width={"30%"}
            height={"66px"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"10px"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Link to={'/qualify'} className="w-[100] items-center justify-center flex flex-col">
            <Image src="/gift.svg" w={"24px"} />
            <Text fontSize={"12px"} margin={"4px 0px 0px"}>
              Airdrop
            </Text>
            </Link>
          </Box>
        </Flex>

        <Box width={"100%"}>
          <Text fontSize={"18px"} fontWeight={700}>
            Balances
          </Text>

          <Box
            position={"relative"}
            w={"100%"}
            flexGrow={1}
            overflow={"hidden"}
            height={"100%"}
            mt={"10px"}
            pb={"20px"}
          >
            <Box
              position={"absolute"}
              top={0}
              left={0}
              right={0}
              height={"30px"}
              zIndex={1}
            />

            <Box
              position={"relative"}
              flexGrow={1}
              overflowY={"auto"} // Allow scrolling
              height={"calc(100vh - 160px)"}
              zIndex={0}
              width={"100%"}
              pb={32}
              css={{
                '&::-webkit-scrollbar': {
                  display: 'none', /* Hide scrollbar for Chrome, Safari, and newer Edge */
                },
                '-ms-overflow-style': 'none', /* Hide scrollbar for Internet Explorer and Edge */
                'scrollbar-width': 'none', /* Hide scrollbar for Firefox */
              }}
            >
              <Box pb={36} >
                {balanceArray.map((balance) => {
                  return (
                    <Box
                      bg={"#a4a4a433"}
                      h={"71px"}
                      width={"100%"}
                      color={"white"}
                      p={"16px"}
                      borderRadius={"7.5px"}
                      display={"flex"}
                      alignItems={"center"}
                      gap={2}
                      mb={5}
                    >
                      <Image
                        src={balance.imagePath}
                        width={"30px"}
                        borderRadius={"50%"}
                      />
                      <Box
                        display={"flex"}
                        width={"85%"}
                        flexDirection={"column"}
                      >
                        <Flex
                          fontSize={"14px"}
                          justifyContent={"space-between"}
                        >
                          <Text>{balance.token}</Text>
                          <Text>{balance.tokenAmount}</Text>
                        </Flex>
                        <Flex
                          fontSize={"11px"}
                          color={"#bababa"}
                          justifyContent={"space-between"}
                        >
                          <Text>{balance.tokenName}</Text>
                          <Text>{balance.cost}</Text>
                        </Flex>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>



      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay bg={'#303030c4'} />
        <DrawerContent bg={'#0a0a0a'} borderTopRadius={'48px'}
        height={'403px'}
        p={'80px 16px 40px'}
        borderTop={'5px solid #f3ba2f'}
        boxShadow={'0px 0px 100px 10px #f3ba2f'}
        >
          <DrawerCloseButton color={'white'} bg={'#383838'} borderRadius={'50%'}  mt={10} mr={5}/>

          <DrawerBody css={{
    '&::-webkit-scrollbar': {
      display: 'none', /* Hide scrollbar for Chrome, Safari, and newer Edge */
    },
    '-ms-overflow-style': 'none', /* Hide scrollbar for Internet Explorer and Edge */
    'scrollbar-width': 'none', /* Hide scrollbar for Firefox */
  }}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
              {/* <Icon as={TiCancel} boxSize={16} color={'white'}/> */}
              <Text fontSize={'18px'} color={'white'} m={'12px 0px 0px'} p={'8px 0px'}>
                WITHDRAWAL ACCESS LOCKED
              </Text>
              <Text fontSize={'14px'} color={'#bababa'} m={'12px 0px 0px'} p={'0px 0px 24px'} textAlign={'center'}>
                You need to purchase atleast 2 Specials Cards in mine activity to unlock withdrawal access!2
              </Text>
            </Box>
            
          </DrawerBody>

          <DrawerFooter>
            
            <Link to={'/mine'} className="w-[100%]">
            <Button variant="outline" mr={3} width={'100%'} height={'48px'} bg={'#f5bb5f'} p={'12px 24px'} color={'black'} border={'none'} _hover={{bg: '#f5bb5f'}}>
              Purchase Special Cards
            </Button>
              </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <NavigationBar />
    </Box>
  );
};
export default Wallet;
