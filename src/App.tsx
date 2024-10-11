import { Box } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Mine from "./pages/Mine";
import Activities from "./pages/Activities";
import Daily from "./pages/DailyReward";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";
import Exchange from "./pages/Exchange";
import Levels from "./pages/Levels";
import Boosters from "./pages/Booster";
import LuckyWin from "./pages/LuckyWin";
import { useState, useEffect } from "react";
import { useUserLogin } from "./hooks/useAuth";
import WebApp from '@twa-dev/sdk'
function App() {
//  const [telegramInitData, setTelegramInitData] = useState<string>("");
  const queryString = window.location.search; // Get the query string
  const urlParams = new URLSearchParams(queryString);
  const referralId = urlParams.get("referralCode")!
  

  const telegramInitData = "query_id=AAElBO5_AAAAACUE7n-BkJvL&user=%7B%22id%22%3A2146305061%2C%22first_name%22%3A%22Crypto%22%2C%22last_name%22%3A%22Dray%22%2C%22username%22%3A%22Habibilord%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1728613078&hash=91e4ebdbc5ed6c8822b5be750a871e8b906c786a85ea5e318b93f56270371ee1"

  //   useEffect(() => {
  //   WebApp.expand();
  //   const initData = WebApp.initData;
  //   setTelegramInitData(initData);
  // }, []);

  const { userData} = useUserLogin(telegramInitData, referralId)
  console.log("userdata from app.tx", userData)


    if (!userData) {
    return 'Loading.....' // Better loading indication
  }

  const { user, token } = userData;
  return (
    

    <Box width={'100vw'} overflowX={'hidden'} fontFamily={'sans-serif'}
    >
      <Router>
          <Routes>
            <Route index element={<HomePage userData={userData}/>}  />
            <Route path="/mine" element={<Mine userData={user} token={token} />}/>
            <Route path="/tasks" element={<Activities />}/>
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/daily" element={<Daily />}/>
            <Route path="/settings" element={<Settings />}/>
            <Route path="/exchange" element={<Exchange />}/>
            <Route path="/level" element={<Levels />}/>
            <Route path="/boost" element={<Boosters userData={user} token={token}/>}/> 
            <Route path="/roulette" element={<LuckyWin />}/> 
          </Routes>
        </Router>
    </Box>

  )
}

export default App
