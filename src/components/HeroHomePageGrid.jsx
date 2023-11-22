/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Box, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { fontFamily } from './constants/FontFamily';
import { Link } from 'react-router-dom';

export const evenRowStyle = {
  animation: 'moveEvenRow 100s linear infinite alternate ',
};

export const oddRowStyle = {
  animation: 'moveOddRow 100s linear infinite alternate',
};

const customStyles = `
  @keyframes moveEvenRow {
    0% {
      transform: translateX(0%);   
    }    
    100% {
      transform: translateX(-430%);       
    } 
  }
  @keyframes moveOddRow {
    0% {
      transform: translateX(-430%);
    }
    
    100% {
      transform: translateX(-75%);
    }
   
    
  }
  
  
`;

function HeroHomePageGrid({ name, img, alt, prim, rowStyle }) {
  const RowAnimation = ({ children }) => {
    return (
      <Box>
        <style>{customStyles}</style>

        <motion.div
          style={{
            width: '460%',
          }}
        >
          <Box>{children}</Box>
        </motion.div>
      </Box>
    );
  };

  const transformBackendAttributeIntoReadableOne = (attr) => {
    switch (attr) {
      case 'agi':
        return 'agility';
      case 'str':
        return 'strength';
      case 'int':
        return 'intelligence';
      case 'all':
        return 'all';
      default:
        throw new Error("Attribute doesn't exist");
    }
  };
  const attributeIconUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${transformBackendAttributeIntoReadableOne(
    prim
  )}`;

  const transformAttributeIntoIconSrc = (attr) => {
    switch (attr) {
      case 'agi':
        return `${attributeIconUrl}.png`;
      case 'str':
        return `${attributeIconUrl}.png`;
      case 'int':
        return `${attributeIconUrl}.png`;
      case 'all':
        return 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png';
    }
  };

  return (
    <Link to={`/Hero/${name}`}>
      <RowAnimation style={rowStyle}>
        <Box
          display="flex"
          style={rowStyle}
          background="linear-gradient(to right, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.733) 90%, rgb(0, 0, 0) 100%)"
        >
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            position="relative"
          >
            <Box display="flex" width="100%" cursor="pointer">
              <Image width="250px" height="125px" src={img} alt={alt} />

              <Box
                position="absolute"
                display="flex"
                flexDir="row"
                width="100%"
                height="100%"
                alignItems="flex-end"
                gap="15px"
                fontSize="15px"
                fontWeight="700"
                textTransform="uppercase"
                opacity="0"
                zIndex="3"
                transform="translateY(20%)"
                _hover={{
                  opacity: 1,
                  transform: 'translateY(0%)',
                  transition:
                    'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                }}
              >
                <Box
                  display="flex"
                  width="100%"
                  height="100%"
                  alignItems="flex-end"
                  flexDir="row"
                  gap="10px"
                  marginBottom="15px"
                  marginLeft="5px"
                  zIndex="1"
                >
                  <Image
                    src={transformAttributeIntoIconSrc(prim)}
                    width="30px"
                    height="30px"
                    marginBottom="5px"
                  />

                  <Text
                    fontSize="18px"
                    marginBottom="0"
                    color="#fff"
                    width="100%"
                    height="30px"
                    fontFamily={fontFamily}
                    lineHeight="20px"
                    letterSpacing="2px"
                  >
                    {name}
                  </Text>
                </Box>
                <Box
                  position="absolute"
                  width="100%"
                  height="100%"
                  background="linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.733) 90%, rgb(0, 0, 0) 100%)"
                />
              </Box>
            </Box>
          </motion.div>
        </Box>
      </RowAnimation>
    </Link>
  );
}

export default HeroHomePageGrid;
