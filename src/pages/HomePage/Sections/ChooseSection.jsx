import { Box, Text } from '@chakra-ui/react';
import CommonButton from '../../../components/constants/CommonButton';
import Gradient from '../../../components/constants/Gradient';
import { textStyle } from './BattleSection';

function ChooseSection() {
  return (
    <Box
      width="100%"
      height="100%"
      minH="2000px"
      backgroundPosition="center top"
      position="relative"
      backgroundImage="url(https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/heroes_full.jpg)"
      backgroundSize="3500px"
      backgroundRepeat="no-repeat"
    >
      <Gradient />
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        height="100%"
        justifyContent="center"
        letterSpacing="2px"
        lineHeight="105%"
        color="#e2dace"
      >
        <Text
          color="rgba(226,218,206,.5647058824)"
          textTransform="uppercase"
          marginBottom="30px"
          fontSize="50px"
          style={textStyle}
        >
          Kogo
        </Text>
        <Text
          textTransform="uppercase"
          marginTop="30px"
          marginBottom="30px"
          fontSize="100px"
          style={textStyle}
        >
          Wybierzesz ?
        </Text>
        <Box
          width="80px"
          height="3px"
          borderRadius="1px"
          backgroundColor="#FF6046"
          marginTop="30px"
          marginBottom="10px"
        />
        <Text lineHeight="115%" fontSize="26px" textAlign="center" width="50%">
          Od magicznych taktyków po zaciekłych brutali i przebiegłe szelmy –
          pula bohaterów w Dota 2 jest ogromna i bezgranicznie różnorodna.
          Uwolnij niesamowite umiejętności i niszczycielskie umiejętności
          ostateczne na swojej ścieżce do zwycięstwa.
        </Text>
        <CommonButton>
          <Text fontSize="20px" textTransform="uppercase">
            Zobacz wszystkich bohaterów
          </Text>
        </CommonButton>
      </Box>
    </Box>
  );
}

export default ChooseSection;
