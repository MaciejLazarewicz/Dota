/* eslint-disable react/prop-types */
import { Box, Image, Text } from '@chakra-ui/react';
import { fontFamily } from '../../../components/constants/FontFamily';
import { Link } from 'react-router-dom';

function HeroesGrid({ name, img, prim }) {
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
      <Box display="flex">
        <Box
          display="flex"
          flexDir="column"
          cursor="pointer"
          position="relative"
          _hover={{
            transform: 'scale(1.5)',
            transition: 'transform 0.4s ease-in-out',
            zIndex: 4,
          }}
        >
          <Image width="250px" height="125px" src={img} alt={name} />

          <Box
            display="flex "
            position="absolute"
            width="100%"
            height="100%"
            opacity="0"
            _hover={{
              opacity: 1,
              transform: 'translateY(-10%)',
              transition:
                'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
            }}
          >
            <Box
              display="flex"
              alignItems="flex-end"
              paddingLeft="20px"
              paddingBottom="15px"
              transform="translateY(10%)"
              width="100%"
              gap="10px"
              background="linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.733) 90%, rgb(0, 0, 0) 100%)"
            >
              <Image
                src={transformAttributeIntoIconSrc(prim)}
                width="30px"
                height="30px"
              />
              <Text
                fontWeight="700"
                fontSize="18px"
                marginBottom="0"
                color="#fff"
                width="100%"
                height="30px"
                fontFamily={fontFamily}
                lineHeight="20px"
                letterSpacing="2px"
                textTransform="uppercase"
              >
                {name}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default HeroesGrid;
