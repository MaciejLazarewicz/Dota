import { Box, Image, Text } from '@chakra-ui/react';

function HeroesGrid({ name, img, alt, prim, icon }) {
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
    <Box display="flex">
      <Box display="grid">
        <Image src={img} alt={name} />
        <Box position="absolute">
          <Box>
            <Image src={transformAttributeIntoIconSrc(prim)} />
            <Text>{name}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroesGrid;
