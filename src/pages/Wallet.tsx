import { Box, Flex, Text, Button, Image, Icon } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import NavigationBar from "../components/NavigationBar";
import { TonConnectButton } from "@tonconnect/ui-react";

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
            <Image src="/convert.webp" w={"24px"} />
            <Text fontSize={"12px"} margin={"4px 0px 0px"}>
              Swap
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
            <Image src="/gift.svg" w={"24px"} />
            <Text fontSize={"12px"} margin={"4px 0px 0px"}>
              Airdrop
            </Text>
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
            >
            <Box pb={32}>
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
                      <Flex fontSize={"14px"} justifyContent={"space-between"}>
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
      <NavigationBar />
    </Box>
  );
};
export default Wallet;
