import { Box, Flex, Text, Image, Button, Icon } from "@chakra-ui/react";
import "../index.css";
import { FaCircle } from "react-icons/fa";

const levelNames = [
  { name: "Gold", requiredCoins: 25000 }, // 25,000 to 99,999 coins
  { name: "Platinum", requiredCoins: 100000 }, // 100,000 to 999,999 coins
  { name: "Diamond", requiredCoins: 1000000 }, // 1,000,000 to 2,000,000 coins
  { name: "Master", requiredCoins: 50000000 }, // 50,000,000 to 100,000,000 coins
];

export default function Challenges({
  tasks,
  userTasks,
  userCoins,
  claimRewards,
}: {
  tasks: any;
  userTasks: any;
  userCoins: number; // User's balance in coins
  claimRewards: (taskId: string) => void;
}) {
  // Get user's progress for the given task
  const getUserTaskProgress = (taskId: any) => {
    return userTasks.find((userTask: any) => userTask.taskId === taskId);
  };

  // Calculate progress based on user's coins and the required coins for each level
  const calculateProgress = (requiredCoins: number) => {
    return Math.min((userCoins / requiredCoins) * 100, 100); // Cap progress at 100%
  };



  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      mt={5}
      flexDirection={"column"}
      gap={5}
    >
      {levelNames.map((level, index: number) => {
        // Get the required task for the current level (if it exists in tasks)
        const task = tasks.find((task: any) => task.levelName === level.name);
        const userTask = task ? getUserTaskProgress(task.id) : null;
        const isClaimed = userTask ? userTask.claimed : false;

        // Calculate progress for this level based on user's coin balance
        const progress = calculateProgress(level.requiredCoins);

        return (
          <Flex
            key={index}
            width={"100%"}
            flexDirection={"column"}
            borderRadius={"20px"}
            alignItems={"center"}
            p={"20px 10px"}
            bg={"rgb(47 47 47)"}
            gap={4}
          >
            <Box
              display={"flex"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Flex alignItems={"center"} gap={3}>
                <Box
                  w={"60px"}
                  h={"60px"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image
                    src={`/${level.name.toLowerCase()}.webp`}
                    borderRadius={"10px"}
                  />
                </Box>
                <Box>
                  <Text fontSize={"18px"} color={"white"} fontWeight={800}>
                    {level.name}
                  </Text>
                  <Text
                    fontSize={"16px"}
                    fontWeight={800}
                    textAlign={"left"}
                    color={"white"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={2}
                  >
                    <Icon
                      as={FaCircle}
                      color={"rgb(199 125 60)"}
                      boxSize={3}
                      mt={1}
                    />
                    {task && task.reward} coins
                  </Text>
                </Box>
              </Flex>

              <Button
                w={"30%"}
                h={"50px"}
                fontSize={"22px"}
                fontWeight={800}
                borderRadius={"10px"}
                bg={
                  isClaimed
                    ? "gray"
                    : progress >= 100
                    ? "rgb(190 128 47)"
                    : "rgb(33 33 33)"
                }
                color={
                  isClaimed
                    ? "white"
                    : progress >= 100
                    ? "white"
                    : "rgb(129 129 129)"
                }
                disabled={isClaimed || progress < 100} // Only enable button if progress is 100% and task is not claimed
                onClick={() => claimRewards(task.id)}
              >
                {isClaimed ? "Claimed" : "Claim"}
              </Button>
            </Box>

            {/* Progress Bar */}
            <Flex alignItems={"center"} borderRadius={"20px"} w={"100%"}>
              <Box
                className="w-full h-2 rounded-full flex"
                bg={"rgb(29 29 29)"}
                p={"7px 3px"}
                justifyContent={"left"}
                alignItems={"center"}
              >
                <Box
                  className="h-2 rounded-full"
                  bg={"rgb(190 128 47)"}
                  style={{ width: `${progress}%` }} // Set progress bar width
                ></Box>
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
