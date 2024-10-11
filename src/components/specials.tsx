import {
  Flex,
  Box,
  Text,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useToast
} from "@chakra-ui/react";
import useCardAPI from "../hooks/usecard";
import { useEffect, useState } from "react";
import { Card } from "../hooks/usecard";

// const specialsArray = [
//   {
//     name: "Airdrop Hunter",
//     imagePath: "/leadership.webp",
//     description: "Withdrawal access",
//     pph: "10 TON",
//     cost: "0.5 TON",
//     coinIcon: "/ton.png",
//   },
//   {
//     name: "Early Access",
//     imagePath: "/communication.webp",
//     description: "Withdrawal access",
//     pph: "5 TON",
//     cost: "0.1 TON",
//     coinIcon: "/ton.png",
//   },
//   {
//     name: "Balance Booster",
//     imagePath: "/negotiation.webp",
//     description: "Get more tokens",
//     pph: "50 TON",
//     cost: "1 TON",
//     coinIcon: "/ton.png",
//   },
//   {
//     name: "Token Swap Access",
//     imagePath: "/finance.webp",
//     description: "Swap tokens special",
//     pph: "5 TON",
//     cost: "0.2 TON",
//     coinIcon: "/ton.png",
//   },
// ];

const color = ["linear-gradient(180deg,#b36bb0,#362338)", "linear-gradient(180deg,#b2c0c8,#0d293d)", "linear-gradient(180deg,#047265,#01241f)", "linear-gradient(180deg,#4c577d,#081530)" ];

export default function Specials({userData, token}: {userData: any, token: any}) {
   const[cards, setCards] = useState<Card[]>()
     const [userDeets, setUserDeets] = useState<any>()
  const {getCardsByCategory, purchaseCard, upgradeCard} = useCardAPI(token)
  const toast = useToast()

  useEffect(()=>{
    const getCards = async()=>{
       const specialCards= await  getCardsByCategory('special')
       console.log(specialCards)
       setCards(specialCards)
    }

    if(userData){
    setUserDeets(userData)
    getCards()
    }
  }, [userData])

   const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedSpecial, setSelectedSpecial] = useState<any>(null);

  // Function to open drawer for a specific skill
  const openDrawer = (card: Card) => {
    setSelectedSpecial(card);
    setDrawerOpen(true);
  };

  // Function to close drawer
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handlePurchase = async (cost: number, cardId: string) => {
    if(cost > userDeets?.coins ){
      toast({
        title: "Insufficient funds",
        description: "You don't have enough coins to buy this card ",
        duration: 3000,
        isClosable: true,
        status: "error"
      })
      return;
    }
    const toastId = toast({
    title: 'Purchasing card...',
    status: "loading",
    duration: null, // Keeps the toast open until manually closed or replaced
    isClosable: true,
  });
  try {
    const result = await purchaseCard(userDeets?.id, cardId);
    console.log('Card purchased successfully:', result);
    // Update the local cards state with the updated card data
    setCards((prevCards) =>
      prevCards?.map((card) =>
        card.id === cardId ? result.card : card
      )
    );

      toast.update(toastId, {
      title: 'Card purchased successfully!',
      status: 'success',
      duration: 5000, // Automatically closes after 5 seconds
      isClosable: true,
    });
    closeDrawer()
  } catch (err) {
    console.error('Error purchasing card:', err);
     toast.update(toastId, {
      title: 'Failed to upgrade the card. Please try again.',
      status: 'error',
      duration: 5000, // Automatically closes after 5 seconds
      isClosable: true,
    });
    closeDrawer()
  }
};

