import { Box, Image, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

function HeroBottomBar({ heroId, name }) {
  const formattedName = name.toLowerCase();

  return (
    <Box width="100%" display="flex" flexDir="column" justifyContent="center">
      <Box width="100%" display="flex" flexDir="row" justifyContent="center">
        <Box
          display="flex"
          flexDir="column"
          width="45%"
          backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          position="relative"
          cursor="pointer"
          filter="brightness(1.0)"
          transition="filter 0.3s ease-in-out"
          _hover={{
            filter: 'brightness(1.2)',
            transition: 'filter 0.3s ease-in-out',
            '& .hero-image': {
              transform: 'translateY(-15px)',
              border: 'none',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
        >
          <Box display="flex" flexDir="row" position="absolute" right="10%">
            <Box display="flex" flexDir="column">
              <Text
                color="#9f9f9f"
                fontSize="15px"
                textTransform="uppercase"
                letterSpacing="2px"
                textShadow="1px 1px 4px #000"
                marginBottom="5px"
              >
                Następny bohater
              </Text>
              <Text
                color="#fff"
                fontSize="28px"
                textTransform="uppercase"
                letterSpacing="1px"
                fontWeight="bold"
                lineHeight="112%"
                textShadow="1px 1px 4px #000"
              >
                {name}
              </Text>
            </Box>
          </Box>
          <Box position="absolute" bottom="-20px" right="50%">
            <Image
              transform="translateY(0)"
              border="initial"
              transition="transform 0.3s ease-in-out"
              height="250px"
              className="hero-image"
              src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/${formattedName}.png`}
            />
          </Box>
        </Box>

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
          flexDir="column"
          width="45%"
          backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          position="relative"
          cursor="pointer"
          filter="brightness(1.0)"
          transition="filter 0.3s ease-in-out"
          _hover={{
            filter: 'brightness(1.2)',
            transition: 'filter 0.3s ease-in-out',
            '& .hero-image': {
              transform: 'translateY(-15px)',
              border: 'none',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
        >
          <Box display="flex" flexDir="row" position="absolute" left="10%">
            <Box display="flex" flexDir="column">
              <Text
                color="#9f9f9f"
                fontSize="15px"
                textTransform="uppercase"
                letterSpacing="2px"
                textShadow="1px 1px 4px #000"
                marginBottom="5px"
              >
                Następny bohater
              </Text>
              <Text
                color="#fff"
                fontSize="28px"
                textTransform="uppercase"
                letterSpacing="1px"
                fontWeight="bold"
                lineHeight="112%"
                textShadow="1px 1px 4px #000"
              >
                {name}
              </Text>
              <Box display="flex" alignItems="center" flexDir="row">
                <Text></Text>
                <Text>dada</Text>
              </Box>
            </Box>
          </Box>
          <Box position="absolute" bottom="-20px" left="50%">
            <Image
              transform="translateY(0)"
              border="initial"
              transition="transform 0.3s ease-in-out"
              height="250px"
              className="hero-image"
              src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/${formattedName}.png`}
            />
          </Box>
        </Box>
      </Box>
      <Box zIndex="1" width="100%" height="25px" backgroundColor="#000" />
    </Box>
  );
}

// TU JEST PASEK NA DOLE

export default HeroBottomBar;
