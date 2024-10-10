import { Box, Text, Image } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, isActive = false, onClick }) => (
  <Box as={Link} onClick={onClick} to={to} /* Link destination will be dynamically passed */
    className={`flex flex-col items-center w-[20%] h-[100%] p-2 rounded-[10px] justify-center ${
      isActive ? "text-[white] bg-[#272a2f]" : "text-[#949494] bg-black"
    }`}
  >
    {icon}
    <Text className="mt-1 text-xs">{label}</Text>
  </Box>
);

const NavigationBar: React.FC = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState<string | null>(null);
  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/earn") {
      setActiveNav("Earn");
    } else if (location.pathname === "/roulette") {
      setActiveNav("LuckyWin");
    } else if (location.pathname === "/mine") {
      setActiveNav("Mine");
    } else if (location.pathname === "/tasks") {
        setActiveNav("Activities");
    } else if (location.pathname === "/wallet") {
      setActiveNav("Wallet");
    }
  }, [location.pathname]);

  const handleNavItemClick = (label: string) => {
    setActiveNav(label);
  };

  return (
    <nav>
      <Box
        bgColor={"black"}
        width={"100%"}
        display={"flex"}
        height={"80px"}
        alignItems={"center"}
        justifyContent={"space-around"}
        position={"fixed"}
        bottom={0}
        right={0}
        p={'10px'}
        // border={"2px solid"}
        boxShadow={"0px 0px 8px 8px black"}
        zIndex={80}
      >
        <NavItem
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="w-[26px] h-[26px]"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64,64a48,48,0,0,1,96,0,8,8,0,0,1-16,0,32,32,0,0,0-64,0,8,8,0,0,1-16,0Zm143.23,56c-8.61.4-15.23,7.82-15.23,16.43v7.28a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V120.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,144,120v15.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V64.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,96,64V183.74a8.19,8.19,0,0,1-6.72,8.16l-.12,0a6.09,6.09,0,0,1-6-3.09l-21-36.44c-4.3-7.46-13.74-10.57-21.4-6.62A16,16,0,0,0,34.15,168L65.1,228.05A8,8,0,0,0,72,232H208a8,8,0,0,0,7.16-4.42c.36-.72,8.84-15.06,8.84-40.65V136A16,16,0,0,0,207.23,120Z"></path>
            </svg>
          }
          label="Earn"
          isActive={activeNav === "Earn"}
          to="/"
          onClick={() => handleNavItemClick("Earn")}
        />
        <NavItem
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M128,128c-28.36-14.12-56.73-28.24-96,1.61,0-.53,0-1.07,0-1.61A96,96,0,0,1,78.6,45.67C124.09,64.75,126,96.38,128,128ZM81.4,212a96,96,0,0,0,94.6-.81c.47-.27.94-.53,1.4-.81C131.91,191.25,130,159.62,128,128,101.59,145.5,75.18,163,81.4,212ZM224,126.39a96,96,0,0,0-48-81.53l-1.4-.81C180.82,93,154.41,110.5,128,128,156.36,142.12,184.73,156.24,224,126.39Z"
                opacity="0.2"
              ></path>
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.82,98.46c-28.34,20-49.57,14.68-71.87,4.39,20.07-14.19,38.86-32.21,39.53-67.11A87.92,87.92,0,0,1,215.82,122.46ZM167.11,49.19C170.24,83.71,155,99.44,135,113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89,87.89,0,0,1,70.5,3.4ZM79.32,54.73c31.45,14.55,37.47,35.58,39.71,60-22.33-10.29-47.35-17.59-77.93-.68A88.18,88.18,0,0,1,79.32,54.73ZM40.18,133.54c28.34-20,49.57-14.68,71.87-4.39C92,143.34,73.19,161.36,72.52,196.26A87.92,87.92,0,0,1,40.18,133.54Zm48.71,73.27C85.76,172.29,101,156.56,121,142.39c2.25,24.48,8.44,49.8,38.37,67.82a87.89,87.89,0,0,1-70.5-3.4Zm87.79-5.54c-31.45-14.55-37.47-35.58-39.71-60,12.72,5.86,26.31,10.75,41.3,10.75,11.33,0,23.46-2.8,36.63-10.08A88.2,88.2,0,0,1,176.68,201.27Z"></path>
            </svg>
          }
          label="LuckyWin"
          to="/roulette"
          isActive={activeNav === "LuckyWin"}
          onClick={() => handleNavItemClick("LuckyWin")}
        />
        <NavItem
          icon={
            <Image
              src="/mine.webp"
              alt="mine"
              w={"22px"}
              style={{
                filter: activeNav === "Mine" ? "brightness(1)" : "brightness(0.8)",
              }}
            />
          }
          label="Mine"
          to="/mine"
          isActive={activeNav === "Mine"}
          onClick={() => handleNavItemClick("Mine")}
        />
        <NavItem
          icon={
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,208H48V48H80Zm96-56H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path>
            </svg>
          }
          label="Activities"
          to="/tasks"
          isActive={activeNav === "Activities"}
          onClick={() => handleNavItemClick("Activities")}

        />
        <NavItem
          icon={
            <Image
              src="/airdrop.webp"
              alt="airdrop"
              w={"22px"}
              style={{
                filter: activeNav === "Wallet" ? "grayscale(0)" : "grayscale(1)",
              }}
            />
          }
          label="Wallet"
          to="/wallet"
          isActive={activeNav === "Wallet"}
          onClick={() => handleNavItemClick("Wallet")}
        />
      </Box>
    </nav>
  );
};

export default NavigationBar;