const handleUpgrade = async (cost: number, cardId: string) => {
  
    if(cost > userDeets?.coins ){
      toast({
        title: "Insufficient funds",
        description: "You don't have enough coins to upgrade this card ",
        duration: 3000,
        isClosable: true,
        status: "error"
      })
      return;
    }
    
     const toastId = toast({
    title: 'Upgrading card...',
    status: "loading",
    duration: null, // Keeps the toast open until manually closed or replaced
    isClosable: true,
  });
  try {
     
    const result = await upgradeCard(userDeets?.id, cardId);
    console.log('Card upgraded successfully:', result);
    // Update the local cards state with the updated card data
    setCards((prevCards) =>
      prevCards?.map((card) =>
        card.id === cardId ? result.card : card
      )
    );
    toast.update(toastId, {
      title: 'Card upgraded successfully!',
      status: 'success',
      duration: 5000, // Automatically closes after 5 seconds
      isClosable: true,
    });
    closeDrawer()
    
  } catch (err) {
    console.error('Error upgrading card:', err);
    toast.update(toastId, {
      title: 'Failed to upgrade the card. Please try again.',
      status: 'error',
      duration: 5000, // Automatically closes after 5 seconds
      isClosable: true,
    });
    closeDrawer()
  }
}


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
          {cards &&cards.map((card: Card,index) => {
            return (
              <Flex
                key={index}
                flexDirection={"column"}
                color={"white"}
                gap={"5px"}
                p={"15px 0px"}
                bg={color[index % color.length]}
                borderRadius={"12px"}
                width={{base: '162px' , sm:"185px"}}
                height={"174px"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => openDrawer(card)}
              >
                <Image src={card.imagePath} width={'96px'} height={'60px'} borderRadius={'15px'} />
                <Text fontSize={"12px"} fontWeight={"700"}>
                  {card.name}
                </Text>
                <Text fontSize={'11px'} display={'flex'} gap={1} alignItems={'center'}>
                    Profit per hour 
                   
                    <Text color={'#bababa'} fontSize={'12px'} fontWeight={800}>
                    {card.profitPerHour && card.level >=1 ? `${card.profitPerHour}` : `+ ${card.baseProfit}`}
                    </Text>
                </Text>
                <Box width={'100%'} borderTop={'1px solid #4141417b'} pt={'10px'} alignItems={'center'} justifyContent={'center'}>
                <Flex
                  alignItems={"center"}
                  textAlign={"left"}
                  justifyContent={'space-between'}
                  width={'70%'}
                >
                    <Text color={'#bababa'} fontSize={'14px'} fontWeight={600}>
                        lvl {card.level}
                    </Text>
                  <Flex width={'80px'} alignItems={'center'} gap={1} justifyContent={'center'}>  
                  
                  <Text color={"white"} fontSize={"10px"} fontWeight={800} textAlign={'center'}> 
                    +{card.nextCost ? card.nextCost : card.baseCost}
                  </Text>
                  </Flex>  
                </Flex>
                </Box>

              </Flex>
            );
          })}
        </Box>
      </Flex>


            <Drawer
        isOpen={isDrawerOpen}
        placement="bottom"
        onClose={closeDrawer}
        size="sm"
      >
        <DrawerOverlay bg={"#303030c4"} />
        <DrawerContent
          bg={"#0a0a0a"}
          borderTopRadius={"48px"}
          p={"80px 16px 40px"}
          borderTop={"5px solid #f3ba2f"}
          boxShadow={"0px 0px 100px 10px #f3ba2f"}
        >
          <DrawerCloseButton
            color={"white"}
            bg={"#383838"}
            borderRadius={"50%"}
            mt={10}
            mr={5}
          />
          <DrawerBody
            css={{
              "&::-webkit-scrollbar": {
                display:
                  "none" /* Hide scrollbar for Chrome, Safari, and newer Edge */,
              },
              "-ms-overflow-style":
                "none" /* Hide scrollbar for Internet Explorer and Edge */,
              "scrollbar-width": "none" /* Hide scrollbar for Firefox */,
            }}
          >
            <Flex
              direction="column"
              alignItems="center"
              gap={1}
              color={"white"}
            >
              <Image
                src={selectedSpecial?.imagePath}
                width="80px"
                borderRadius="50%"
              />
              <Text fontSize={"28px"} fontWeight={"800"}>
                {selectedSpecial?.name}
              </Text>
              <Text fontSize={"14px"} display={"flex"} flexDirection={"column"} alignItems={'center'} textAlign={'center'} fontWeight={700} pb={3}>

                Profit per hour
                <Text display={'flex'} alignItems={'center'} gap={1}>
                <Image src={'/coin.webp'} width={'12px'}/>
                    +{selectedSpecial?.nextProfitPerHour}</Text>
              </Text>
              <Text fontSize={'24px'} fontWeight={800} display={'flex'} alignItems={'center'} gap={2}> <Image src={'/coin.webp'} width={'30px'}/> {selectedSpecial?.nextCost}</Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3}
            w={"100%"} h={'67px'} color={'#ffff'} p={'20px 12px'} bg={'blue.700'} fontSize={'18px'} fontWeight={700}
            onClick={()=>selectedSpecial.level < 1 ? handlePurchase(selectedSpecial.baseCost!, selectedSpecial.id): handleUpgrade(selectedSpecial.baseCost!, selectedSpecial.id)}
            >
              Purchase
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}