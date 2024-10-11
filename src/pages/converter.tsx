import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Converter() {
  const [fromCurrency, setFromCurrency] = useState({
    symbol: "SUNF",
    name: "Sunflower Coin",
    img: "/sunflower.webp",
  });
  const [toCurrency, setToCurrency] = useState({
    symbol: "USDT",
    name: "Tether US",
    img: "/tether.webp",
  });
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0.00005);
  const [hasBalance, setHasBalance] = useState(false);

  const currencies = [
    { symbol: "SUNF", name: "Sunflower Coin", img: "/sunflower.webp" },
    { symbol: "BTC", name: "Bitcoin", img: "/bitcoin.png" },
    { symbol: "USDT", name: "Tether US", img: "/tether.webp" },
    { symbol: "TON", name: "Ton", img: "/ton.png" },
    { symbol: "NOT", name: "Notcoin", img: "/notcoin.jpg" },
    { symbol: "BNB", name: "BNB", img: "/bnb2.webp" },
    { symbol: "SOL", name: "Solana", img: "/solana.png" },
  ];

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
        width={"90%"}
        height={"100%"}
        bgColor={"black"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        pt={3}
        gap={5}
        pb={10}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text fontSize="20px" mb={4} width={"100%"}>
            Wallet Assets
          </Text>
          {/* From Section */}
          <Box bg="#1a1a1a" borderRadius="10px" border="1px solid #FF6767" p={3}>
            <Flex justify="space-between" mb={2}>
              <Text>From</Text>
              <Text fontSize="14px" color="gray.400">
                Available: 0.00 {fromCurrency.symbol}
              </Text>
            </Flex>

            <Flex justify="space-between" alignItems="center">
              {/* Custom Currency Selector with Image */}
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="#282828"
                  color="white"
                  width="50%"
                  _hover={{ bg: "#282828" }}
                >
                  <Flex alignItems="center" gap={2}>
                    <Image src={fromCurrency.img} width="20px" />
                    <Flex flexDirection={"column"}>
                      <Text fontSize={"14px"} color={"white"} textAlign={"left"}>
                        {fromCurrency.symbol}
                      </Text>
                      <Text color={"#bababa"} fontSize={"11px"} textAlign={"left"}>
                        {fromCurrency.name}
                      </Text>
                    </Flex>
                  </Flex>
                </MenuButton>
                <MenuList bg="#282828" border={"none"} w={"100%"}>
                  {currencies.map((currency) => (
                    <MenuItem
                      key={currency.symbol}
                      onClick={() => setFromCurrency(currency)}
                      bg="#282828"
                      width={"90%"}
                      _hover={{ bg: "#3a3a3a" }}
                    >
                      <Flex alignItems="center" gap={2} fontSize={"14px"}>
                        <Image src={currency.img} width="20px" />
                        {currency.symbol} - {currency.name}
                      </Flex>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Input
                type="number"
                width="40%"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                bg="#282828"
                textAlign="right"
              />
            </Flex>
            {!hasBalance && (
              <Flex alignItems={"center"} justifyContent={"right"} color="red.400" mt={2} gap={1}>
                <Text fontSize={"12px"}>Insufficient Balance</Text>
                <Text
                  fontSize={"12px"}
                  as="button"
                  color="yellow.400"
                  onClick={() => setAmount(0)} // Clears the input
                >
                  clear
                </Text>
              </Flex>
            )}
          </Box>

          <Box
            bg="yellow.400"
            borderRadius="50%"
            p={1}
            w={"30px"}
            h={"30px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            zIndex={1}
            mt={-2}
          >
            <Text fontWeight="bold" color="black" fontSize="15px">
              ⇅
            </Text>
          </Box>

          {/* To Section */}
          <Box bg="#1a1a1a" borderRadius="10px" border="1px solid #333" p={3} mt={-3} mb={4}>
            <Flex justify="space-between" mb={2}>
              <Text>To</Text>
            </Flex>

            <Flex justify="space-between" alignItems="center">
              {/* Custom Currency Selector with Image */}
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="#282828"
                  color="white"
                  width="50%"
                  _hover={{ bg: "#282828" }}
                >
                  <Flex alignItems="center" gap={2}>
                    <Image src={toCurrency.img} width="20px" />
                    <Flex flexDirection={"column"}>
                      <Text fontSize={"14px"} color={"white"} textAlign={"left"}>
                        {toCurrency.symbol}
                      </Text>
                      <Text color={"#bababa"} fontSize={"11px"} textAlign={"left"}>
                        {toCurrency.name}
                      </Text>
                    </Flex>
                  </Flex>
                </MenuButton>
                <MenuList bg="#282828" border={"none"} w={"100%"}>
                  {currencies.map((currency) => (
                    <MenuItem
                      key={currency.symbol}
                      onClick={() => setToCurrency(currency)}
                      bg="#282828"
                      width={"90%"}
                      _hover={{ bg: "#3a3a3a" }}
                    >
                      <Flex alignItems="center" gap={2} fontSize={"14px"}>
                        <Image src={currency.img} width="20px" />
                        {currency.symbol} - {currency.name}
                      </Flex>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Input
                type="number"
                width="40%"
                value={convertedAmount}
                readOnly
                bg="#282828"
                textAlign="right"
              />
            </Flex>
          </Box>

          {/* Exchange Rate */}
          <Text fontSize="14px" textAlign="center" color="gray.400" mb={4}>
            1 {fromCurrency.symbol} ≈ {convertedAmount / amount} {toCurrency.symbol}
          </Text>
        </Box>

        {/* Buttons */}
        <Box>
          <Button
            width="100%"
            bg="yellow.500"
            opacity={0.5}
            color="black"
            mb={4}
            _hover={{ bg: "yellow.400" }}
            _disabled={{ bg: "#333", cursor: "not-allowed" }}
          >
            Preview Conversion
          </Button>
          <Link to={'/wallet'}>
          <Button width="100%" bg="#111111b3" color={'white'} _hover={{ bg: "#111111b3" }}>
            Cancel
          </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
