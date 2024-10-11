import { useState, useEffect } from 'react';
import axios from 'axios';
import userEventEmitter from '../utils/eventEmitter';
// Define the types for a Card and a CardPurchase
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

interface CardPurchase extends Card {
  level: number;
  userId: string;
  cardId: string;
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
}

const useCardAPI = (userToken: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [user, setUser] = useState<User | null>(null);
  // Helper function to set headers
  const getHeaders = () => ({
    headers: {
      Authorization: `Bearer ${userToken}`,
      "ngrok-skip-browser-warning":  true,
    },
  });

    useEffect(()=>{
    userEventEmitter.emit('cardsUpdated', cards);
  }, [cards])

    useEffect(()=>{
    userEventEmitter.emit('userUpdated', user);
  }, [user])

  const baseURL = 'https://0acc-18-133-182-234.ngrok-free.app/api';

  // Function to fetch cards by category
  const getCardsByCategory = async (category: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${baseURL}/cards/category/${category}`, getHeaders());
      setCards(response.data as Card[]); // Update the cards state with the fetched data
      return response.data;
    } catch (err: any) {
      setError(err.response ? err.response.data : 'Error fetching cards');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Function to purchase a card
  const purchaseCard = async (userId: string, cardId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${baseURL}/cards/purchase`,
        { userId, cardId },
      );

      // Update the purchased card in the state
      const purchasedCard = response.data.purchase as CardPurchase;
      const updatedUser = response.data.updatedUser
      setCards((prevCards) => [...prevCards, purchasedCard]);
      setUser(updatedUser)

      return response.data;
    } catch (err: any) {
      setError(err.response ? err.response.data : 'Error purchasing card');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Function to upgrade a card
  const upgradeCard = async (userId: string, cardId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${baseURL}/cards/upgrade`,
        { userId, cardId },
        getHeaders()
      );

      // Update the upgraded card in the state
      const upgradedCard = response.data.card as CardPurchase;
      const updatedUser = response.data.updatedUser
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === upgradedCard.cardId ? { ...card, ...upgradedCard } : card
        )
      );

      setUser(updatedUser)

      return response.data;
    } catch (err: any) {
      setError(err.response ? err.response.data : 'Error upgrading card');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    cards,
    getCardsByCategory,
    purchaseCard,
    upgradeCard,
    loading,
    error,
  };
};

export default useCardAPI;
