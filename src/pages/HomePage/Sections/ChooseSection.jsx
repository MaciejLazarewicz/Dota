import { Box, Text, Image } from '@chakra-ui/react';
import CommonButton from '../../../components/CommonButton';
import Gradient from '../../../components/Gradient';
import { fontFamily } from '../../../components/constants/FontFamily';
import BottomAnimation from '../../../components/BottomAnimation';
import {
  lightFont,
  darkFont,
  descriptionFont,
} from '../../../components/constants/FontVariables';
import OrangeDivider from '../../../components/OrangeDivider';

function ChooseSection() {
  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
      display="flex"
      flexDir="column"
    >
      <Gradient />
      <Image
        width="100%"
        height="100%"
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/heroes_full.jpg"
      />

      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        height="30%"
        width="100%"
        justifyContent="center"
        position="absolute"
        top="30%"
      >
        <BottomAnimation>
          <Text style={{ ...darkFont }} fontFamily={fontFamily}>
            Who will you
          </Text>
          <Text style={{ ...lightFont }} fontFamily={fontFamily}>
            choose ?
          </Text>
        </BottomAnimation>
        <OrangeDivider />
        <Box display="flex" flexDir="column" alignItems="center" width="100%">
          <Text style={{ ...descriptionFont }} textAlign="center" width="60%">
            From magical tacticians to fierce brutes and cunning rogues, Dota
            2's hero pool is massive and limitlessly diverse. Unleash incredible
            abilities and devastating ultimates on your way to victory.
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="70%"
        width="100%"
      >
        <CommonButton>
          <Text fontSize="20px">View all heroes</Text>
        </CommonButton>
      </Box>
    </Box>
  );
}

export default ChooseSection;
