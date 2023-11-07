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
        position="absolute"
        top="40%"
        width="80%"
        left="10%"
      >
        <BottomAnimation>
          <Text
            marginBottom="0"
            style={{ ...darkFont }}
            fontFamily={fontFamily}
          >
            Dołącz do
          </Text>

          <Text
            marginTop="0"
            marginBottom="10px"
            style={{ ...lightFont }}
            fontFamily={fontFamily}
          >
            bitwy starożytnych
          </Text>
        </BottomAnimation>

        <OrangeDivider />

        <Text
          marginTop="10px"
          textAlign="center"
          width="60%"
          style={{ ...descriptionFont }}
        >
          Każdego dnia miliony graczy na całym świecie wkracza do walki jako
          jeden z ponad setki bohaterów Dota w drużynowych starciach 5 na 5.
          Dota to najgłębsza wieloosobowa strategiczna gra akcji czasu
          rzeczywistego, jaka kiedykolwiek powstała, i zawsze istnieje jakaś
          strategia lub taktyka do odkrycia. Gra jest całkowicie darmowa i
          zawsze będzie – zacznij bronić swojego Starożytnego już teraz.
        </Text>
        <CommonButton>
          <Text textTransform="uppercase">Zobacz, co nowego</Text>
        </CommonButton>
      </Box>
    </Box>
  );
}

export default BattleSection;
