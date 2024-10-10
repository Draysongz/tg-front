import React, { useState } from "react";
import { Box, Flex, Image, Text, IconButton, Progress } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Slide {
  image: string;
  text: string;
}

const slidesData: Slide[] = [
  { image: "/slide1.jpg", text: "First Slide - With Progress Bar" },
  { image: "/slide2.jpg", text: "Second Slide" },
  { image: "/slide3.jpg", text: "Third Slide" },
  { image: "/slide4.jpg", text: "Fourth Slide" },
  { image: "/slide5.jpg", text: "Fifth Slide" },
  { image: "/slide6.jpg", text: "Sixth Slide" },
];

const Levels: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      position="relative"
      alignItems="center"
      justifyContent="center"
      bg="gray.900"
      color={'black'}
      overflow="hidden"
    >
      {/* Slides */}
      {slidesData.map((slide, index) => (
        <Box
          key={index}
          display={index === currentSlide ? "block" : "none"}
          w="100%"
          h="100%"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="gray.800"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            w="100%"
            h="100%"
            objectFit="cover"
            opacity={0.7}
          />
          <Flex
            position="absolute"
            w="100%"
            h="100%"
            top={0}
            left={0}
            right={0}
            bottom={0}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            zIndex={1}
          >
            {index === 0 && (
              <Box w="80%" position="absolute" top="20px">
                <Progress value={((currentSlide + 1) / slidesData.length) * 100} colorScheme="orange" size="md" />
              </Box>
            )}
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              {slide.text}
            </Text>
          </Flex>
        </Box>
      ))}

      {/* Left Icon for Previous Slide */}
      <IconButton
        icon={<FaArrowLeft />}
        aria-label="Previous Slide"
        position="absolute"
        top="50%"
        left="20px"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={prevSlide}
        bg="transparent"
        color="white"
        fontSize="2xl"
        _hover={{ bg: "gray.700" }}
      />

      {/* Right Icon for Next Slide */}
      <IconButton
        icon={<FaArrowRight />}
        aria-label="Next Slide"
        position="absolute"
        top="50%"
        right="20px"
        transform="translateY(-50%)"
        zIndex={2}
        onClick={nextSlide}
        bg="transparent"
        color="white"
        fontSize="2xl"
        _hover={{ bg: "gray.700" }}
      />
    </Flex>
  );
};

export default Levels;
