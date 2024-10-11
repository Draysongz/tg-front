import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/theme.tsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import App from "./App.tsx";
import './index.css';

const manifestUrl =
  "https://raw.githubusercontent.com/draysongz/tg-front/main/public/manifest.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl={manifestUrl} >
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </TonConnectUIProvider>
  </StrictMode>
);
