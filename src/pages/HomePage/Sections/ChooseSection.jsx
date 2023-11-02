import { Box, Text } from '@chakra-ui/react';
import CommonButton from '../../../components/constants/CommonButton';
import Gradient from '../../../components/constants/Gradient';
import { fontFamily } from '../../../components/constants/FontFamily';
import BottomAnimation from '../../../components/constants/BottomAnimation';
import {
  lightFont,
  darkFont,
  descriptionFont,
} from '../../../components/constants/FontVariables';
import OrangeDivider from '../../../components/constants/OrangeDivider';

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
      >
        <BottomAnimation>
          <Text style={{ ...darkFont }} fontFamily={fontFamily}>
            Kogo
          </Text>
          <Text style={{ ...lightFont }} fontFamily={fontFamily}>
            Wybierzesz ?
          </Text>
        </BottomAnimation>
        <OrangeDivider />
        <Text style={{ ...descriptionFont }} textAlign="center" width="50%">
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
