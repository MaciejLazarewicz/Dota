import { Box, Image, Text } from '@chakra-ui/react';
import OrangeDivider from '../../../components/OrangeDivider';
import CommonButton from '../../../components/CommonButton';
import FontStyles from '../../../components/constants/FontVariables';

function JoinBattleSection() {
  const styles = FontStyles();
  return (
    <Box
      width="100%"
      height="50%"
      display="flex"
      flexDir="column"
      position="relative"
    >
      <Image
        width="100%"
        height="100%"
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/background4.png"
      />
      <Box
        position="absolute"
        color="#f51"
        display="flex"
        flexDir="column"
        top="10%"
        left="5%"
      >
        <Text style={styles.darkFontBreakpoints}>Join the</Text>
        <Text style={styles.lightFontBreakpoints}>Battle</Text>

        <OrangeDivider />
        <CommonButton>
          <Text style={styles.buttonFont}>Play for free</Text>
        </CommonButton>
      </Box>
    </Box>
  );
}

export default JoinBattleSection;
