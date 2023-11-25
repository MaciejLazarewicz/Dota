import { Box, Image, Text } from '@chakra-ui/react';
import CommonButton from '../../../components/CommonButton';
import BottomAnimation from '../../../components/BottomAnimation';
import { fontFamily } from '../../../components/constants/FontFamily';
import { useBreakpoint } from '../../../components/constants/BreakPoints';
import {
  lightFont,
  darkFont,
  descriptionFont,
} from '../../../components/constants/FontVariables';
import OrangeDivider from '../../../components/OrangeDivider';

function BattleSection() {
  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');
  const [isBreakPoint1500] = useBreakpoint('isBreakPoint1500');
  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');
  const [isBreakPoint600] = useBreakpoint('isBreakPoint600');
  const [isBreakPoint450] = useBreakpoint('isBreakPoint450');

  const darkFont1500 = {
    fontSize: '50px',
    width: '55%',
  };
  const darkFont1200 = {
    fontSize: '44px',
    transform: 'translateX(-5%)',
  };
  const darkFont900 = {
    fontSize: '36px',
    transform: 'translateX(-4%)',
  };
  const darkFont600 = {
    fontSize: '28px',
    transform: 'translateX(-10%)',
  };
  const darkFont450 = {
    fontSize: '20px',
  };

  const darkFontBreakpoints = {
    ...darkFont,
    ...(isBreakPoint1500 && darkFont1500),
    ...(isBreakPoint1200 && darkFont1200),

    ...(isBreakPoint900 && darkFont900),
    ...(isBreakPoint600 && darkFont600),
    ...(isBreakPoint450 && darkFont450),
  };

  const lightFont1500 = {
    fontSize: '56px',
    marginRight: '35px',
  };
  const lightFont900 = {
    fontSize: '34px',
  };
  const lightFont600 = {
    fontSize: '20px',
  };
  const lightFont450 = {
    fontSize: '14px',
  };

  const lightFontBreakpoints = {
    ...lightFont,
    ...(isBreakPoint1500 && lightFont1500),
    ...(isBreakPoint900 && lightFont900),
    ...(isBreakPoint600 && lightFont600),
    ...(isBreakPoint450 && lightFont450),
  };

  const descriptionFont1500 = {
    fontSize: '24px',
    marginTop: '16px',
  };
  const descriptionFont900 = {
    fontSize: '16px',
  };
  const descriptionFont600 = {
    fontSize: '14px',
    marginTop: '-15px',
  };
  const descriptionFont450 = {};

  const descriptionFontBreakpoints = {
    ...descriptionFont,
    ...(isBreakPoint1500 && descriptionFont1500),
    ...(isBreakPoint900 && descriptionFont900),
    ...(isBreakPoint600 && descriptionFont600),
    ...(isBreakPoint450 && descriptionFont450),
  };

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
      >
        <BottomAnimation>
          <Text
            style={darkFontBreakpoints}
            fontFamily={fontFamily}
            width="58%"
            marginLeft="40%"
          >
            Join the
          </Text>

          <Text
            style={lightFontBreakpoints}
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
          style={descriptionFontBreakpoints}
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
  );
}

export default BattleSection;
