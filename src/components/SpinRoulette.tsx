// SpinRoulette.tsx

import React, { useState } from 'react';
import { Box, Button, Text, VStack, HStack, Stack, Divider } from '@chakra-ui/react';

const symbols = [
  '/slot/seven.png',
  '/slot/cherries.png',
  '/slot/lemon.png',
  '/slot/orange.png',
  '/slot/watermelon.png',
  '/slot/grape.png',
  '/slot/star.png',
  '/slot/diamond.png',
];

const SpinRoulette: React.FC = () => {
  const [reels, setReels] = useState<string[][]>([[], [], []]);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const spinReels = () => {
    const spinDuration = 3000;
    const intervalTime = 100;

    const spinInterval = setInterval(() => {
      setReels(reels.map(() =>
        Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)])));
    }, intervalTime);

    setTimeout(() => {
      clearInterval(spinInterval);
      setIsSpinning(false);
      evaluateResults();
    }, spinDuration);
  };

  const evaluateResults = () => {
    const results = reels.map(reel => reel[1]); // Middle symbol from each reel
    const [reel1, reel2, reel3] = results;

    // Check if all three reels match
    if (reel1 === reel2 && reel1 === reel3) {
      alert('Congratulations! All reels match!');
    } else {
      alert('You lose! Better luck next time!');
    }
  };

  const handlePlay = () => {
    if (isSpinning) return; // Prevent spinning if already in progress
    setIsSpinning(true);
    spinReels();
  };

  return (
    <VStack spacing={5} align="center" padding={5}>
      <Text fontWeight={700} fontSize={"22px"} alignSelf={'flex-start'}>
        Lucky Spin
      </Text>
      <Text fontSize="3xl" fontWeight="bold">🎰 Slot Machine 🎰</Text>
      <HStack spacing={4}>
        {reels.map((reel, index) => (
          <Box key={index} borderWidth={1} borderRadius="md" p={4} bg="gray.100" boxShadow="md">
            <Stack spacing={2} align="center">
              {reel.map((symbol, idx) => (
                <img key={idx} src={symbol} alt={`slot-symbol-${idx}`} style={{ width: '50px', height: '50px' }} />
              ))}
            </Stack>
          </Box>
        ))}
      </HStack>
      <Divider />
      <HStack spacing={4} paddingY={3}>
        <Button
          onClick={handlePlay}
          isDisabled={isSpinning}
          colorScheme="teal"
        >
          Play
        </Button>
      </HStack>
    </VStack>
  );
};

export default SpinRoulette;
