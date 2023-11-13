import { Box, Text, Image } from '@chakra-ui/react';
import getHeroSkills, { formattedName } from './HeroSkillsConstants';
import { useState } from 'react';
import { heroSkills } from './HeroSkills';

function HeroSkillsDetails({ name, heroId }) {
  const [currentHeroId, setCurrentHeroId] = useState(heroId);

  const {
    firstSkill,
    secondSkill,
    thirdSkill,
    fourthSkill,
    fifthSkill,
    sixthSkill,
    seventhSkill,
    eighthSkill,
    ninthSkill,
    tenthSkill,
    videoUrl,
    imagePath,
  } = getHeroSkills(currentHeroId, formattedName(name));

  console.log('HeroSkills:', heroSkills); // Dodaj log
  console.log('HeroId:', heroId); // Dodaj log
  console.log('FormattedName:', formattedName);

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDir="column"
      position="relative"
      backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly.png"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box display="flex" justifyContent="center" width="100%" marginTop="40px">
        <Text
          fontSize="20px"
          letterSpacing="3px"
          textTransform="uppercase"
          color="#fff"
        >
          Szczegóły umiejętności
        </Text>
      </Box>
      <Box
        width="100%"
        justifyContent="center"
        display="flex"
        flexDir="row"
        gap="20px"
      >
        <Box display="flex" flexDir="column" width="40%">
          <video width="100%" src={`${videoUrl}${fourthSkill}.webm `} />
          <Box
            width="100%"
            display="flex"
            gap="15px"
            justifyContent="center"
            marginTop="-25px"
            zIndex="999"
          >
            <Image width="75px" height="75px" />
            <Image width="75px" height="75px" />
            <Image width="75px" height="75px" />
            <Image width="75px" height="75px" />
            <Image width="75px" height="75px" />
            <Image width="75px" height="75px" />
          </Box>
        </Box>
        <Box width="40%" display="flex" flexDir="column">
          <Box display="flex" flexDir="row">
            <Box>
              <Box width="100px" height="100px" bgColor="#f51" />
            </Box>
            <Box
              display="flex"
              height="fit-content"
              flexDir="column"
              width="100%"
              bgColor="#ffff"
            >
              <Text>Mana Break</Text>
              <Text>
                Spala manę wroga z każdym atakiem i zadaje celowi obrażenia
                równe pewnemu procentowi spalonej many. Jednostki bez many są
                spowalniane na krótki czas.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSkillsDetails;
