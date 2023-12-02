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

import { useBreakpoint } from '../../../components/constants/BreakPoints';

function ChooseSection() {
  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');

  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');
  const [isBreakPoint600] = useBreakpoint('isBreakPoint600');

  const darkFont1200 = {
    fontSize: '44px',
  };
  const darkFont900 = {
    fontSize: '36px',
  };

  const lightFont1200 = {
    fontSize: ' 60px',
  };
  const lightFont900 = {
    fontSize: ' 44px',
  };

  const descriptionFont1200 = {
    marginBottom: '-80px',
  };

  const descriptionFont900 = {
    fontSize: '18px',
  };
  const descriptionFont600 = {
    fontSize: '14px',
  };

  const darkFontBreakpoints = {
    ...darkFont,
    ...(isBreakPoint1200 && darkFont1200),
    ...(isBreakPoint900 && darkFont900),
  };
  const lightFontBreakpoints = {
    ...lightFont,
    ...(isBreakPoint1200 && lightFont1200),
    ...(isBreakPoint900 && lightFont900),
  };

  const descriptionFontBreakpoints = {
    ...descriptionFont,
    ...(isBreakPoint1200 && descriptionFont1200),
    ...(isBreakPoint900 && descriptionFont900),
    ...(isBreakPoint600 && descriptionFont600),
  };

  return (
    <Box
      width="100%"
      maxW="100%"
      height={isBreakPoint900 ? '1400px' : '1800px'}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      display="flex"
      flexDir="column"
      backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/heroes_full.jpg"
    >
      <Gradient />

      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        height="30%"
        width="100%"
        justifyContent="center"
        position="absolute"
        top={isBreakPoint900 ? '25%' : '35%'}
      >
        <BottomAnimation>
          <Text style={darkFontBreakpoints} fontFamily={fontFamily}>
            Who will you
          </Text>
          <Text style={lightFontBreakpoints} fontFamily={fontFamily}>
            choose ?
          </Text>
        </BottomAnimation>

        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          width="100%"
          marginBottom="-35px"
        >
          <Text
            style={descriptionFontBreakpoints}
            textAlign="center"
            width="60%"
          >
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
        top={isBreakPoint900 ? '55%' : '65%'}
        width="100%"
      >
        <CommonButton>
          <Text>View all heroes</Text>
        </CommonButton>
      </Box>
    </Box>
  );
}

export default ChooseSection;
