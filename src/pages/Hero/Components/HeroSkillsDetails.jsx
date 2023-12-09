import { Box, Text, Image } from '@chakra-ui/react';
import getHeroSkills, { formattedName } from './HeroSkillsConstants';
import { useState, useEffect } from 'react';

import { imagesStyles } from '../Constants/imageSkillStyles';
import { heroSkills } from './HeroSkills';
import { useBreakpoint } from '../../../components/constants/BreakPoints';

function HeroSkillsDetails({ name, heroId, refs, selectedSkill }) {
  const [currentHeroId, setCurrentHeroId] = useState(heroId);

  const [brightness, setBrightness] = useState({});

  const [selectedVideo, setSelectedVideo] = useState(null);

  const [selectedText, setSelectedText] = useState('');

  const [selectedDescription, setSelectedDescription] = useState('');

  const [selectedImage, setSelectedImage] = useState('');

  const {
    firstSkill,
    secondSkill,
    thirdSkill,
    fourthSkill,
    fifthSkill: { fifthFirstValue, fifthSecondValue, fifthThirdValue },
    sixthSkill: { sixthFirstValue, sixthSecondValue, sixthThirdValue },
    ninthSkill: { ninthSecondValue },
    tenthSkill,
    eleventhSkill,
    videoUrl,
    imagePath,
  } = getHeroSkills(currentHeroId, formattedName(name));
  useEffect(() => {
    if (refs && refs[selectedSkill] && refs[selectedSkill].current) {
      refs[selectedSkill].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [refs, selectedSkill]);

  useEffect(() => {
    setBrightness((prevBrightness) => {
      const newBrightness = {};
      for (let i = 1; i <= 6; i++) {
        newBrightness[i] = i === selectedSkill ? 1 : 0.5;
      }
      return newBrightness;
    });
  }, [selectedSkill]);
  useEffect(() => {
    handleImageClick(1);
  }, []);

  const handleImageClick = (index) => {
    setBrightness((prevBrightness) => {
      const newBrightness = {};
      for (let i = 1; i <= 6; i++) {
        newBrightness[i] = i === index ? 1 : 0.5;
      }
      return newBrightness;
    });
    setSelectedVideo(index);
    setSelectedText(heroSkills[currentHeroId][index]);
    setSelectedDescription(heroSkills[currentHeroId][index + 6]);
    setSelectedImage(`${imagePath}${heroSkills[currentHeroId][index]}.png`);
    if (index === 5) {
      setSelectedText(fifthThirdValue);
      setSelectedImage(`${imagePath}${fifthFirstValue}.png`);
      setSelectedDescription(ninthSecondValue);
    } else if (index === 6) {
      setSelectedText(sixthThirdValue);
      setSelectedImage(`${imagePath}${sixthFirstValue}.png`);
      setSelectedDescription(eleventhSkill);
    }
  };

  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');
  const [isBreakPoint600] = useBreakpoint('isBreakPoint600');

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
          Ability Details
        </Text>
      </Box>
      <Box
        width="100%"
        justifyContent="center"
        display="flex"
        flexDir={isBreakPoint900 ? 'column' : 'row'}
        gap="20px"
      >
        <Box
          display="flex"
          flexDir="column"
          width={isBreakPoint900 ? '100%' : '40%'}
        >
          <Box width="100%">
            {[
              firstSkill,
              secondSkill,
              thirdSkill,
              fourthSkill,
              fifthSecondValue,
              sixthSecondValue,
            ].map((skill, index) => (
              <video
                key={index}
                autoPlay
                muted
                loop
                width="100%"
                src={`${videoUrl}${skill}.webm`}
                style={{
                  display: index + 1 === selectedVideo ? 'block' : 'none',
                }}
              />
            ))}
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDir="row"
            flexWrap="wrap"
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
              fifthFirstValue,
              sixthFirstValue,
            ].map((skill, index) => (
              <Image
                key={index}
                {...imagesStyles}
                width="75px"
                height="75px"
                ref={refs[index + 1]}
                src={`${imagePath}${skill}.png`}
                onClick={() => handleImageClick(index + 1)}
                style={{
                  filter: `brightness(${brightness[index + 1] || 1})`,
                }}
              />
            ))}
          </Box>
        </Box>
        <Box
          width={isBreakPoint900 ? '100%' : '40%'}
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <Box
            width="100%"
            display="flex"
            flexDir={isBreakPoint600 ? 'column' : 'row'}
            bgColor="rgba(0,0,0,0.6)"
            alignItems={isBreakPoint600 ? 'center ' : ''}
          >
            <Box margin=" 25px 5px 25px 25px">
              <Image
                boxShadow="0px 0px 8px #888"
                width="96px"
                height="96px"
                src={selectedImage}
              />
            </Box>
            <Box
              display="flex"
              height="fit-content"
              flexDir="column"
              width={isBreakPoint600 ? '80%' : '100%'}
              marginLeft="30px"
              alignItems={isBreakPoint600 ? 'center ' : ''}
            >
              <Text
                color="#fff"
                fontSize="22px"
                textTransform="uppercase"
                letterSpacing="1px"
                fontWeight="bold"
                marginBottom="5px"
                maxWidth="80%"
              >
                {selectedText.replace('_', ' ')}
              </Text>

              <Text
                color="#959595"
                fontSize={isBreakPoint600 ? '14px' : '18px'}
                whiteSpace="pre-wrap"
                marginBottom="10px"
                marginTop="5px"
                maxWidth="80%"
              >
                {selectedDescription}
              </Text>
            </Box>
          </Box>

          {isBreakPoint900 ? null : (
            <Box width="50%" display="flex" justifyContent="center">
              <video
                autoPlay
                loop
                muted
                width="700px"
                height="400px"
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${formattedName(
                  name
                )}.webm`}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSkillsDetails;
