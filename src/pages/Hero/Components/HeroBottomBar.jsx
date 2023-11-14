import { Box, Image, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

function HeroBottomBar({ name }) {
  const formatedName = name.toLowerCase();
  return (
    <Box width="100%" display="flex" flexDir="row" justifyContent="center">
      <Box
        display="flex"
        width="45%"
        backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      ></Box>

      <Link to="/Heroes">
        <Box
          display="flex"
          flexDir="column"
          cursor="pointer"
          paddingTop="20px"
          paddingX="40px"
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
      </Link>

      <Box
        display="flex"
        width="45%"
        backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        position="relative"
        cursor="pointer"
        _hover={{
          '& .hero-image': {
            transform: 'translateY(-15px)',
            border: 'none',
          },
        }}
        _
      >
        <Box display="flex" flexDir="row" position="absolute">
          <Box display="flex" flexDir="column">
            <Text color="#fff">Następny bohater</Text>
            <Text color="#fff">{name}</Text>
          </Box>
        </Box>
        <Box position="absolute" bottom="-20px" left="50%">
          <Image
            height="250px"
            className="hero-image"
            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/${formatedName}.png`}
          />
        </Box>
      </Box>
    </Box>
  );
}

// TU JEST PASEK NA DOLE

export default HeroBottomBar;
