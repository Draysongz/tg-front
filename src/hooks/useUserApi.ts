import { useEffect, useState } from "react";
import axios from "axios";
import userEventEmitter from "../utils/eventEmitter";

// Define the shape of the user object (you can extend this as needed)
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
}

interface UpdateUserProfileData {
  username?: string;
  level?: Number;
  coins?: Number;
  taps?: Number;
  profitPerHour?: Number;
  maxTaps?: Number;
  slots? : Number;
  tappingGuruUses?: Number;
  multitap?: number
  tapLimitBoost? : number

  // Add other fields as needed
}

export const useUserAPI = (userId: string, token?: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    userEventEmitter.emit('userUpdated', user);
  }, [user])

  // Get user profile
  const fetchUserProfile = async () => {
    setLoading(true);
    try {
      const response = await axios.get<User>(
        `https://0acc-18-133-182-234.ngrok-free.app/api/profile/${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            "ngrok-skip-browser-warning":  true,
          },
        
        }
      );
      setUser(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch user profile");
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateUserProfile = async (data: UpdateUserProfileData) => {
    setLoading(true);
    try {
      const response = await axios.put<User>(
        `https://0acc-18-133-182-234.ngrok-free.app/api/profile/${userId}`,
        data
      );
      console.log("user gotten from userapi after updating", response.data);
      setUser(response.data);
      
      setError(null);
    } catch (err) {
      setError("Failed to update user profile");
    } finally {
      setLoading(false);
    }
  };

  // Update user balance (add or subtract)
  const updateUserBalance = async (amount: Number) => {
    setLoading(true);
    try {
      const response = await axios.put<User>(
        `https://0acc-18-133-182-234.ngrok-free.app/api/balance/${userId}`,
        { amount }
      );
      setUser(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to update user balance");
    } finally {
      setLoading(false);
    }
  };

  // Get all users (for admin)
  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get<any>(
        `https://0acc-18-133-182-234.ngrok-free.app/api/users`, {
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning":  true,
            'Authorization': `Bearer ${token}`,
          },
        
        }
      );
      setError(null);
      return response.data; // Return the list of users for further use
    } catch (err) {
      setError("Failed to fetch users");
      return [];
    } finally {
      setLoading(false);
    }
  };

 const fetchRefferals = async () => {
  setLoading(true);
  try {
    const response = await axios.get<any>(
      `https://0acc-18-133-182-234.ngrok-free.app/api/users/${userId}`, // API URL with userId for fetching referrals
      {
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": true,
          'Authorization': `Bearer ${token}`, // Use token for authorization if required
        },
      }
    );
    
    setError(null);
    console.log(response.data)
    return response.data; // Return the list of referred users
  } catch (err) {
    setError("Failed to fetch referrals");
    return [];
  } finally {
    setLoading(false);
  }
};

const refillTaps = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `https://0acc-18-133-182-234.ngrok-free.app/api/user/refill`,
        { userId },
      );

      const updatedUser = response.data.user;

      // Update the user state with the new data
      setUser(updatedUser);

      // Emit the updated user data to propagate changes
      userEventEmitter.emit('userUpdated', updatedUser);

      return updatedUser;
    } catch (err) {
      setError('Error refilling taps');
      throw err;
    } finally {
      setLoading(false);
    }
  };


  const dailyCheckIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `https://0acc-18-133-182-234.ngrok-free.app/api/user/checkin`,
        { userId },
      );
      const updatedUser = response.data.updatedUser;

      // Emit the user updated event
      setUser(updatedUser)
      userEventEmitter.emit('userUpdated', updatedUser);

      return updatedUser;
    } catch (err) {
      setError("Error during daily check-in");
      throw err;
    } finally {
      setLoading(false);
    }
  };




  return {
    user,
    loading,
    error,
    fetchUserProfile,
    updateUserProfile,
    updateUserBalance,
    fetchAllUsers,
    refillTaps,
    fetchRefferals,
    dailyCheckIn
  };
};
