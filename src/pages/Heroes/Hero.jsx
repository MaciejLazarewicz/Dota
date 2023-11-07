import { Box, Image, Text, Input } from '@chakra-ui/react';
import Header from '../../components/Header';
import { fontFamily } from '../../components/constants/FontFamily';
import { SearchIcon } from '@chakra-ui/icons';
import HeroesGrid from './Components/HeroesGrid';

function Hero() {
  const filterImagesStyles = {
    width: '44px',
    height: '34px',
    marginLeft: '-4px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
  };

  return (
    <Box width="100%" height="100%" position="relative">
      <Image
        src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg"
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        backgroundPosition="center-top"
        width="100%"
        position="absolute"
      />
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

              <Image
                {...filterImagesStyles}
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png"
              />
              <Image
                {...filterImagesStyles}
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png"
              />
              <Image
                {...filterImagesStyles}
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png"
              />
              <Image
                {...filterImagesStyles}
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png"
              />
            </Box>
            <Box
              color="#808fa6"
              display="flex"
              flexDir="row"
              alignItems="center"
              gap="5px"
            >
              <Text marginRight="10px">Złożoność</Text>
              <Image
                {...filterImagesStyles}
                src=" https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
              />
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
                <SearchIcon color="#505050" paddingLeft="10px" boxSize="30px" />
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
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;