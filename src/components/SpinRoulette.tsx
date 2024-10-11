import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Text, Flex, Image } from '@chakra-ui/react';
import '../index.css'; // Ensure the CSS file is used

const SpinRoulette: React.FC = () => {
  const items = [
    "/bnb2.webp", "/notcoin.jpg", "/bitcoin.png",
    "/bnb2.webp", "/notcoin.jpg", "/bitcoin.png",
    "/bnb2.webp", "/notcoin.jpg", "/bitcoin.png",
  ];

  const [spinsLeft, setSpinsLeft] = useState<number>(8); // Tracks spins remaining
  const [info, setInfo] = useState<string>("");
  const [isSpinning, setIsSpinning] = useState<boolean>(false); // Controls button animation state
  const [winMessage, setWinMessage] = useState<string>(""); // State for win/lose message
  const doors = useRef<HTMLDivElement[]>([]);
  const spinDuration = 5; // Set duration for the spin in seconds

  // Initialize the slot machine
  const init = (firstInit: boolean = true, groups: number = 1, duration: number = 1) => {
    doors.current.forEach((door) => {
      if (firstInit) {
        door.dataset.spinned = '0';
      } else if (door.dataset.spinned === '1') {
        return;
      }

      const boxes = door.querySelector('.boxes') as HTMLElement;
      const boxesClone = boxes.cloneNode(false) as HTMLElement;

      const pool: string[] = ['/faq.png'];  // Placeholder image for the spin start
      if (!firstInit) {
        const arr: string[] = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));

        boxesClone.addEventListener(
          'transitionstart',
          () => {
            door.dataset.spinned = '1';
            boxesClone.querySelectorAll('.box').forEach((box) => {
              (box as HTMLElement).style.filter = 'blur(1px)';
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          'transitionend',
          () => {
            boxesClone.querySelectorAll('.box').forEach((box, index) => {
              (box as HTMLElement).style.filter = 'blur(0)';
              if (index > 0) boxesClone.removeChild(box);
            });
          },
          { once: true }
        );
      }

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${door.clientWidth}px`;
        box.style.height = `${door.clientHeight}px`;

        const img = document.createElement('img');
        img.src = pool[i];
        img.style.width = "50%";
        img.style.height = "50%";
        img.style.borderRadius = "50%";
        img.alt = `Item ${i}`;

        box.appendChild(img);
        boxesClone.appendChild(box);
      }
      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
      door.replaceChild(boxesClone, boxes);
    });
  };

  // Function to shuffle items
  const shuffle = (arr: string[]): string[] => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  // Function to determine win or lose
  const checkForWin = () => {
    const results = doors.current.map(door => {
      const img = door.querySelector('.boxes .box img') as HTMLImageElement;
      return img.src;
    });

    // Simple logic: if all results are the same, it's a win
    return results.every(result => result === results[0]);
  };

  // Spin function with gradual slowing down
  const spin = async () => {
    setIsSpinning(true); // Trigger button rotation
    init(false, 1, spinDuration);

    // Start the spin animation
    for (const door of doors.current) {
      const boxes = door.querySelector('.boxes') as HTMLElement;
      boxes.style.transform = 'translateY(0)';
      await new Promise((resolve) => setTimeout(resolve, spinDuration * 1000));
    }

    // Check the result after spinning
    const isWin = checkForWin();
    if (isWin) {
      setWinMessage('Congratulations! You won 30,000 points. Click to claim now!');
    } else {
      setWinMessage('Sorry, you lost. Better luck next time!');
    }

    // Stop button rotation
    setIsSpinning(false);

    // Reset the game automatically after each spin
    if (spinsLeft > 1) {
      setSpinsLeft(spinsLeft - 1);
      setTimeout(() => {
        setWinMessage(""); // Clear message before resetting
        init(true);
      }, 2000);  // Auto reset after 2 seconds
    } else {
      setWinMessage("No spins left!");
    }
  };

  useEffect(() => {
    setInfo(items.join(" ")); 
    init();
  }, []);

  return (
    <Box width={'90%'} pb={32}>
      <Box id="app">
        <Box width={'100%'} display={'flex'} alignItems={'center'} p={'0px 20px'} justifyContent={'space-between'} mt={-6}>
          <Flex alignItems={'center'} gap={1}>
            <Image src='/sunflower.webp' w={'16px'}/>
            <Text fontSize={'16px'} color={'white'} fontWeight={700} display={'flex'} gap={1} alignItems={'center'}>
              480 000
              <Text fontWeight={500} fontSize={'14px'} color={'#bababa'}>SUNF</Text>
            </Text>
          </Flex>

          <Flex alignItems={'center'} gap={1}>
            <Image src='/spin.svg'/>
            <Text fontSize={'16px'} color={'white'} fontWeight={700} display={'flex'} gap={1} alignItems={'center'}>
              {spinsLeft}
              <Text fontWeight={500} fontSize={'14px'} color={'#bababa'}>Spins left</Text>
            </Text>
          </Flex>
        </Box>
        <Box className="doors">
          {[...Array(3)].map((_, i) => (
            <Box
              key={i}
              className="door"
              ref={(el) => {
                if (el && doors.current) doors.current[i] = el;
              }}
            >
              <Box className="boxes"></Box>
            </Box>
          ))}
        </Box>
        <Button color={'black'} bg={'#f5bb5f'} fontSize={'16px'} p={'16px 32px'} h={'56px'} borderRadius={'15px'} width={'90%'} mt={5} _hover={{bg: "#f5bb5f"}}>
          Claim
        </Button>

        <Text className="info">{info}</Text>

        <Text width={'80%'} textAlign={'center'} mt={3} fontSize={'15px'}>
          {winMessage}
        </Text>
      </Box>

      <Box display={'Flex'} className="buttons" justifyContent={'center'}>
        <Button
          id="spinner"
          onClick={spin}
          className={isSpinning ? "rotating" : ""}
          height={'100px'}
          w={'100px'}
          borderRadius={'50%'}
          bg={'#f5bb5f'}
          border={'4px solid #ba932069'}
          _hover={{bg: "#f5bb5f"}}
        >
          Spin
        </Button>
      </Box>
    </Box>
  );
};

export default SpinRoulette;
