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
function App() {

  return (

    <Box width={'100vw'} overflowX={'hidden'} fontFamily={'sans-serif'}
    >
      <Router>
          <Routes>
            <Route index element={<HomePage />}  />
            <Route path="/mine" element={<Mine />}/>
            <Route path="/tasks" element={<Activities />}/>
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/daily" element={<Daily />}/>
            <Route path="/settings" element={<Settings />}/>
            <Route path="/exchange" element={<Exchange />}/>
            <Route path="/level" element={<Levels />}/>
            <Route path="/boost" element={<Boosters />}/> 
            <Route path="/roulette" element={<LuckyWin />}/> 
          </Routes>
        </Router>
    </Box>

  )
}

export default App
