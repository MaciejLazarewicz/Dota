import { Box, Text, useMediaQuery, Link, Button } from '@chakra-ui/react';
import { BsSteam } from 'react-icons/bs';
import { motion } from 'framer-motion';

import BackgroundVideo from '../components/BackgroundVideo';
import Header from '../components/Header';

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
  const [breakPoint300] = useMediaQuery('(max-width: 300px)');
  const [breakPoint350] = useMediaQuery('(max-width: 350px)');
  const [breakPoint450] = useMediaQuery('(max-width: 450px)');
  const [breakPoint550] = useMediaQuery('(max-width: 550px)');
  const [breakPoint700] = useMediaQuery('(max-width: 700px)');

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

  return (
    <Box style={mainContainerStyle}>
      <BackgroundVideo />
      <Box
        background="rgba(0,0,0,0.7)"
        top="0"
        left="0"
        zIndex="1"
        width="100%"
        height="100%"
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
                color="#f51"
                fontSize="20px"
                display="flex"
                flexDir="column"
              >
                <Text margin="0">DESTRUCTOID</Text>

                <Box
                  width="100px"
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
      </Box>
    </Box>
  );
}

export default Home;

// style={
//               breakPoint550 ? smallScreenTextBoxStyle : largeScreenTextBoxStyle
//             }
