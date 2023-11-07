import { Box, Image, Text } from '@chakra-ui/react';

import OrangeDivider from '../../../components/OrangeDivider';
import {
  lightFont,
  descriptionFont,
} from '../../../components/constants/FontVariables';
import { fontFamily } from '../../../components/constants/FontFamily';
import BottomAnimation from '../../../components/BottomAnimation';

function ProCircuitSection() {
  return (
    <Box width="100%" position="relative">
      <Box
        display="flex"
        flexDir="column"
        width="100%"
        alignItems="center"
        backgroundPosition="center-top"
        backgroundRepeat="no-repeat"
      >
        <Image
          width="100%"
          height="100%"
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc.jpg"
          alt="Circuit Section Background Image"
        />
        <Box position="absolute" marginTop="25%">
          <Image src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg" />
        </Box>
        <Box
          display="flex"
          position="absolute"
          bottom="-15%"
          width="60%"
          flexDir="column"
          alignItems="center"
          textAlign="center"
          marginTop="20px"
          marginBottom="20px"
        >
          <Text
            marginBottom="25px"
            style={{ ...lightFont }}
            fontFamily={fontFamily.fontFamily}
          >
            Dota Pro Circuit
          </Text>

          <OrangeDivider />
          <Box />
          <Text style={{ ...descriptionFont }}>
            Gdy akurat nie wspinasz się po szczeblach rankingów, będziesz w
            stanie uczyć się od najlepszych. Dota Pro Circuit to rozgrywki
            rywalizacyjne w Dota 2 na najwyższym poziomie, które są
            transmitowane regularnie w kliencie gry, w serwisie Twitch oraz na
            SteamTV. Ich kulminację stanowią największe zawody e-sportowe na
            świecie, czyli The International; profesjonalna scena Dota 2 jest
            wydarzeniem, którego nie można przegapić.
          </Text>
        </Box>

        <Box position="absolute" left="15%" top="5%">
          <BottomAnimation>
            <Image
              width="300px"
              height="200px"
              src=" 	https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_1.jpg"
            />
          </BottomAnimation>
        </Box>
        <Box position="absolute" right="0">
          <BottomAnimation>
            <Image
              width="300px"
              height="200px"
              src=" https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_2.jpg"
            />
          </BottomAnimation>
        </Box>
        <Box position="absolute" left="0" top="40%">
          <BottomAnimation>
            <Image
              width="300px"
              height="200px"
              src=" 	https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_3.jpg"
            />
          </BottomAnimation>
        </Box>
      </Box>
    </Box>
  );
}

export default ProCircuitSection;
