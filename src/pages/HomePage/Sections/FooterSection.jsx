import { Box, Text, Image, Link } from '@chakra-ui/react';
import { descriptionFont } from '../../../components/constants/FontVariables';

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
      >
        <Link>
          <Image src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png" />
        </Link>
        <Link>
          <Image src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png" />
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
