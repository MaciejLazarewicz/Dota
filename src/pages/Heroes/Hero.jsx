import { Box, Image, Text, Input } from '@chakra-ui/react';
import Header from '../../components/Header';
import { fontFamily } from '../../components/constants/FontFamily';
import { SearchIcon } from '@chakra-ui/icons';

import { useState, useEffect } from 'react';

import { fetchHeroData } from '../../components/FetchHeroData';

import HeroesGrid from './Components/HeroesGrid';

import { PUBLIC_DOMAIN } from '../HomePage/Home';
import FooterSection from '../HomePage/Sections/FooterSection';

function Hero() {
  const [heroes, setHeroes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState('');
  const [selectedIds, setSelectedIds] = useState('');

  const complexityIds = {
    1: [
      102, 60, 1, 2, 47, 64, 99, 93, 79, 3, 33, 121, 4, 62, 58, 5, 78, 54, 55,
      46, 105, 38, 7, 8, 9, 12, 124, 96, 117, 82, 42, 77, 57, 80, 123, 25, 100,
      17, 48, 15, 118, 34, 19, 66, 20, 98, 84, 63, 21, 30, 24, 52, 23, 59, 29,
    ], //1 ZA DUŻO
    2: [
      43, 70, 56, 36, 53, 68, 31, 114, 85, 45, 6, 101, 103, 37, 26, 27, 116,
      120, 89, 49, 61, 72, 92, 122, 10, 113, 87, 32, 88, 69, 115, 75, 106, 13,
      14, 35, 51, 16, 71, 39, 65, 94, 44, 18, 108, 86, 107, 95, 40, 28, 76, 97,
      112, 119, 41, 22, 110,
    ],
    3: [111, 74, 50, 104, 67, 83, 73, 91, 11, 109, 81, 90],
  };
  const handleComplexityClick = (complexityId) => {
    const selectedIds = complexityIds[complexityId] || [];
    setSelectedComplexity(complexityId);
    setSelectedIds(selectedIds);
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

  const filterImagesStyles = (attribute) => {
    return {
      width: '44px',
      height: '34px',
      marginLeft: '-4px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      cursor: 'pointer',
      filter: 'brightness(0.5)',
      ...(selectedAttribute === attribute && { filter: 'brightness(1.0)' }),
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
                <Text marginRight="10px">Atrybuty</Text>
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
                    {...filterImagesStyles(id.toString())}
                    src={complexityImageUrl}
                    onClick={() => handleComplexityClick(id.toString())}
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
                  <HeroesGrid
                    key={hero.id}
                    name={hero.localized_name}
                    img={`${PUBLIC_DOMAIN}${hero.img}`}
                    alt={hero.localized_name}
                    prim={hero.primary_attr}
                  />
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

export default Hero;
