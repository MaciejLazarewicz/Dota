import { Box, Text, Link, Button } from '@chakra-ui/react';
import { BsSteam } from 'react-icons/bs';
import { motion } from 'framer-motion';

import BackgroundVideo from '../../components/BackgroundVideo';
import Header from '../../components/Header';
import HomeNews from './Sections/NewsSection';
import BattleSection from './Sections/BattleSection';
import ChooseSection from './Sections/ChooseSection';
import { useBreakpoint } from '../../components/constants/BreakPoints';
import HeroGrid from '../../components/HeroGrid';
import { fetchHeroData } from '../../components/FetchHeroData';
import { useState, useEffect } from 'react';
import ProCircuitSection from './Sections/ProCircuitSection';

export const PUBLIC_DOMAIN = 'https://cdn.cloudflare.steamstatic.com/';
function Home() {
  const mainContainerStyle = {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  };

  const headerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  };

  const mobileScreenTextStyle = {
    fontSize: '20px',
    marginLeft: '10px',
  };

  const smallScreenTextStyle = {
    fontSize: '30px',
    marginLeft: '30px',
  };

  const mediumScreenTextStyle = {
    fontSize: '40px',
    marginLeft: '50px',
  };

  const largeScreenTextStyle = {
    marginLeft: '70px',
    fontSize: '50px',
  };

  const defaultScreenTextStyle = {
    fontSize: '60px',
  };
  const [breakPoint300] = useBreakpoint('isBreakPoint300');
  const [breakPoint350] = useBreakpoint('isBreakPoint350');
  const [breakPoint450] = useBreakpoint('isBreakPoint450');
  const [breakPoint550] = useBreakpoint('isBreakPoint550');
  const [breakPoint700] = useBreakpoint('isBreakPoint700');

  const textBoxStyle = {
    display: 'flex',
    flexDir: 'column',
    marginTop: '150px',
    marginLeft: '170px',
    color: '#f5f4f5d1',
    width: '45%',
    ...defaultScreenTextStyle,
    ...(breakPoint700 && largeScreenTextStyle),
    ...(breakPoint550 && mediumScreenTextStyle),
    ...(breakPoint450 && smallScreenTextStyle),
    ...(breakPoint300 && mobileScreenTextStyle),
  };

  const buttonQueryStyle = {
    width: '200px',
    marginLeft: '25px',
  };

  const buttonStyle = {
    border: '3px solid #909399',
    height: '80px',
    width: '300px',
    bgColor: 'transparent',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '30px',
    color: '#f5f4f5d1',
    gap: '15px',
    transition: 'margin-top 0.1s ease-in-out',
    _hover: {
      '.hover-text': {
        color: '#aaaaa8',
      },
      marginTop: '28px',
    },
    ...(breakPoint350 && buttonQueryStyle),
  };

  const [heroes, setHeroes] = useState([]);
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

  return (
    <Box style={mainContainerStyle}>
      <BackgroundVideo />
      <Box
        background="rgba(0,0,0,0.7)"
        top="0"
        left="0"
        zIndex="1"
        width="inherit"
        height="100vh"
        position="absolute"
      >
        <Box style={headerStyle}>
          <Header />
        </Box>
        <Box>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <Box style={textBoxStyle} display="flex" flexDir="column">
              <Text marginBottom="5px" lineHeight="1.2" letterSpacing="5px">
                „WSPÓŁCZESNE WIELOOSOBOWE DZIEŁO SZTUKI”.
              </Text>
              <Box
                width="300px"
                color="#919FA6"
                fontSize="20px"
                display="flex"
                flexDir="column"
              >
                <Text margin="0">DESTRUCTOID</Text>

                <Box
                  width="80px"
                  marginTop="15px"
                  orientation="horizontal"
                  height="3px"
                  borderRadius="5px"
                  bgColor="#f51"
                />
                <Link href="https://store.steampowered.com/app/570/Dota_2/">
                  <Button {...buttonStyle}>
                    <Box display="flex" alignItems="center">
                      <BsSteam size="40px" />
                    </Box>
                    <Box>
                      <Text
                        marginBottom="2px"
                        fontSize={breakPoint350 ? '15px' : '22px'}
                      >
                        GRAJ ZA DARMO
                      </Text>

                      <Text
                        marginTop="5px"
                        fontSize={breakPoint350 ? '10px' : '20px'}
                        className="hover-text"
                        color="#959392"
                      >
                        POBIERZ NA STEAM
                      </Text>
                    </Box>
                  </Button>
                </Link>
              </Box>
            </Box>
          </motion.div>
        </Box>
        <Box display="flex" color="#f51" marginLeft="350px" marginTop="20px">
          <HomeNews />
        </Box>

        <BattleSection />
        <ChooseSection />

        {/* <Box
          display="grid"
          height="100%"
          width="100%"
          gridTemplateColumns="repeat(25,1fr)"
          gridTemplateRows="repeat (5,1fr)"
        >
          {heroes.map((hero) => (
            <HeroGrid
              key={hero.id}
              name={hero.localized_name}
              img={`${PUBLIC_DOMAIN}${hero.img}`}
              alt={hero.localized_name}
              prim={hero.primary_attr}
            />
          ))}
        </Box> */}

        <ProCircuitSection />
      </Box>
    </Box>
  );
}

export default Home;
