import { Box, Text } from '@chakra-ui/react';
import CommonButton from '../../../components/CommonButton';
import Gradient from '../../../components/Gradient';
import { fontFamily } from '../../../components/constants/FontFamily';
import BottomAnimation from '../../../components/BottomAnimation';
import FontStyles from '../../../components/constants/FontVariables';

import { useBreakpoint } from '../../../components/constants/BreakPoints';

function ChooseSection() {
  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');

  const [isBreakPoint350] = useBreakpoint('isBreakPoint350');

  const styles = FontStyles();

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
        width="100%"
        position="absolute"
        top={isBreakPoint900 ? '25%' : '40%'}
      >
        <BottomAnimation>
          <Box display="flex" flexDir="column" alignItems="center" width="100%">
            <Text style={styles.darkFontBreakpoints} fontFamily={fontFamily}>
              Who will you
            </Text>
            <Text style={styles.lightFontBreakpoints} fontFamily={fontFamily}>
              choose ?
            </Text>
          </Box>
        </BottomAnimation>

        <Box display="flex" flexDir="column" alignItems="center" width="100%">
          <Text
            style={styles.descriptionFontBreakpoints}
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
        marginTop={isBreakPoint350 ? '35px' : '5px'}
      >
        <CommonButton>
          <Text>View all heroes</Text>
        </CommonButton>
      </Box>
    </Box>
  );
}

export default ChooseSection;
