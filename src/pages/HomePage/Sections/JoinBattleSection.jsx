import { Box, Text } from '@chakra-ui/react';
import OrangeDivider from '../../../components/OrangeDivider';
import CommonButton from '../../../components/CommonButton';
import FontStyles from '../../../components/constants/FontVariables';

import { useBreakpoint } from '../../../components/constants/BreakPoints';

function JoinBattleSection() {
  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');
  const styles = FontStyles();
  return (
    <Box width="100%" display="flex" flexDir="column" position="relative">
      <Box
        display="flex"
        flexDir="column"
        height={isBreakPoint900 ? ' 250px' : '500px'}
        backgroundSize={isBreakPoint900 ? '1000px' : '1950px'}
        backgroundRepeat="no-repeat"
        backgroundPosition="top"
        backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/background4.png"
      >
        <Box
          position="absolute"
          display="flex"
          flexDir={isBreakPoint900 ? 'row' : 'column'}
          top="10%"
          left="5%"
          width="95%"
          justifyContent="space-between"
          alignItems={isBreakPoint900 ? 'center' : null}
        >
          <Box display="flex" flexDir="column">
            <Text style={styles.darkFontBreakpoints}>Join the</Text>
            <Text style={styles.lightFontBreakpoints}>Battle</Text>

            <OrangeDivider />
          </Box>
          <Box marginRight="25px">
            <CommonButton>
              <Text>Play for free</Text>
            </CommonButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default JoinBattleSection;
