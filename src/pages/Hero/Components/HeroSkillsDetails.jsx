import { Box, Text, Image } from '@chakra-ui/react';
import getHeroSkills, { formattedName } from './HeroSkillsConstants';
import { useState, useEffect } from 'react';

import { imagesStyles } from '../Constants/imageSkillStyles';

function HeroSkillsDetails({
  name,
  heroId,
  refs,
  selectedSkill,
  onSkillImageClick,
}) {
  const [currentHeroId, setCurrentHeroId] = useState(heroId);
  const [selectedImage, setSelectedImage] = useState(1);
  const [brightness, setBrightness] = useState({});

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
  useEffect(() => {
    if (refs && refs[selectedSkill] && refs[selectedSkill].current) {
      refs[selectedSkill].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [refs, selectedSkill]);

  useEffect(() => {
    const initialBrightness = {};
    for (let i = 1; i <= 6; i++) {
      initialBrightness[i] = i === 1 ? 1 : 0.5;
    }
    setBrightness(initialBrightness);
  }, []);

  const handleImageClick = (index) => {
    setBrightness((prevBrightness) => {
      const newBrightness = {};
      for (let i = 1; i <= 6; i++) {
        newBrightness[i] = i === index ? 1 : 0.5;
      }
      return newBrightness;
    });
  };

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
          <video
            autoPlay
            muted
            loop
            width="100%"
            src={`${videoUrl}${fourthSkill}.webm `}
          />
          <Box
            width="100%"
            display="flex"
            gap="15px"
            justifyContent="center"
            marginTop="-25px"
            zIndex="999"
          >
            {[
              firstSkill,
              secondSkill,
              thirdSkill,
              fourthSkill,
              fifthSkill,
              sixthSkill,
            ].map((skill, index) => (
              <Image
                key={index}
                {...imagesStyles}
                width="75px"
                height="75px"
                ref={refs[index + 1]}
                src={`${imagePath}${skill}.png`}
                onClick={() => handleImageClick(index + 1)}
                style={{ filter: `brightness(${brightness[index + 1] || 1})` }}
              />
            ))}
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
