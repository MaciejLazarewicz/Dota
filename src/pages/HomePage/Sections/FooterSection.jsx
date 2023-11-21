import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function FooterSection() {
  return (
    <Box
      display="flex"
      flexDir="column"
      background="rgb(0,0,0)"
      width="100%"
      height="30%"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="center"
        gap="50px"
      >
        <Link to="https://www.valvesoftware.com/en/about" cursor="pointer">
          <Image
            width="100px"
            height="30px"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
          />
        </Link>
        <Link to="/Home" cursor="pointer">
          <Image
            width="150px"
            height="30px"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png"
          />
        </Link>
      </Box>
      <Box margin="0 auto" textAlign="center" maxW="500px">
        <Text fontSize="14px" color="#777" letterSpacing="2px">
          Dota oraz logo Dota są znakami handlowymi i/lub zarejestrowanymi
          znakami handlowymi należącymi do Valve Corporation. 2023 Valve
          Corporation, wszelkie prawa zastrzeżone.
        </Text>
      </Box>
    </Box>
  );
}

export default FooterSection;
