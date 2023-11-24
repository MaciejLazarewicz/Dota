import { Box, Image, Text } from '@chakra-ui/react';
import CommonButton from '../../../components/CommonButton';
import BottomAnimation from '../../../components/BottomAnimation';
import { fontFamily } from '../../../components/constants/FontFamily';
import { useBreakpoint } from '../../../components/constants/BreakPoints';
import {
  lightFont,
  lightFontWidth600,
  lightFontWidth900,
  lightFontWidth1500,
  darkFont,
  darkFontWidth1500,
  descriptionFont,
} from '../../../components/constants/FontVariables';
import OrangeDivider from '../../../components/OrangeDivider';

function BattleSection() {
  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');
  const [isBreakPoint1500] = useBreakpoint('isBreakPoint1500');

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
        top="10%"
        width="100%"
      >
        <BottomAnimation>
          <Text
            style={
              isBreakPoint1500 ? { ...darkFontWidth1500 } : { ...darkFont }
            }
            fontFamily={fontFamily}
            width="60%"
            marginLeft="40%"
          >
            Join the
          </Text>

          <Text
            style={
              isBreakPoint1500
                ? {
                    ...((lightFontWidth1500 && lightFontWidth900) ||
                      lightFontWidth600),
                  }
                : { ...lightFont }
            }
            fontFamily={fontFamily}
            marginLeft="5%"
          >
            battle of the ancients
          </Text>
        </BottomAnimation>

        <OrangeDivider />

        <Text
          marginTop="10px"
          textAlign="center"
          width="60%"
          style={{ ...descriptionFont }}
        >
          Every day, millions of players worldwide enter the battle as one of
          over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest
          multi-player action RTS game ever made and there's always a new
          strategy or tactic to discover. It's completely free to play and
          always will be – start defending your ancient now.
        </Text>
        <CommonButton>
          <Text textTransform="uppercase">See what's new</Text>
        </CommonButton>
      </Box>
    </Box>
  );
}

export default BattleSection;
