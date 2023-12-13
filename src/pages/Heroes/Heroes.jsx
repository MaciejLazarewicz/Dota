import { Box, Image, Text, Input } from '@chakra-ui/react';
import Header from '../../components/Header';
import { fontFamily } from '../../components/constants/FontFamily';
import { SearchIcon } from '@chakra-ui/icons';

import { useState, useEffect } from 'react';

import { fetchHeroData } from '../../components/FetchHeroData';

import HeroesGrid from './Components/HeroesGrid';

import { PUBLIC_DOMAIN } from '../HomePage/Home';
import FooterSection from '../HomePage/Sections/FooterSection';
import { motion } from 'framer-motion';
import { complexityIds } from './Components/HeroesComplexity';
import FontStyles from '../../components/constants/FontVariables';
import { useBreakpoint } from '../../components/constants/BreakPoints';

function Heroes() {
  const [heroes, setHeroes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState(null);
  const [selectedIds, setSelectedIds] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleComplexityClick = (complexityId) => {
    setSelectedComplexity((prevComplexity) =>
      prevComplexity === complexityId ? '' : complexityId
    );

    setSelectedIds((prevIds) => {
      if (prevIds.length === complexityIds[complexityId].length) {
        return [];
      } else {
        return [...complexityIds[complexityId]];
      }
    });
  };

  const handleSearchTextChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    setSearchText(searchText);

    const filteredHeroes = heroes.filter(
      (hero) =>
        (selectedAttribute === '' || hero.primary_attr === selectedAttribute) &&
        (selectedComplexity === '' || hero.complexity === selectedComplexity) &&
        (selectedIds.length === 0 || selectedIds.includes(hero.id)) &&
        (searchText === '' ||
          hero.localized_name.toLowerCase().includes(searchText))
    );

    setNoResults(filteredHeroes.length === 0);
  };

  const handleAttributeClick = (attribute) => {
    setSelectedAttribute((prevAttribute) =>
      prevAttribute === attribute ? '' : attribute
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroData = await fetchHeroData();
        setHeroes(heroData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const filterImageStyles450 = {
    width: '35px',
    height: '30px',
  };

  const filterImagesStyles = (attribute, complexityId) => {
    return {
      width: '44px',
      height: '34px',
      marginLeft: '-4px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      cursor: 'pointer',
      filter:
        selectedAttribute === attribute ||
        (selectedComplexity !== null && complexityId <= selectedComplexity)
          ? 'brightness(1.0)'
          : 'brightness(0.5)',
      ...(isBreakPoint450 && filterImageStyles450),
    };
  };

  const complexityImageUrl =
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png';
  const attributeImageUrl =
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-';
  const styles = FontStyles();
  const [isBreakPoint1300] = useBreakpoint('isBreakPoint1300');

  const [isBreakPoint1000] = useBreakpoint('isBreakPoint1000');
  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');
  const [isBreakPoint450] = useBreakpoint('isBreakPoint450');

  const attrAndComplexityFont450 = {
    fontSize: '10px',
    marginBottom: '15px',
  };

  const attrAndComplexityFont = {
    fontSize: '17px',
    color: '#808fa6',
    letterSpacing: '2px',
    gap: '5px',
    display: 'flex',
    flexDir: 'row',
    alignItems: 'center',
    ...(isBreakPoint450 && attrAndComplexityFont450),
  };

  return (
    <Box width="100%" height="100%" position="relative">
      <Box
        backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg"
        backgroundSize="2000px"
        backgroundRepeat="no-repeat"
        backgroundPosition="center-top"
        display="flex"
        flexDir="column"
        backgroundAttachment="fixed"
        width="100%"
        position="relative"
      >
        <Box
          display="flex"
          flexDir="column"
          position="relative"
          alignItems="center"
          width="100%"
        >
          <Header setIsMenuOpen={setIsMenuOpen} />
          {!isMenuOpen ? (
            <Box
              display="flex"
              flexDir="column"
              width="100%"
              alignItems="center"
              textAlign="center"
            >
              <Text
                fontFamily={fontFamily}
                marginBottom="5px"
                style={styles.darkFontBreakpoints}
              >
                Choose your hero
              </Text>
              <Text width="60%" style={styles.descriptionFontBreakpoints}>
                From magical tacticians to fierce brutes and cunning rogues,
                Dota 2's hero pool is massive and limitlessly diverse. Unleash
                incredible abilities and devastating ultimates on your way to
                victory.
              </Text>

              <Box
                width={isBreakPoint450 ? '90%' : '70%'}
                display="flex"
                flexDir={isBreakPoint1000 ? 'column' : 'row'}
                alignItems="center"
                justifyContent="space-between"
                border="1px solid rgba(17,17,17,.564)"
                background="linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
                textTransform="uppercase"
                borderRadius="10px"
              >
                <Box display="flex" flexDir="column">
                  {(!isBreakPoint1300 || isBreakPoint1000) && (
                    <Text
                      color="#fff"
                      width="180px"
                      letterSpacing="2px"
                      fontSize="18px"
                      marginX="10px"
                    >
                      Filter heroes
                    </Text>
                  )}
                </Box>
                <Box {...attrAndComplexityFont}>
                  <Text marginRight="10px"> Attribute</Text>
                  <Box
                    display="flex"
                    flexDir="row"
                    letterSpacing="2px"
                    alignItems="center"
                    gap="5px"
                  >
                    <Image
                      {...filterImagesStyles('str')}
                      src={`${attributeImageUrl}str-active.png`}
                      onClick={() => handleAttributeClick('str')}
                    />
                    <Image
                      {...filterImagesStyles('agi')}
                      src={`${attributeImageUrl}agi-active.png`}
                      onClick={() => handleAttributeClick('agi')}
                    />
                    <Image
                      {...filterImagesStyles('int')}
                      src={`${attributeImageUrl}int-active.png`}
                      onClick={() => handleAttributeClick('int')}
                    />
                    <Image
                      {...filterImagesStyles('all')}
                      src={`${attributeImageUrl}uni-active.png`}
                      onClick={() => handleAttributeClick('all')}
                    />
                  </Box>
                </Box>
                <Box {...attrAndComplexityFont}>
                  <Text marginRight="10px">Complexity</Text>
                  {[1, 2, 3].map((id) => (
                    <Image
                      key={id}
                      {...filterImagesStyles('complexity', id)}
                      src={complexityImageUrl}
                      onClick={() => handleComplexityClick(id)}
                    />
                  ))}
                </Box>
                <Box
                  display="flex"
                  flexDir="row"
                  alignItems="center"
                  width={isBreakPoint1000 ? '60%' : '15%'}
                  height="45px"
                  backgroundColor="#25282A"
                  marginX="10px"
                  marginBottom={isBreakPoint1000 ? '10px' : 'inherit'}
                >
                  <Box
                    display="flex"
                    flexDir="row"
                    alignItems="center"
                    gap="5px"
                  >
                    <SearchIcon
                      color="#505050"
                      paddingLeft="10px"
                      boxSize="30px"
                    />
                    <Input
                      color="#fff"
                      width="190px"
                      height="30px"
                      fontSize="20px"
                      background="inherit"
                      variant="unstyled"
                      border="none"
                      outline="none"
                      _focus={{
                        backgroundColor: '#505050',
                      }}
                      onChange={handleSearchTextChange}
                    />
                  </Box>
                </Box>
              </Box>

              <Box display="flex" width="80%" justifyContent="center">
                <Box
                  display="grid"
                  justifyItems="center"
                  gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                  gap="15px"
                  width={isBreakPoint900 ? '100%' : '90%'}
                  marginTop="20px"
                  marginBottom="50px"
                >
                  {heroes
                    .filter(
                      (hero) =>
                        (selectedAttribute === '' ||
                          hero.primary_attr === selectedAttribute) &&
                        (searchText === '' ||
                          hero.localized_name
                            .toLowerCase()
                            .includes(searchText.toLowerCase())) &&
                        (selectedIds.length === 0 ||
                          selectedIds.includes(hero.id))
                    )
                    .map((hero) => (
                      <motion.div
                        key={hero.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <HeroesGrid
                          name={hero.localized_name}
                          img={`${PUBLIC_DOMAIN}${hero.img}`}
                          alt={hero.localized_name}
                          prim={hero.primary_attr}
                        />
                      </motion.div>
                    ))}
                </Box>
              </Box>
            </Box>
          ) : null}

          {noResults && (
            <Box
              display="flex"
              flexDir="row"
              width="100%"
              justifyContent="center"
            >
              <Text fontSize="60px" color="#fff">
                No heroes match your filter
              </Text>
            </Box>
          )}
        </Box>
      </Box>
      {!isMenuOpen ? (
        <Box
          position="absolute"
          background="rgb(0,0,0)"
          width="100%"
          height="100px"
          paddingTop="100px"
        >
          <FooterSection />
        </Box>
      ) : null}
    </Box>
  );
}

export default Heroes;
