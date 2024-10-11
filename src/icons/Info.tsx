import React from "react";
import { IconProps } from "../utils/types";
import { Link } from "react-router-dom";

import {
  Box,
  Text,
  Button,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Info: React.FC<IconProps> = ({ size = 24, className = "" }) => {
  const svgSize = `${size}px`;
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <svg
        fill="currentColor"
        className={className}
        height={svgSize}
        width={svgSize}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onOpen}
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,15a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0ZM12,8a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,8Z"></path>
        </g>
      </svg>

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay bg={"#303030c4"} />
        <DrawerContent
          bg={"#202020"}
          borderTopRadius={"48px"}
          p={"80px 16px 40px"}
          borderTop={"5px solid #f3ba2f"}
          boxShadow={"0px 0px 100px 10px #f3ba2f"}
        >
          <DrawerCloseButton
            color={"white"}
            bg={"#383838"}
            borderRadius={"50%"}
            mt={10}
            mr={5}
          />

          <DrawerBody
            css={{
              "&::-webkit-scrollbar": {
                display:
                  "none" /* Hide scrollbar for Chrome, Safari, and newer Edge */,
              },
              "-ms-overflow-style":
                "none" /* Hide scrollbar for Internet Explorer and Edge */,
              "scrollbar-width": "none" /* Hide scrollbar for Firefox */,
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                w={"72px"}
                bg={"#3b3b3b"}
                h={"72px"}
                borderRadius={"50%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src="/pph.webp" w={"34px"} h={"50px"} />
              </Box>
              <Text
                fontSize={"22px"}
                color={"white"}
                m={"12px 0px 0px"}
                p={"8px 0px"}
              >
                Boost your profit
              </Text>
              <Text
                fontSize={"14px"}
                color={"#bfbfbf"}
                m={"12px 0px 0px"}
                // p={"0px 0px 24px"}
                textAlign={"center"}
              >
                Tap the mining menu to buy upgrades for your exchange even when
                offline for up to 3 hours
              </Text>
            </Box>
          </DrawerBody>

          <DrawerFooter>
          <Link to={'/mine'} className="w-[100%]">
            <Button
              variant="outline"
              mr={3}
              width={"100%"}
              height={"61px"}
              bg={"#1857ca"}
              p={"12px 24px"}
              fontSize={"17px"}
              color={"#ffffffeb"}
              border={"none"}
              _hover={{ bg: "#1857ca" }}
              gap={2}
            >
              Start Mining
              <Image src="/coin.webp" w={"20px"} />
            </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Info;
