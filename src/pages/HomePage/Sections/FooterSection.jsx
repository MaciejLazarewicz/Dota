import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useBreakpoint } from '../../../components/constants/BreakPoints';

function FooterSection() {
  const [isBreakPoint450] = useBreakpoint('isBreakPoint450');

  const valveLogoSizes450 = {
    width: '70px',
    height: '25px',
  };

  const valveLogoSize = {
    width: '100px',
    height: '30px',
    ...(isBreakPoint450 && valveLogoSizes450),
  };

  const dotaLogoSizes450 = {
    width: '100px',
    height: '20px',
  };
  const dotaLogoSize = {
    width: '150px',
    height: '30px',
    ...(isBreakPoint450 && dotaLogoSizes450),
  };

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
        marginTop="50px"
      >
        <Link to="https://www.valvesoftware.com/en/about" cursor="pointer">
          <Image
            style={valveLogoSize}
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
          />
        </Link>
        <Link to="/Home" cursor="pointer">
          <Image
            style={dotaLogoSize}
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
