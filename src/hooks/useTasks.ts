import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import userEventEmitter from "../utils/eventEmitter";

export interface Card {
  id: string;
  name: string;
  category: string;
  baseProfit: number;
  profitIncrease: number;
  maxLevel: number;
  baseCost?: number | null;
  costIncrease?: number | null;
  requires?: string | null;
  imagePath: string;
  coinIcon: string;
  level: number;
  nextProfitPerHour?: number
  nextCost?  : number
  profitPerHour? : number
}



interface User {
   id           : Number
  telegramId    : string
  username      : string
  level         : Number
  coins         : Number
  taps          : Number
  maxTaps       : Number 
  refillRate    : Number 
  lastRefillTime : Number
  slots          : Number
  referralCount  : Number
  freeSpins      : Number
  multitap       : Number
  tapLimitBoost   : Number
  tappingGuruUses : Number
  profitPerHour   : Number

  cards           : []
  userTasks: []
}

const useTasks = (userId: string, token?: string) => {
  const [tasks, setTasks] = useState<any[]>([]); // To store all tasks
  const [userTasks, setUserTasks] = useState<any[]>([]); // To store user-specific progress
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const toast = useToast();

  // Helper function to set headers
   const getHeaders = () => ({
    headers: {
      Authorization: `Bearer ${token}`,
      "ngrok-skip-browser-warning":  true,
    },
  });
      useEffect(()=>{
    userEventEmitter.emit('userTask', userTasks);
  }, [userTasks])

    useEffect(()=>{
    userEventEmitter.emit('userUpdated', user);
  }, [user])

  const baseURL = 'https://5a59-102-88-36-176.ngrok-free.app/api'


  // Fetch all tasks
  const getTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${baseURL}/tasks`, getHeaders());
      setTasks(response.data.tasks)
      return response.data.tasks
    } catch (err: any) {
      setError(err.response ? err.response.data.message : "Error fetching tasks");
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch user-specific task progress
  const getUserTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${baseURL}/user/${userId}/tasks`, getHeaders());
      setUserTasks(response.data.userTasks);
      return response.data.userTasks;
    } catch (err: any) {
      setError(err.response ? err.response.data.message : "Error fetching user tasks");
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Claim a task reward
  const claimTaskReward = async (taskId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${baseURL}/tasks/claim`,
        { userId, taskId },
        getHeaders()
      );

      toast({
        title: "Success",
        description: `You have claimed ${response.data.reward} coins!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });


      // Update user task progress locally after claiming the reward
      setUserTasks((prevUserTasks) =>
        prevUserTasks.map((userTask) =>
          userTask.taskId === taskId ? { ...userTask, claimed: true } : userTask
        )
      );

      setUser(response.data.updatedUser)
    } catch (err: any) {
      setError(err.response ? err.response.data.message : "Error claiming reward");
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  // Fetch both tasks and user tasks when the hook is mounted
  useEffect(() => {
    if (userId) {
      getTasks();
      getUserTasks();
    }
  }, [userId]);

  return {
    tasks,
    userTasks,
    user,
    loading,
    error,
    getTasks,
    getUserTasks,
    claimTaskReward,
  };
};

export default useTasks;
