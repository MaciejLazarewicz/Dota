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
    ninthSkill: { ninthFirstValue },
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

  const handleImageClick = (index) => {
    onImageClick(index);
  };

  const mainBoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: '-20px',
    backgroundColor: '#424c55',
  };
  const secondBoxStyles = {
    zIndex: 5,
    paddingX: '10px',
    paddingBottom: '15px',
    marginTop: '-10px',
  };
  const mainTextStyles = {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '2px',
    fontSize: '20px',
    marginBottom: '2.5px',
  };
  const secondTextStyles = {
    color: '#ddd',
    fontSize: '17px',
    letterSpacing: '0px',
    marginTop: '2.5px',
    textAlign: 'left',
  };

  const rotateBoxStyles = {
    position: 'absolute',
    width: '25px',
    height: '25px',
    transform: 'rotate(45deg)',
    bottom: '-10px',
    left: '110px',
    zIndex: '999',
    backgroundColor: '#424c55',
  };

  return (
    <Box>
      <Box position="absolute" top="600px" right="500px">
        <Box
          {...mainBoxStyles}
          left="-80px"
          {...(selectedVideo === firstSkill ? {} : videoBoxStyles)}
        >
          <video
            {...videoStyles}
            key={firstSkill}
            src={`${videoUrl}${firstSkill}.webm `}
          />

          <Box {...secondBoxStyles}>
            <Text {...mainTextStyles}>{firstSkill}</Text>

            <Text {...secondTextStyles}>{seventhSkill}</Text>
          </Box>
          <Box {...rotateBoxStyles} />
        </Box>
        <Box
          {...mainBoxStyles}
          left="-10px"
          {...(selectedVideo === secondSkill ? {} : videoBoxStyles)}
        >
          <video {...videoStyles} src={`${videoUrl}${secondSkill}.webm `} />

          <Box {...secondBoxStyles}>
            <Text {...mainTextStyles}>{secondSkill}</Text>

            <Text {...secondTextStyles}>{eighthSkill}</Text>
          </Box>
          <Box {...rotateBoxStyles} />
        </Box>
        <Box
          {...mainBoxStyles}
          left="110px"
          {...(selectedVideo === thirdSkill ? {} : videoBoxStyles)}
        >
          <video {...videoStyles} src={`${videoUrl}${thirdSkill}.webm `} />

          <Box {...secondBoxStyles}>
            <Text {...mainTextStyles}>{thirdSkill}</Text>

            <Text {...secondTextStyles}>{ninthFirstValue}</Text>
          </Box>
          <Box {...rotateBoxStyles} />
        </Box>
        <Box
          {...mainBoxStyles}
          left="200px"
          {...(selectedVideo === fourthSkill ? {} : videoBoxStyles)}
        >
          <video {...videoStyles} src={`${videoUrl}${fourthSkill}.webm `} />

          <Box {...secondBoxStyles}>
            <Text {...mainTextStyles}>{fourthSkill}</Text>

            <Text {...secondTextStyles}>{tenthSkill}</Text>
          </Box>
          <Box {...rotateBoxStyles} />
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
