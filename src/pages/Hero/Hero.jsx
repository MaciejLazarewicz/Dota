import { Box, Text, Image } from '@chakra-ui/react';
import Header from '../../components/Header';
import FooterSection from '../HomePage/Sections/FooterSection';
import { fontFamily } from '../../components/constants/FontFamily';
import { complexityIds } from '../Heroes/Heroes';

function Hero({ name, img, prim, id, attackType }) {
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

  const formattedName = name
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace('-', '');

  return (
    <Box
      width="100%"
      position="relative"
      display="flex"
      flexDir="column"
      overflow="hidden"
    >
      <Box
        width="100%"
        height="85vh"
        backgroundSize="100% auto"
        backgroundPosition="center-top"
        backgroundRepeat="no-repeat"
        overflow="hidden"
        position="relative"
        backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//backgrounds/greyfade.jpg"
      >
        <Box width="100%" position="absolute" zIndex="999">
          <Header />
        </Box>
        <Box
          width="150%"
          height="650px"
          transform="skewY(-45deg) "
          position="absolute"
          overflow="hidden"
          backgroundColor="rgba(0,0,0,0.37)"
        />
        {/* <Box>Button do bohaterow</Box> */}
        <Box
          display="flex"
          justifyContent="center"
          width="80%"
          height="100%"
          marginTop="30px"
          position="absolute"
          right="-5%"
        >
          <video
            autoPlay
            loop
            muted
            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${formattedName}.webm`}
          />
        </Box>
        <Box
          left="0px"
          bottom="0px"
          right="0px"
          position="absolute"
          width="100%"
          height="100%"
          background="linear-gradient(rgba(0,0,0,0) 70%, rgba(0,0,0,0.733) 100%,rgb(0,0,0)100%)"
        />
        <Box
          display="flex"
          flexDir="column"
          position="relative"
          marginTop="100px"
          marginLeft="300px"
        >
          <Box display="flex" flexDir="row">
            <Image
              width="30px"
              height="30px"
              src={transformAttributeIntoIconSrc(prim)}
            />
            <Text> {transformBackendAttributeIntoReadableOne(prim)}</Text>
          </Box>

          <Text>{name}</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Box display="flex" flexDir="row">
            <Image
              width="24px"
              height="24px"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg"
            />
            <Text>{attackType}</Text>
          </Box>
          <Box>
            <Text>Złożoność</Text>
            <Box display="flex" flexDir="row" gap="20px">
              {[1, 2, 3].map((index) => (
                <Box
                  key={index}
                  width="15px"
                  height="15px"
                  border="1px solid #fff"
                  transform="rotateZ(45deg)"
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          width="800px"
          left="-320px"
          bottom="80px"
          marginRight="50px"
          display="flex"
          flexDir="row"
          alignItems="center"
          transform="rotate(270deg)"
          position="relative"
          fontSize="17px"
          fontWeight="600"
          textTransform="uppercase"
          gap="12px"
        >
          <Image
            width="22px"
            height="22px"
            src={transformAttributeIntoIconSrc(prim)}
          />
          <Text fontFamily={fontFamily} color="#fff">
            {name}
          </Text>
          <Text color="#888">{id}</Text>
          <Box flexGrow="1" height="2px" backgroundColor="#555" />
        </Box>
      </Box>
      {/* <Box>Details bar</Box>
      <Box>UnderBar</Box> */}
      {/* <FooterSection /> */}
    </Box>
  );
}

export default Hero;
