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

export const complexityIds = {
  1: [
    1, 2, 4, 5, 6, 8, 15, 18, 20, 22, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36,
    37, 40, 42, 43, 44, 47, 48, 49, 50, 52, 55, 57, 59, 60, 62, 64, 70, 71, 72,
    73, 81, 84, 85, 94, 96, 99, 100, 101, 102, 104, 127, 128, 129, 135, 137,
  ],
  2: [
    3, 7, 9, 11, 12, 13, 14, 16, 17, 19, 21, 23, 33, 34, 38, 39, 41, 45, 46, 51,
    53, 54, 56, 58, 61, 63, 65, 67, 68, 69, 75, 76, 77, 79, 83, 87, 88, 89, 90,
    93, 95, 97, 98, 103, 105, 106, 108, 109, 110, 112, 119, 120, 121, 123, 126,
    136,
  ],
  3: [10, 66, 74, 78, 80, 82, 86, 91, 92, 107, 111, 113, 114],
};

function Heroes() {
  const [heroes, setHeroes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState(null);
  const [selectedIds, setSelectedIds] = useState('');

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
    };
  };

  const complexityImageUrl =
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png';

  return (
    <Box width="100%" height="100%" position="relative">
      <Box
        backgroundImage="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg"
        backgroundSize="100% auto"
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
        >
          <Header />

          <Box display="flex" flexDir="column" width="60%" alignItems="center">
            <Text
              fontFamily={fontFamily}
              fontWeight="bold"
              fontSize="3vw"
              textTransform="uppercase"
              lineHeight="112%"
              letterSpacing="3px"
              color="#fff"
            >
              Wybierz swojego bohatera
            </Text>
            <Text
              maxWidth="1000px"
              fontSize="26px"
              textAlign="center"
              color="#ddd"
            >
              Od magicznych taktyków po zaciekłych brutali i przebiegłe szelmy –
              pula bohaterów w Dota 2 jest ogromna i bezgranicznie różnorodna.
              Uwolnij niesamowite umiejętności i niszczycielskie umiejętności
              ostateczne na swojej ścieżce do zwycięstwa.
            </Text>

            <Box
              width="100%"
              maxWidth="1200px"
              display="flex"
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              border="1px solid rgba(17,17,17,.564)"
              background="linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
              textTransform="uppercase"
            >
              <Box display="flex" flexDir="column">
                <Text
                  color="#fff"
                  width="180px"
                  letterSpacing="2px"
                  fontSize="18px"
                  marginX="10px"
                >
                  Filtruj Bohaterów
                </Text>
              </Box>
              <Box
                display="flex"
                flexDir="row"
                fontSize="17px"
                color="#808fa6"
                letterSpacing="2px"
                alignItems="center"
                gap="5px"
              >
                <Text marginRight="10px"> Atrybuty</Text>
                <Box
                  display="flex"
                  flexDir="row"
                  letterSpacing="2px"
                  alignItems="center"
                  gap="5px"
                >
                  <Image
                    {...filterImagesStyles('str')}
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png"
                    onClick={() => handleAttributeClick('str')}
                  />
                  <Image
                    {...filterImagesStyles('agi')}
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png"
                    onClick={() => handleAttributeClick('agi')}
                  />
                  <Image
                    {...filterImagesStyles('int')}
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png"
                    onClick={() => handleAttributeClick('int')}
                  />
                  <Image
                    {...filterImagesStyles('all')}
                    src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png"
                    onClick={() => handleAttributeClick('all')}
                  />
                </Box>
              </Box>
              <Box
                color="#808fa6"
                display="flex"
                flexDir="row"
                alignItems="center"
                gap="5px"
              >
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
                width="250px"
                height="50px"
                backgroundColor="#25282A"
                marginX="10px"
              >
                <Box display="flex" flexDir="row" alignItems="center" gap="5px">
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

            <Box
              display="grid"
              gridTemplateColumns="repeat(5, minmax(250px, 1fr))"
              gap="15px"
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
                    (selectedIds.length === 0 || selectedIds.includes(hero.id))
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

          {noResults && (
            <Box
              display="flex"
              flexDir="row"
              width="100%"
              justifyContent="center"
            >
              <Text fontSize="60px" color="#fff">
                Brak bohaterów pasujących do Twojego filtra
              </Text>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        position="absolute"
        background="rgb(0,0,0)"
        width="100%"
        height="100px"
        paddingTop="100px"
      >
        <FooterSection />
      </Box>
    </Box>
  );
}

export default Heroes;
