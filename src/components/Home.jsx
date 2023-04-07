import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";  

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"80vh"}>
      <motion.div
        style={{
          height: "72vh",
        }}
        animate={{                 
          translateY: "20px",
        }}
        transition={{              
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"70vh"}
          objectFit={"contain"}
          src={btcSrc}
          
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Crypto EU
      </Text>
    </Box>
  );
};

export default Home;