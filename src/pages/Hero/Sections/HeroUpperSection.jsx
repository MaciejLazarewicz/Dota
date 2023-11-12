import {
  Box,
  Text,
  Image,
  Collapse,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import Header from '../../../components/Header';

import { fontFamily } from '../../../components/constants/FontFamily';
import { complexityIds } from '../../Heroes/Components/HeroesComplexity';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

import NextAndPreviousButton from '../Components/NextAndPreviousButton';
import Skills from '../Components/Skills';
import HeroBar from './HeroBar';

function HeroSections({
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [showAdditionalContent, setShowAdditionalContent] = useState(true);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
    setShowAdditionalContent(!showAdditionalContent);
  };

  const generateRandomDescription = (wordCount) => {
    return faker.lorem.words(wordCount);
  };
  const randomDescription = generateRandomDescription(5);
  const randomDetails = generateRandomDescription(250);

  const transformBackendAttributeIntoReadableOne = (attr) => {
    switch (attr) {
      case 'agi':
        return 'agility';
      case 'str':
        return 'strength';
      case 'int':
        return 'intelligence';
      case 'all':
        return 'all';
      default:
        throw new Error("Attribute doesn't exist");
    }
  };
  const attributeIconUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${transformBackendAttributeIntoReadableOne(
    prim
  )}`;

  const transformAttributeIntoIconSrc = (attr) => {
    switch (attr) {
      case 'agi':
        return `${attributeIconUrl}.png`;
      case 'str':
        return `${attributeIconUrl}.png`;
      case 'int':
        return `${attributeIconUrl}.png`;
      case 'all':
        return 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png';
    }
  };

  const formattedName = name
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace('-', '');

  return (
    <Box
      width="100%"
      position="relative"
      display="flex"
      flexDir="column"
      overflow="hidden"
    >
      <Box
        width="100%"
        height="85vh"
        backgroundSize="100% auto"
        backgroundPosition="center-top"
        backgroundRepeat="no-repeat"
        overflow="hidden"
        position="relative"
        backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//backgrounds/greyfade.jpg"
      >
        <Box width="100%" position="absolute" zIndex="999">
          <Header />
        </Box>
        <Box
          width="150%"
          height="650px"
          transform="skewY(-45deg) "
          position="absolute"
          overflow="hidden"
          backgroundColor="rgba(0,0,0,0.37)"
        />
        <NextAndPreviousButton />

        <Box
          display="flex"
          justifyContent="center"
          width="80%"
          height="100%"
          marginTop="30px"
          position="absolute"
          right="-5%"
        >
          <video
            autoPlay
            loop
            muted
            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${formattedName}.webm`}
          />
        </Box>
        <Box
          left="0px"
          bottom="0px"
          right="0px"
          position="absolute"
          width="100%"
          height="100%"
          background="linear-gradient(rgba(0,0,0,0) 70%, rgba(0,0,0,0.733) 100%,rgb(0,0,0)100%)"
        />
        <Box
          display="flex"
          flexDir="column"
          position="relative"
          marginTop="100px"
          marginLeft="300px"
          textTransform="uppercase"
          color="#fff"
          letterSpacing="2px"
          width="600px"
        >
          <Box display="flex" flexDir="row" alignItems="center" gap="10px">
            <Image
              width="30px"
              height="30px"
              src={transformAttributeIntoIconSrc(prim)}
            />
            <Text fontSize="24px">
              {transformBackendAttributeIntoReadableOne(prim)}
            </Text>
          </Box>

          <Text fontSize="80px" marginY="0">
            {name}
          </Text>
          <Text color="#a5e0f3">{randomDescription}</Text>
          <Box width="500px">
            <Collapse in={isExpanded} startingHeight={125}>
              <Text
                whiteSpace="pre-line"
                textTransform="capitalize"
                maxH={isExpanded ? '50px' : 'none'}
                transition="max-height 0.5s"
              >
                {randomDetails}
              </Text>
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                orientation="vertical"
                ml="5px"
                h="150px"
                color="#f51"
                display={isExpanded ? 'block' : 'none'}
                position="absolute"
                right="-20px"
                zIndex="999"
                style={{ border: '5px solid red' }}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Collapse>
            <Button
              background="inherit"
              variant="unstyled"
              border="none"
              cursor="pointer"
              onClick={handleReadMoreClick}
            >
              <Text color="#f51" fontSize="18px" textDecoration="underline">
                Przeczytaj pełną historie
              </Text>
            </Button>
          </Box>
          {showAdditionalContent && (
            <>
              <Box display="flex" flexDir="column">
                <Text color="#959595">Typ ataku</Text>
                <Box
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                  gap="10px"
                >
                  <Image
                    width="24px"
                    height="24px"
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg"
                  />
                  <Text>{attackType}</Text>
                </Box>
              </Box>
              <Box>
                <Text color="#959595">Złożoność</Text>
                <Box display="flex" flexDir="row" gap="20px">
                  {[1, 2, 3].map((index) => (
                    <Box
                      key={index}
                      width="15px"
                      height="15px"
                      border="1px solid #fff"
                      transform="rotateZ(45deg)"
                      backgroundColor={
                        complexityIds[index].includes(id) ||
                        complexityIds[index].includes(id - 1) ||
                        complexityIds[index].includes(id - 2)
                          ? '#fff'
                          : 'initial'
                      }
                    />
                  ))}
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Box
        width="800px"
        left="-320px"
        marginRight="50px"
        top="300"
        display="flex"
        flexDir="row"
        alignItems="center"
        transform="rotate(270deg)"
        position="absolute"
        fontSize="17px"
        fontWeight="600"
        textTransform="uppercase"
        gap="12px"
      >
        <Image
          width="22px"
          height="22px"
          src={transformAttributeIntoIconSrc(prim)}
        />
        <Text fontFamily={fontFamily} color="#fff">
          {name}
        </Text>
        <Text color="#888">{id}</Text>
        <Box flexGrow="1" height="2px" backgroundColor="#555" />
      </Box>
      <Skills />

      <HeroBar
        name={name}
        img={img}
        baseHP={baseHP}
        baseHPRegen={baseHPRegen}
        baseMP={baseMP}
        baseMPRegen={baseMPRegen}
        baseArmor={baseArmor}
        baseAttackMin={baseAttackMin}
        baseAttackMax={baseAttackMax}
        baseStrength={baseStrength}
        baseAgility={baseAgility}
        baseIntelligence={baseIntelligence}
        strengthGain={strengthGain}
        agilityGain={agilityGain}
        intelligenceGain={intelligenceGain}
        attackRange={attackRange}
      />
    </Box>
  );
}

export default HeroSections;
