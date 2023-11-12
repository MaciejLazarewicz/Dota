import { Box, Image, Text } from '@chakra-ui/react';

function HeroBar({
  name,
  prim,
  id,
  attackType,
  img,
  baseHP,
  baseHPRegen,
  baseMP,
  baseMPRegen,
  baseArmor,
  baseAttackMin,
  baseAttackMax,
  baseStrength,
  baseAgility,
  baseIntelligence,
  strengthGain,
  agilityGain,
  intelligenceGain,
  attackRange,
}) {
  return (
    <Box width="100%" bgColor="#f51">
      <Box
        width="100%"
        height="fit-content"
        borderTop="2px solid #282828"
        borderBottom="2px solid #2c2e2e"
        boxShadow="0px 0px 8px #000"
        display="flex"
        justifyContent="center"
        background="linear-gradient(80deg, #252728 0%, #101415 100%)"
        minH="221px"
      >
        <Box
          width="100%"
          maxWidth="1600px"
          padding="20px 0px"
          position="relative"
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box width="30%" display="flex" flexDir="row" gap="60px">
            <Box
              height="fit-content"
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              bgColor="#f51"
            >
              <Image src={img} />
              <Box display="flex" flexDir="column" width="100%">
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="center"
                  background="linear-gradient(45deg, #8B0000, #BF3030)"
                  gap="70px"
                >
                  <Text>{baseHP}</Text>

                  <Text>{baseHPRegen}</Text>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  width="100%"
                  background="linear-gradient(to right, #1056DB, #73F5FE)"
                  gap="70px"
                >
                  <Text>{baseMP}</Text>

                  <Text>{baseMPRegen}</Text>
                </Box>
              </Box>
            </Box>
            <Box
              width="30%"
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <Box display="flex" flexDir="row" alignItems="center" gap="15px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                />
                <Text>{baseStrength}</Text>
                <Text>{strengthGain}</Text>
              </Box>
              <Box display="flex" flexDir="row" alignItems="center" gap="15px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
                />
                <Text>{baseAgility}</Text>
                <Text>{agilityGain}</Text>
              </Box>
              <Box display="flex" flexDir="row" alignItems="center" gap="15px">
                <Image
                  width="30px"
                  height="30px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                />
                <Text>{baseIntelligence}</Text>
                <Text>{intelligenceGain}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroBar;
