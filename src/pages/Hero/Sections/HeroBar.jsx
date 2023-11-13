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
  roles,
  attackRate,
  baseMR,
  moveSpeed,
  attackPoint,
  dayVision,
  nightVision,
}) {
  return (
    <Box width="100%">
      <Box
        width="100%"
        height="30vh"
        borderTop="2px solid #282828"
        borderBottom="2px solid #2c2e2e"
        boxShadow="0px 0px 8px #000"
        display="flex"
        justifyContent="center"
        background="linear-gradient(80deg, #252728 0%, #101415 100%)"
        minH="221px"
        flexDir="row"
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
          <Box display="flex" width="30%" flexDir="column" gap="60px">
            <Box display="flex" flexDir="row">
              <Box
                height="fit-content"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Image width="150px" height="84px" src={img} />
                <Box display="flex" flexDir="column" width="100%" height="60px">
                  <Box
                    display="flex"
                    width="100%"
                    height="30px"
                    justifyContent="center"
                    alignItems="center"
                    background="linear-gradient(45deg, #8B0000, #BF3030)"
                    gap="70px"
                  >
                    <Text>{baseHP}</Text>

                    <Text>{baseHPRegen}</Text>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="30px"
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
                marginLeft="100px"
              >
                <Box
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                  gap="15px"
                  marginTop="-15px"
                  marginBottom="5px"
                >
                  <Image
                    width="30px"
                    height="30px"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
                  />
                  <Text
                    color="#fff"
                    fontSize="20px"
                    textShadow="1px 1px 2px #000"
                    fontWeight="600"
                  >
                    {baseStrength}
                  </Text>
                  <Text
                    color="#999"
                    fontSize="15px"
                    textShadow="1px 1px 2px #000"
                  >
                    {strengthGain}
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                  gap="15px"
                  marginTop="-15px"
                  marginBottom="5px"
                >
                  <Image
                    width="30px"
                    height="30px"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
                  />
                  <Text
                    fontSize="20px"
                    textShadow="1px 1px 2px #000"
                    fontWeight="600"
                    color="#fff"
                  >
                    {baseAgility}
                  </Text>
                  <Text
                    color="#999"
                    fontSize="15px"
                    textShadow="1px 1px 2px #000"
                  >
                    {agilityGain}
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                  gap="15px"
                  marginTop="-15px"
                  marginBottom="5px"
                >
                  <Image
                    width="30px"
                    height="30px"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png"
                  />
                  <Text
                    fontSize="20px"
                    textShadow="1px 1px 2px #000"
                    fontWeight="600"
                    color="#fff"
                  >
                    {baseIntelligence}
                  </Text>
                  <Text
                    color="#999"
                    fontSize="15px"
                    textShadow="1px 1px 2px #000"
                  >
                    {intelligenceGain}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box backgroundColor="#4f4f4f" width="1px" height="80%" />

          <Box
            width="30%"
            display="grid"
            columnGap="0"
            marginX="0"
            gridTemplateColumns="repeat(3, 1fr)"
            fontSize="15px"
            color="#fff"
            letterSpacing="1px"
          >
            <Box>
              <Text>Carry</Text>
              <Box width="100px" height="2px" backgroundColor="#4c4c4c"></Box>
            </Box>
            <Box>
              <Text>Wsparcie</Text>
              <Box width="100px" height="2px" backgroundColor="#4c4c4c"></Box>
            </Box>
            <Box>
              <Text>Nuker</Text>
              <Box width="100px" height="2px" backgroundColor="#4c4c4c"></Box>
            </Box>
            <Box>
              <Text>Wyłączający</Text>
              <Box width="100px" height="2px" backgroundColor="#4c4c4c"></Box>
            </Box>
            <Box>
              <Text>Dżungler</Text>
              <Box width="100px" height="2px" backgroundColor="#4c4c4c"></Box>
            </Box>
            <Box>
              <Text>Wytrzymały</Text>
              <Box width="100px" height="2px" backgroundColor="#4c4c4c"></Box>
            </Box>
            <Box>
              <Text>Ucieczka</Text>
              <Box width="100px" height="2px" backgroundColor="#4c4c4c"></Box>
            </Box>
            <Box>
              <Text>Przepychający</Text>
              <Box width="100px" height="2px" backgroundColor="#4c4c4c"></Box>
            </Box>
            <Box>
              <Text>Inicjator</Text>
              <Box width="100px" height="2px" backgroundColor="#4c4c4c"></Box>
            </Box>
          </Box>
          <Box backgroundColor="#4f4f4f" width="1px" height="80%" />
          <Box width="30%" display="grid" gridTemplateColumns="repeat(3,1fr)">
            <Box>
              <Text
                color="#969696"
                fontSize="16px"
                textTransform="uppercase"
                letterSpacing="1px"
                fontWeight="bold"
              >
                Atak
              </Text>
              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                marginTop="-15px"
              >
                <Image
                  height="24px"
                  width="24px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png"
                />
                <Text color="#fff">
                  {baseAttackMin} - {baseAttackMax}
                </Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                marginTop="-15px"
              >
                <Image
                  height="24px"
                  width="24px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png"
                />
                <Text color="#fff">{attackRate}</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                marginTop="-15px"
              >
                <Image
                  height="24px"
                  width="24px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png"
                />
                <Text color="#fff">{attackRange}</Text>
              </Box>
            </Box>
            <Box>
              <Text
                color="#969696"
                fontSize="16px"
                textTransform="uppercase"
                letterSpacing="1px"
                fontWeight="bold"
              >
                Obrona
              </Text>
              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                marginTop="-15px"
              >
                <Image
                  height="24px"
                  width="24px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png"
                />
                <Text color="#fff">{baseArmor}</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                marginTop="-15px"
              >
                <Image
                  height="24px"
                  width="24px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png"
                />
                <Text color="#fff">{baseMR} %</Text>
              </Box>
            </Box>
            <Box>
              <Text
                color="#969696"
                fontSize="16px"
                textTransform="uppercase"
                letterSpacing="1px"
                fontWeight="bold"
              >
                Mobilność
              </Text>
              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                marginTop="-15px"
              >
                <Image
                  height="24px"
                  width="24px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png"
                />
                <Text color="#fff">{moveSpeed}</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                marginTop="-15px"
              >
                <Image
                  height="24px"
                  width="24px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png"
                />
                <Text color="#fff">{attackPoint}</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                gap="15px"
                marginTop="-15px"
              >
                <Image
                  height="24px"
                  width="24px"
                  src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png"
                />
                <Text color="#fff">
                  {dayVision}/{nightVision}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        gap="500px"
        position="relative"
        marginTop="-60px"
      >
        <Text
          color="#969696"
          fontSize="18px"
          textTransform="uppercase"
          letterSpacing="2px"
        >
          Atrybuty
        </Text>
        <Text
          color="#969696"
          fontSize="18px"
          textTransform="uppercase"
          letterSpacing="2px"
        >
          Role
        </Text>
        <Text
          color="#969696"
          fontSize="18px"
          textTransform="uppercase"
          letterSpacing="2px"
        >
          Statystyki
        </Text>
      </Box>
    </Box>
  );
}

export default HeroBar;
