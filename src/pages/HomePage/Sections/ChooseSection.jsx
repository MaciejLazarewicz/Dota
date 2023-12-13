import { Box, Text } from '@chakra-ui/react';
import CommonButton from '../../../components/CommonButton';
import Gradient from '../../../components/Gradient';
import { fontFamily } from '../../../components/constants/FontFamily';
import BottomAnimation from '../../../components/BottomAnimation';
import FontStyles from '../../../components/constants/FontVariables';

import { useBreakpoint } from '../../../components/constants/BreakPoints';
import UnstyledReactRouterLink from '../../../components/UnstyledReactRouterLink';

function ChooseSection() {
  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');

  const [isBreakPoint350] = useBreakpoint('isBreakPoint350');

  const styles = FontStyles();

  return (
    <Box
      width="100%"
      maxW="100%"
      height="100vh"
      backgroundSize="2000px"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      display="flex"
      flexDir="column"
      backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/heroes_full.jpg"
      marginBottom={isBreakPoint900 ? '200px' : '400px'}
    >
      <Gradient />

      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        width="100%"
        position="absolute"
        top={isBreakPoint900 ? '15%' : '30%'}
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
        git
        alignItems="center"
        position="absolute"
        top={isBreakPoint900 ? '55%' : '75%'}
        width="100%"
        marginTop={isBreakPoint350 ? '35px' : '-20px'}
      >
        <UnstyledReactRouterLink to="/Heroes">
          <CommonButton>
            <Text>View all heroes</Text>
          </CommonButton>
        </UnstyledReactRouterLink>
      </Box>
    </Box>
  );
}

export default ChooseSection;
