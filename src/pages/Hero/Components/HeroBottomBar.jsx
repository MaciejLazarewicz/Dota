import { Box, Image, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { useBreakpoint } from '../../../components/constants/BreakPoints';

function HeroBottomBar({
  heroId,
  name,
  nextHero,
  nextHeroName,
  previousHero,
  previousHeroName,
  nextHeroImg,
  prevHeroImg,
  attackType,
  nextIndexAttr,
  prevIndexAttr,
  nextIndexAttackType,
  prevIndexAttackType,
}) {
  const formattedName = name.toLowerCase();

  const [isBreakPoint1650] = useBreakpoint('isBreakPoint1650');
  const [isBreakPoint1500] = useBreakpoint('isBreakPoint1500');
  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');

  const commonTextStyles = {
    fontSize: '15px',
    textTransform: 'uppercase',
  };

  const prevAndNextHeroMainTextStyles = {
    color: '#9f9f9f',
    letterSpacing: '2px',
    textShadow: '1px 1px 4px #000',
    marginTop: '35px',
    marginBottom: '5px',
  };
  const prevAndNextHeroSecondTextStyles = {
    color: '#fff',
    fontSize: '28px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 'bold',
    lineHeight: '112%',
    textShadow: '1px 1px 4px #000',
    marginY: '0',
  };

  const indexAttackTypeBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '10px',
    marginTop: '-10px',
  };

  const indexAttackTypeTextStyles = {
    color: '#ddd',
    fontSize: '15px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  };

  const nextAndPrevHeroImageStyles = {
    transform: 'translateY(0)',
    border: 'initial',
    transition: 'transform 0.3s ease-in-out',
    height: '250px',
    className: 'hero-image',
    width: isBreakPoint1500 ? '300px' : '',
  };

  const backgroundImageStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    cursor: 'pointer',
    backgroundImage:
      'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/grey_painterly_wide.png',
    filter: 'brightness(1.0)',
    transition: 'filter 0.3s ease-in-out',
    _hover: {
      filter: 'brightness(1.2)',
      transition: 'filter 0.3s ease-in-out',
      '& .hero-image': {
        transform: 'translateY(-15px)',
        border: 'none',
        transition: 'transform 0.3s ease-in-out',
      },
    },
  };

  const previousHeroImageClick = () => {
    previousHero();
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  const nextHeroImageClick = () => {
    nextHero();
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  const iconUrl = ` https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_`;

  const nextAndPreviousIconAttribute = (nextIndexAttr, prevIndexAttr) => {
    switch (nextIndexAttr || prevIndexAttr) {
      case 'agi':
        return `${iconUrl}agility.png`;
      case 'str':
        return `${iconUrl}strength.png`;
      case 'int':
        return `${iconUrl}intelligence.png`;
      case 'all':
        return `${iconUrl}universal.png`;
    }
  };

  return (
    <Box width="100%" display="flex" flexDir="column" justifyContent="center">
      <Box width="100%" display="flex" flexDir="row" justifyContent="center">
        {isBreakPoint1200 ? (
          <Box width="46%" backgroundColor="rgba(0,0,0,0.85)" />
        ) : null}
        {isBreakPoint1200 ? null : (
          <Box {...backgroundImageStyles} onClick={previousHeroImageClick}>
            <Box display="flex" flexDir="row" position="absolute" right="5%">
              <Box display="flex" flexDir="column">
                <Text {...commonTextStyles} {...prevAndNextHeroMainTextStyles}>
                  Previous Hero
                </Text>
                <Text {...prevAndNextHeroSecondTextStyles}>
                  {previousHeroName}
                </Text>
                <Box {...indexAttackTypeBoxStyles}>
                  <Image
                    width="20px"
                    height="20px"
                    src={nextAndPreviousIconAttribute(prevIndexAttr)}
                  />

                  <Text {...indexAttackTypeTextStyles}>
                    {prevIndexAttackType}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box position="absolute" bottom="-20px" right="50%">
              <Image {...nextAndPrevHeroImageStyles} src={prevHeroImg} />
            </Box>
          </Box>
        )}

        <Link to="/Heroes">
          <Box
            width={isBreakPoint1200 ? '100%' : ''}
            display="flex"
            flexDir="column"
            cursor="pointer"
            paddingTop="20px"
            paddingX={isBreakPoint1200 ? '' : '40px'}
            boxShadow="2px 2px 6px #000"
            backgroundColor="rgba(0,0,0,0.85)"
            _hover={{
              '& .grid-item': {
                backgroundColor: '#fff',
                transition: 'background-color 0.3s ease-in-out',
              },
            }}
          >
            <Box
              marginTop="5px"
              display="grid"
              gridTemplateColumns="repeat(3, 0.01fr)"
              gap="5px"
              justifyContent="center"
            >
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Box
                  key={index}
                  width="35px"
                  height="35px"
                  bgColor="#888"
                  className="grid-item"
                />
              ))}
            </Box>

            <Box display="flex" justifyContent="center">
              <Text
                color="#fff"
                fontWeight="bold"
                textAlign="center"
                lineHeight="1.5"
                {...commonTextStyles}
              >
                All Heroes
              </Text>
            </Box>
          </Box>
        </Link>

        {isBreakPoint1200 ? (
          <Box width="45%" backgroundColor="rgba(0,0,0,0.85)" />
        ) : null}

        {isBreakPoint1200 ? null : (
          <Box {...backgroundImageStyles} onClick={nextHeroImageClick}>
            <Box display="flex" flexDir="row" position="absolute" left="5%">
              <Box display="flex" flexDir="column">
                <Text {...commonTextStyles} {...prevAndNextHeroMainTextStyles}>
                  Next Hero
                </Text>
                <Text {...prevAndNextHeroSecondTextStyles}>{nextHeroName}</Text>
                <Box {...indexAttackTypeBoxStyles}>
                  <Image
                    width="20px"
                    height="20px"
                    src={nextAndPreviousIconAttribute(nextIndexAttr)}
                  />

                  <Text {...indexAttackTypeTextStyles}>
                    {' '}
                    {nextIndexAttackType}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              position="absolute"
              bottom="-20px"
              left={isBreakPoint1650 ? '30%' : '40%'}
            >
              <Image {...nextAndPrevHeroImageStyles} src={nextHeroImg} />
            </Box>
          </Box>
        )}
      </Box>
      <Box zIndex="1" width="100%" height="25px" backgroundColor="#000" />
    </Box>
  );
}

export default HeroBottomBar;
