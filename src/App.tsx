import { ChakraProvider } from "@chakra-ui/react";
import ChatModal from "lib/components/chat";
import Layout from "lib/components/layout";
import BackofficePage from "lib/pages/backoffice";
import theme from "lib/styles/customTheme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./index.css";
const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/backoffice" element={<BackofficePage />} />

        <Route
          path="/"
          element={
            <>
              <Layout />
              <ChatModal />
            </>
          }
        />
      </Routes>
    </Router>
  </ChakraProvider>
);

export default App;
