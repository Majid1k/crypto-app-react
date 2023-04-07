import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import avatarSrc from "../assets/founder.jpg";


const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}        
      px={"16"}
      py={["16", "8"]}   
    >
      <HStack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab aperiam a laboriosam. Voluptas, ipsum.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Founder</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Footer;