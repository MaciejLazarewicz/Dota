import { Box, Image, Text } from '@chakra-ui/react';

import OrangeDivider from '../../../components/OrangeDivider';
import {
  lightFont,
  darkFont,
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
            style={{ ...darkFont }}
            fontFamily={fontFamily.fontFamily}
          >
            The
          </Text>
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
            When not climbing the ranks, you'll be able to learn from the best.
            The Dota Pro Circuit features ultra-high-level Dota 2 competition
            streaming regularly in the game client, on Twitch and Steam.TV.
            Culminating in the largest e-sports championship in the world, The
            International, professional Dota 2 is an event not to be missed.
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
