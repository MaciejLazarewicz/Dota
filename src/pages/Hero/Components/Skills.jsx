import { Box, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { heroSkills } from './HeroSkills';
import getHeroSkills, { formattedName } from './HeroSkillsConstants';
import { imagesStyles } from '../Constants/imageSkillStyles';
import { videoStyles } from '../Constants/videoSkillStyles';
import { motion } from 'framer-motion';

function Skills({ name, heroId, onImageClick }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentHeroId, setCurrentHeroId] = useState(heroId);

  const {
    firstSkill,
    secondSkill,
    thirdSkill,
    fourthSkill,

    seventhSkill,
    eighthSkill,
    ninthSkill,
    tenthSkill,
    videoUrl,
    imagePath,
  } = getHeroSkills(currentHeroId, formattedName(name));

  const videoBoxStyles = {
    opacity: 0,
  };
  const handleImageHover = (skillId) => {
    setSelectedVideo(heroSkills[currentHeroId][skillId]);
  };

  const handleImageLeave = (index) => {
    console.log('Clicked on Skill with index:', index);
    setSelectedVideo(null);
  };

  const toolTipStyles = {
    background: '#424C55',
    zIndex: '999',
  };

  const handleImageClick = (index) => {
    onImageClick(index);
  };

  return (
    <Box>
      <Box position="absolute" top="600px" right="500px">
        <Box
          display="flex"
          position="absolute"
          bottom="140px"
          left="-80px"
          {...(selectedVideo === firstSkill ? {} : videoBoxStyles)}
        >
          <video
            {...videoStyles}
            key={firstSkill}
            src={`${videoUrl}${firstSkill}.webm `}
          />

          <Box
            display="flex"
            flexDir="column"
            width="250px"
            height="fit-content"
            bottom="-160px"
            position="absolute"
            {...toolTipStyles}
          >
            <Box
              zIndex="5"
              paddingX="10px"
              paddingBottom="15px"
              marginTop="-10px"
            >
              <Text
                color="#fff"
                textTransform="uppercase"
                fontWeight="bold"
                letterSpacing="2px"
                fontSize="20px"
                marginBottom="2.5px"
              >
                {firstSkill}
              </Text>

              <Text
                color="#ddd"
                fontSize="17px"
                letterSpacing="0px"
                marginTop="2.5px"
                textAlign="left"
              >
                {seventhSkill}
              </Text>
            </Box>
            <Box
              position="absolute"
              width="25px"
              height="25px"
              transform="rotate(45deg)"
              {...toolTipStyles}
              bottom="-10px"
              left="110px"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          position="absolute"
          bottom="100px"
          left="-10px"
          {...(selectedVideo === secondSkill ? {} : videoBoxStyles)}
        >
          <video {...videoStyles} src={`${videoUrl}${secondSkill}.webm `} />
          <Box
            display="flex"
            flexDir="column"
            width="250px"
            height="fit-content"
            bottom="-120px"
            position="absolute"
            {...toolTipStyles}
          >
            <Box
              zIndex="5"
              paddingX="10px"
              paddingBottom="15px"
              marginTop="-5px"
            >
              <Text
                color="#fff"
                textTransform="uppercase"
                fontWeight="bold"
                letterSpacing="2px"
                fontSize="20px"
                marginBottom="2.5px"
              >
                {secondSkill}
              </Text>

              <Text
                color="#ddd"
                fontSize="17px"
                letterSpacing="0px"
                marginTop="2.5px"
                textAlign="left"
              >
                {eighthSkill}
              </Text>
            </Box>
            <Box
              position="absolute"
              width="25px"
              height="25px"
              transform="rotate(45deg)"
              {...toolTipStyles}
              bottom="-10px"
              left="110px"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          position="absolute"
          bottom="165px"
          left="100px"
          {...(selectedVideo === thirdSkill ? {} : videoBoxStyles)}
        >
          <video {...videoStyles} src={`${videoUrl}${thirdSkill}.webm `} />
          <Box
            display="flex"
            flexDir="column"
            width="250px"
            height="190px"
            bottom="-180px"
            position="absolute"
            {...toolTipStyles}
          >
            <Box
              zIndex="5"
              paddingX="10px"
              paddingBottom="15px"
              marginTop="-5px"
            >
              <Text
                color="#fff"
                textTransform="uppercase"
                fontWeight="bold"
                letterSpacing="2px"
                fontSize="20px"
                marginBottom="2.5px"
              >
                {thirdSkill}
              </Text>

              <Text
                color="#ddd"
                fontSize="17px"
                letterSpacing="0px"
                marginTop="2.5px"
                textAlign="left"
              >
                {ninthSkill}
              </Text>
            </Box>
            <Box
              position="absolute"
              width="25px"
              height="25px"
              transform="rotate(45deg)"
              {...toolTipStyles}
              bottom="-10px"
              left="110px"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          position="absolute"
          bottom="135px"
          left="200px"
          {...(selectedVideo === fourthSkill ? {} : videoBoxStyles)}
        >
          <video {...videoStyles} src={`${videoUrl}${fourthSkill}.webm `} />
          <Box
            display="flex"
            flexDir="column"
            width="250px"
            height="fit-content"
            bottom="-160px"
            position="absolute"
            {...toolTipStyles}
          >
            <Box
              zIndex="5"
              paddingX="10px"
              paddingBottom="15px"
              marginTop="-5px"
            >
              <Text
                color="#fff"
                textTransform="uppercase"
                fontWeight="bold"
                letterSpacing="2px"
                fontSize="20px"
                marginBottom="2.5px"
              >
                {fourthSkill}
              </Text>

              <Text
                color="#ddd"
                fontSize="17px"
                letterSpacing="0px"
                marginTop="2.5px"
                textAlign="left"
              >
                {tenthSkill}
              </Text>
            </Box>
            <Box
              position="absolute"
              width="25px"
              height="25px"
              transform="rotate(45deg)"
              {...toolTipStyles}
              bottom="-15px"
              left="110px"
            />
          </Box>
        </Box>

        <motion.div
          initial={{ y: '50px' }}
          animate={{ y: '0' }}
          transition={{ duration: 1 }}
        >
          <Box
            display="flex"
            flexDir="column"
            position="absolute"
            alignItems="center"
          >
            <Text
              marginBottom="15px"
              letterSpacing="2px"
              fontSize="18px"
              textTransform="uppercase"
              color="#fff"
            >
              Abilities
            </Text>
            <Box display="flex" gap="15px">
              {[firstSkill, secondSkill, thirdSkill, fourthSkill].map(
                (skill, index) => (
                  <Image
                    key={index}
                    {...imagesStyles}
                    width="75px"
                    height="75px"
                    src={`${imagePath}${skill}.png`}
                    onMouseEnter={() => handleImageHover(index + 1)}
                    onMouseLeave={handleImageLeave}
                    onClick={() => handleImageClick(index + 1)}
                  />
                )
              )}
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Skills;

// DO POPRAWKI, ZA DUŻO POWTÓRZEŃ
