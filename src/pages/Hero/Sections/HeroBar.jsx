import { Box, Image, Text } from '@chakra-ui/react';
import { GiHealthNormal, GiFizzingFlask } from 'react-icons/gi';
import { useBreakpoint } from '../../../components/constants/BreakPoints';

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
  const renderRoleBox = (role) => (
    <Box key={role}>
      <Text>{role}</Text>
      <Box
        marginTop="-10px"
        width="80%"
        height="6px"
        backgroundColor={roles.includes(role) ? '#fff' : '#4c4c4c'}
        boxShadow={
          roles.includes(role)
            ? '0px 0px 10px #427ed1, 0px 0px 10px #427ed1'
            : 'none'
        }
      />
    </Box>
  );

  const rolesToRender = [
    'Carry',
    'Support',
    'Nuker',
    'Disabler',
    'Jungler',
    'Durable',
    'Escape',
    'Pusher',
    'Initiator',
  ];

  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');
  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');

  const characterDataFont = {
    color: '#969696',
    fontSize: '18px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };
  const dividerColor = {
    backgroundColor: '#4f4f4f',
  };

  const verticalDivider = {
    ...dividerColor,
    width: '1px',
    height: '80%',
  };
  const horizontalDivider = {
    ...dividerColor,
    width: '100%',
    height: '2px',
  };

  return (
    <Box width="100%">
      <Box
        width="100%"
        height={isBreakPoint900 ? '80vh' : '25vh'}
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
          padding="20px 0px"
          position="relative"
          display="flex"
          flexDir={isBreakPoint900 ? 'column' : 'row'}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            width={isBreakPoint900 ? '100%' : '30%'}
            flexDir="column"
            gap={isBreakPoint900 ? '' : '60px'}
            textAlign="center"
          >
            {isBreakPoint900 ? (
              <Text style={characterDataFont}>Attributes</Text>
            ) : null}

            <Box
              display="flex"
              flexDir="row"
              justifyContent="center"
              marginLeft={isBreakPoint1200 ? '5%' : '25%'}
            >
              <Box
                height="fit-content"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Image width="150px" height="84px" src={img} />
                <Box
                  display="flex"
                  flexDir="column"
                  width="150px"
                  height="60px"
                >
                  <Box
                    display="flex"
                    height="30px"
                    justifyContent="space-between"
                    alignItems="center"
                    background="linear-gradient(45deg, #fc0000, #e99797)"
                    paddingX="15px"
                  >
                    <Text fontSize="15px" color="#fff" fontWeight="bold">
                      {baseHP}
                    </Text>
                    <GiHealthNormal />

                    <Text color="#fff" fontWeight="bold">
                      {baseHPRegen}
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    height="30px"
                    background="linear-gradient(to right, #0059ff, #b0bbf8)"
                    paddingX="15px"
                  >
                    <Text color="#fff" fontWeight="bold">
                      {baseMP}
                    </Text>
                    <GiFizzingFlask />

                    <Text color="#fff" fontWeight="bold">
                      {baseMPRegen}
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box
                width="30%"
                display="flex"
                flexDir="column"
                alignItems="center"
                marginLeft="30px"
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
                    + {strengthGain}
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
                    + {agilityGain}
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
                    + {intelligenceGain}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          {isBreakPoint900 ? <Box style={horizontalDivider} /> : null}
          {isBreakPoint900 ? (
            <Text marginBottom="5px" style={characterDataFont}>
              Roles
            </Text>
          ) : null}

          {isBreakPoint900 ? null : (
            <Box backgroundColor="#4f4f4f" width="1px" height="80%" />
          )}

          <Box
            width={isBreakPoint900 ? '100%' : '30%'}
            display="grid"
            columnGap="0"
            gridTemplateColumns="repeat(3, 1fr)"
            fontSize="15px"
            color="#fff"
            letterSpacing="1px"
            marginLeft={isBreakPoint900 ? '5%' : ''}
          >
            {rolesToRender.map(renderRoleBox)}
          </Box>
          {isBreakPoint900 ? <Box style={horizontalDivider} /> : null}

          {isBreakPoint900 ? null : <Box style={verticalDivider} />}
          {isBreakPoint900 ? (
            <Text marginBottom="5px" style={characterDataFont}>
              Stats
            </Text>
          ) : null}
          <Box
            width={isBreakPoint900 ? '100%' : '30%'}
            display="grid"
            gridTemplateColumns="repeat(3,1fr)"
          >
            <Box>
              <Text
                color="#969696"
                fontSize="16px"
                textTransform="uppercase"
                letterSpacing="1px"
                fontWeight="bold"
              >
                Attack
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
                Defense
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
                Mobiility
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
      {isBreakPoint900 ? null : (
        <Box
          width="70%"
          display="flex"
          justifyContent="space-between"
          position="relative"
          marginTop="-60px"
          left="15%"
          right="15%"
        >
          <Text style={characterDataFont}>Attributes</Text>
          <Text style={characterDataFont}>Roles</Text>
          <Text style={characterDataFont}>Stats</Text>
        </Box>
      )}
    </Box>
  );
}

export default HeroBar;
