import { Box, Text, Image } from '@chakra-ui/react';
import Header from '../../components/Header';
import FooterSection from '../HomePage/Sections/FooterSection';

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

  return (
    <Box width="100%" background="#b4b4b4">
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
        >
          <video
            autoPlay
            loop
            muted
            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${name.toLowerCase()}.webm`}
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
          <Image
            width="30px"
            height="30px"
            src={transformAttributeIntoIconSrc(prim)}
          />
          <Text> {transformBackendAttributeIntoReadableOne(prim)}</Text>
          <Text>{name}</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Box>
            <Text>{attackType}</Text>
          </Box>
          <Box>
            <Text>Złożoność</Text>
          </Box>
        </Box>

        <Box
          width="800px"
          left="-320px"
          top="0"
          marginRight="50px"
          display="flex"
          flexDir="row"
          alignItems="center"
          transform="rotate(270deg)"
          position="absolute"
        >
          <Image src={transformAttributeIntoIconSrc(prim)} />
          <Text color="#fff">{name}</Text>
          <Text>{id}</Text>
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
