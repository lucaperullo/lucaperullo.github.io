import { Box, Button, Hide, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { BsClockHistory, BsFillGrid1X2Fill } from "react-icons/bs";
import { MdLocalActivity } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { useState } from "react";
import "./styles.css";
import { FaConnectdevelop } from "react-icons/fa";
import Projects from "./projects";

export default function Tabs() {
  const colorMode = useColorModeValue(true, false);
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    {
      label: "Projects",
      icon: <BsFillGrid1X2Fill />,
      content: (
        <Box>
          <Projects />
        </Box>
      ),
    },
    {
      label: "Working on",
      icon: <GiProgression />,
      content: <Box>lavoro</Box>,
    },
    {
      label: "Skills",
      icon: <FaConnectdevelop />,
      content: <Box>competenze</Box>,
    },
    {
      label: "Experience",
      icon: <BsClockHistory />,
      content: <Box>esperienza</Box>,
    },
    {
      label: "Hobbies",
      icon: <MdLocalActivity />,
      content: <Box>hobbies</Box>,
    },
  ];
  return (
    <div className="window">
      <nav className="navb">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={selectedTab === index ? "selected" : ""}
              onClick={() => setSelectedTab(index)}
            >
              <Button
                mt="8"
                variant="outline"
                _hover={{
                  color: "#fff",
                }}
                leftIcon={tab.icon}
              >
                <Hide below="md">{tab.label}</Hide>
              </Button>
              {selectedTab === index ? (
                <motion.div
                  className={colorMode ? "underline" : "underline_dark"}
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={tabs[selectedTab].label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tabs[selectedTab].content}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
