import { Box, Text } from '@chakra-ui/react';

import { useState } from 'react';

function HeroBottomBar({ onNextHeroClick }) {
  return (
    <Box width="100%" display="flex" flexDir="row" justifyContent="center">
      <Box
        display="flex"
        width="45%"
        backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      ></Box>
      <Box
        display="flex"
        width="10%"
        flexDir="column"
        cursor="pointer"
        paddingTop="20px"
        boxShadow="2px 2px 6px #000"
        backgroundColor="rgba(0,0,0,0.85)"
        _hover={{
          '& .grid-item': {
            backgroundColor: '#fff',
            transition: 'background-color 0.3s ease-in-out',
          },
        }}
      >
        <Box
          marginTop="5px"
          display="grid"
          gridTemplateColumns="repeat(3, 0.01fr)"
          gap="5px"
          justifyContent="center"
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Box
              key={index}
              width="35px"
              height="35px"
              bgColor="#888"
              className="grid-item"
            />
          ))}
        </Box>
        <Box display="flex" justifyContent="center">
          <Text
            color="#fff"
            fontSize="14px"
            textTransform="uppercase"
            fontWeight="bold"
            maxWidth="100px"
            textAlign="center"
            lineHeight="1.5"
          >
            Wszyscy Bohaterowie
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        width="45%"
        backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        position="relative"
        cursor="pointer"
        onClick={() => onNextHeroClick()}
      >
        <Box position="absolute">
          <Text color="#fff">dadaad</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroBottomBar;
