import { Box, Image, Text, Link, useMediaQuery } from '@chakra-ui/react';

function BattleSection() {
  const [isBreakPoint1200] = useMediaQuery('(max-width: 1200px)');
  return (
    <Box
      width="100%"
      min-height="764px"
      justifyItems="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box alignItems="center" flexDir="column" display="flex" width="100%">
        <Image
          width="100%"
          src={
            isBreakPoint1200
              ? 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/battle_mobile.jpg'
              : 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg'
          }
          alt="Battle Image"
          filter={isBreakPoint1200 ? 'brightness(0.7)' : 'brightness(0.4)'}
        />
      </Box>
      <Box display="flex" flexDir="column" alignItems="center">
        <Text fontSize="50px" color="#f51">
          cos
        </Text>
      </Box>
      <Box
        width="100%"
        opacity="1"
        flexDir="column"
        alignItems="center"
        justifyItems="center"
      >
        <Box>
          <Text></Text>
        </Box>
        <Box>
          <Text></Text>
          <Link />
        </Box>
      </Box>
    </Box>
  );
}

export default BattleSection;
