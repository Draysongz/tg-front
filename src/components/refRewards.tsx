import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import "../index.css";

export default function Reward({
  tasks,
  userTasks,
  refUsers,
}: {
  tasks: any;
  userTasks: any;
  refUsers: any[];
}) {
  // Get user's progress for the given task
  const getUserTaskProgress = (taskId: any) => {
    return userTasks.find((userTask: any) => userTask.taskId === taskId);
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      mt={5}
      flexDirection={"column"}
      gap={5}
    >
      {tasks && tasks.length > 0 &&
        tasks.map((task: any, index: number) => {
          const userTask = getUserTaskProgress(task.id);
          const isClaimed = userTask ? userTask.claimed : false;

          // Calculate progress based on referrals and required invites
          const referralCount = refUsers && refUsers.length; // Number of referred users
          const requiredInvites = task.requiredInvites || 0; // The number of invites required to complete the task
          const progress = requiredInvites
            ? Math.min((referralCount / requiredInvites) * 100, 100) // Calculate the percentage, max at 100%
            : 0;

          return (
            <Flex
              key={index}
              width={"100%"}
              flexDirection={"column"}
              borderRadius={"10px"}
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
                <Flex alignItems={"center"} gap={2}>
                  <Box
                    w={"60px"}
                    h={"60px"}
                    bg={"#a4a4a433"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Image src="/frens2.webp" borderRadius={"10px"} />
                  </Box>
                  <Box>
                    <Text fontSize={"18px"} color={"white"} fontWeight={800}>
                      {task.description}
                    </Text>
                    <Text
                      fontSize={"16px"}
                      fontWeight={800}
                      textAlign={"left"}
                      color={"white"}
                    >
                      {task.reward}
                    </Text>
                  </Box>
                </Flex>

                <Button
                  w={"30%"}
                  h={"50px"}
                  fontSize={"22px"}
                  fontWeight={800}
                  borderRadius={"10px"}
                  bg={isClaimed ? "gray" : "rgb(33 33 33)"}
                  color={isClaimed ? "white" : "rgb(129 129 129)"}
                  disabled={isClaimed || progress < 100} 
                >
                  {isClaimed ? "Claimed" : "Claim"}
                </Button>
              </Box>

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
                    style={{ width: `${progress}%` }}
                  ></Box>
                </Box>
              </Flex>
            </Flex>
          );
        })}
    </Flex>
  );
}
