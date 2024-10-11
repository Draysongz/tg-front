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

// const skillsArray = [
//   {
//     name: "Patience",
//     imagePath: "/patience.webp",
//     pph: "100",
//     cost: "1k",
//     coinIcon: "/coin.webp",
//   },
//   {
//     name: "Discipline",
//     imagePath: "/discipline.webp",
//     pph: "100",
//     cost: "1k",
//     coinIcon: "/coin.webp",
//   },
//   {
//     name: "Adaptability",
//     imagePath: "/adaptability.webp",
//     pph: "240",
//     cost: "Awareness lvl 1",
//     coinIcon: "/coingrey.webp",
//   },
//   {
//     name: "Awareness",
//     imagePath: "/awareness.webp",
//     pph: "70",
//     cost: "750",
//     coinIcon: "/coin.webp",
//   },
//   {
//     name: "Technical Analysis",
//     imagePath: "/analysis.webp",
//     pph: "75",
//     cost:"550",
//     coinIcon: "/coin.webp",
//   },
//   {
//     name: "Networking",
//     imagePath: "/networking.webp",
//     pph: "90",
//     cost: "T.Analysis lvl 2",
//     coinIcon: "/coingrey.webp",
//   },
// ];

export default function Skills({userData, token}: {userData: any, token:any}) {
  const[cards, setCards] = useState<Card[]>()
  const [userDeets, setUserDeets] = useState<any>()
  const {getCardsByCategory, purchaseCard, upgradeCard} = useCardAPI(token)
  const toast = useToast()

  useEffect(()=>{

    const getCards = async()=>{
       const skillCards= await  getCardsByCategory('skill')
       console.log(skillCards)
       setCards(skillCards)
    }

    if(userData){
    setUserDeets(userData)
    getCards()
    }
  }, [userData])

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  // Function to open drawer for a specific skill
  const openDrawer = (card: Card) => {
    setSelectedSkill(card);
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
      title: 'Failed to purchase the card. Please try again.',
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
          {cards && cards.map((card: Card, index:number) => {
            return (
              <Flex
                key={index}
                flexDirection={"column"}
                color={"white"}
                gap={"5px"}
                p={"15px 0px"}
                bg={"#a4a4a433"}
                borderRadius={"12px"}
                width={{base: '162px' , sm:"185px"}}
                height={"174px"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => openDrawer(card)}
              >
                <Image src={card.imagePath} width={'60px'} borderRadius={'50%'} />
                <Text fontSize={"12px"} fontWeight={"700"}>
                   {card.name}
                </Text>
                <Text fontSize={'11px'} display={'flex'} gap={2} alignItems={'center'}>
                    Profit per hour 
                    <Image src="/coingrey.webp" width={'16px'}/>
                    <Text color={'#bababa'} fontSize={'12px'} fontWeight={800}>
                    {card.profitPerHour && card.level >=1 ? `${card.profitPerHour}` : `+ ${card.baseProfit}`}
                    </Text>
                </Text>
                <Box width={'100%'} borderTop={'1px solid #4141417b'} pt={'10px'}>
                <Flex
                  alignItems={"center"}
                  textAlign={"left"}
                  justifyContent={'space-between'}
                  ml={'-15px'}
                  width={'55%'}
                >
                    <Text color={'#bababa'} fontSize={'16px'} fontWeight={600}>
                        lvl {card.level}
                    </Text>
                  <Flex width={'50px'} alignItems={'center'} gap={1}>  
                  <Image src={card.coinIcon} width={"16px"} />
                  <Text color={"white"} fontSize={"11px"} fontWeight={800}>
                    {card.nextCost ? card.nextCost : card.baseCost}
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
                src={selectedSkill?.imagePath}
                width="80px"
                borderRadius="50%"
              />
              <Text fontSize={"28px"} fontWeight={"800"}>
                {selectedSkill?.name}
              </Text>
              <Text fontSize={"14px"} display={"flex"} flexDirection={"column"} alignItems={'center'} textAlign={'center'} fontWeight={700} pb={3}>

                Profit per hour
                <Text display={'flex'} alignItems={'center'} gap={1}>
                <Image src={selectedSkill?.coinIcon} width={'12px'}/>
                    +{selectedSkill?.nextProfitPerHour}</Text>
              </Text>
              <Text fontSize={'24px'} fontWeight={800} display={'flex'} alignItems={'center'} gap={2}> <Image src={selectedSkill?.coinIcon} width={'30px'}/> {selectedSkill?.nextCost}</Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3}
            w={"100%"} h={'67px'} color={'#ffff'} p={'20px 12px'} bg={'blue.700'} fontSize={'18px'} fontWeight={700}
            onClick={()=>selectedSkill.level < 1 ? handlePurchase(selectedSkill.baseCost!, selectedSkill.id): handleUpgrade(selectedSkill.baseCost!, selectedSkill.id)}
            >
              Purchase
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}