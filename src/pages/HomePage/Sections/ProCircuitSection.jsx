import { Box, Image, Text } from '@chakra-ui/react';

import OrangeDivider from '../../../components/OrangeDivider';
import FontStyles from '../../../components/constants/FontVariables';
import { fontFamily } from '../../../components/constants/FontFamily';
import BottomAnimation from '../../../components/BottomAnimation';

import { useBreakpoint } from '../../../components/constants/BreakPoints';

function ProCircuitSection() {
  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');
  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');
  const [isBreakPoint600] = useBreakpoint('isBreakPoint600');

  const imagesSize1200 = {
    width: '250px',
    height: '150px',
  };
  const imagesSize900 = {
    width: '200px',
    height: '150px',
  };

  const imagesSizeDefault = {
    width: '300px',
    height: '200px',
    ...(isBreakPoint1200 && imagesSize1200),
    ...(isBreakPoint900 && imagesSize900),
  };

  const styles = FontStyles();
  return (
    <Box width="100%" position="relative">
      <Box
        display="flex"
        flexDir="column"
        width="100%"
        height="1150px"
        alignItems="center"
        backgroundSize="2200px"
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
        backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc.jpg"
        alt="Circuit Section Background Image"
      >
        <Box
          display="flex"
          position="absolute"
          width="60%"
          flexDir="column"
          alignItems="center"
          textAlign="center"
          top={isBreakPoint600 ? '55%' : '50%'}
        >
          <Image
            width="75px"
            height="75px"
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//icons/dpc.svg"
          />
          <Text
            marginTop="40px"
            style={styles.darkFontBreakpoints}
            fontFamily={fontFamily.fontFamily}
          >
            The
          </Text>
          <Text
            style={styles.lightFontBreakpoints}
            fontFamily={fontFamily.fontFamily}
          >
            Dota Pro Circuit
          </Text>

          <OrangeDivider />
          <Box />
          <Text style={styles.descriptionFontBreakpoints}>
            When not climbing the ranks, you'll be able to learn from the best.
            The Dota Pro Circuit features ultra-high-level Dota 2 competition
            streaming regularly in the game client, on Twitch and Steam.TV.
            Culminating in the largest e-sports championship in the world, The
            International, professional Dota 2 is an event not to be missed.
          </Text>
        </Box>

        {isBreakPoint600 ? null : (
          <>
            <Box position="absolute" left="15%" top="5%">
              <BottomAnimation>
                <Image
                  style={imagesSizeDefault}
                  src=" 	https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_1.jpg"
                />
              </BottomAnimation>
            </Box>
            <Box position="absolute" right="0">
              <BottomAnimation>
                <Image
                  style={imagesSizeDefault}
                  src=" https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_2.jpg"
                />
              </BottomAnimation>
            </Box>
            <Box
              position="absolute"
              left="0"
              top={isBreakPoint1200 ? '50%' : '45%'}
            >
              <BottomAnimation>
                <Image
                  style={imagesSizeDefault}
                  src=" 	https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/dpc_ti9_3.jpg"
                />
              </BottomAnimation>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProCircuitSection;
