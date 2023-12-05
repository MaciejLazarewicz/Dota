import { Box, Image, Text } from '@chakra-ui/react';
import CommonButton from '../../../components/CommonButton';
import BottomAnimation from '../../../components/BottomAnimation';
import { fontFamily } from '../../../components/constants/FontFamily';
import OrangeDivider from '../../../components/OrangeDivider';

import FontStyles from '../../../components/constants/FontVariables';
import { useBreakpoint } from '../../../components/constants/BreakPoints';
import Gradient from '../../../components/Gradient';

function BattleSection() {
  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');
  const [isBreakPoint450] = useBreakpoint('isBreakPoint450');
  const styles = FontStyles();

  return (
    <Box
      width="100%"
      height="100%"
      min-height="764px"
      justifyItems="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      position="relative"
      backgroundColor="#000000"
      paddingBottom="50px"
    >
      <Box
        alignItems="center"
        flexDir="column"
        display="flex"
        width="100%"
        height="100%"
      >
        <Image
          width="100%"
          height="70%"
          src={
            isBreakPoint1200
              ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/battle_mobile.jpg'
              : 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg'
          }
          alt="Battle Image"
          filter={isBreakPoint1200 ? 'brightness(0.7)' : 'brightness(0.4)'}
        />
      </Box>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top={isBreakPoint1200 ? '30%' : '10%'}
        width="100%"
        marginTop={isBreakPoint450 ? '-85px' : 0}
      >
        <BottomAnimation>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            flexDir="column"
            alignItems="center"
            textAlign="center"
          >
            <Text style={styles.darkFontBreakpoints} fontFamily={fontFamily}>
              Join the
            </Text>

            <Text
              style={styles.lightFontBreakpoints}
              fontFamily={fontFamily}
              marginLeft="5%"
            >
              battle of the ancients
            </Text>
          </Box>
        </BottomAnimation>

        <OrangeDivider />
        <Box
          display="flex "
          flexDir="column"
          alignItems="center"
          marginTop="-15px"
        >
          <Text
            textAlign="center"
            width="60%"
            style={styles.descriptionFontBreakpoints}
          >
            Every day, millions of players worldwide enter the battle as one of
            over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest
            multi-player action RTS game ever made and there's always a new
            strategy or tactic to discover. It's completely free to play and
            always will be – start defending your ancient now.
          </Text>
          <CommonButton>
            <Text>See what's new</Text>
          </CommonButton>
        </Box>
      </Box>
    </Box>
  );
}

export default BattleSection;
