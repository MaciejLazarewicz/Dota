import { Box, Img, Text } from '@chakra-ui/react';
import { CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { BsSteam } from 'react-icons/bs';
import CommonButton from './CommonButton';

import UnstyledReactRouterLink from './UnstyledReactRouterLink';

function HamburgerMenu({ handleHamburgerClick }) {
  const textData = {
    marginLeft: '15px',
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: '24px',
    letterSpacing: '2.5px',
    fontWeight: 'bold',
  };

  const categoriesBox = {
    display: 'flex',
    flexDir: 'row',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    color: '#BFBFBF',
    marginLeft: '15px',
  };

  const categoriesBoxChevronRightIcon = {
    color: '#fff',
    fontSize: '25px',
    marginLeft: '10px',
  };

  const pagesBox = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const pagesChevronRightIcon = {
    color: '#fff',
    fontSize: '40px',
  };

  return (
    <Box
      display="flex"
      flexDir="column"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
    >
      <Box height="100%" backgroundColor="#000">
        <Box
          display="flex"
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" flexDir="row" alignItems="center">
            <Img width="50px" height="50px" src="/dota.svg" marginLeft="10px" />
            <Text
              color="#fff"
              fontSize="30px"
              letterSpacing="5px"
              marginLeft="10px"
            >
              DOTA 2
            </Text>
          </Box>
          <Box marginRight="20px">
            <CloseIcon
              color="#fff"
              onClick={handleHamburgerClick}
              cursor="pointer"
              boxSize="25px"
              _hover={{
                color: '#BFBFBF',
                transition: ' color 0.3s ease-in-out',
              }}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          backgroundColor="#1B1B1B"
          height="70px"
          alignItems="center"
        >
          <Text style={textData}>Game</Text>
        </Box>
        <Box display="flex" flexDir="column" backgroundColor="#000">
          <Box style={categoriesBox}>
            <UnstyledReactRouterLink to="https://www.dota2.com/workshop/builds/overview">
              <Text>Builds</Text>
            </UnstyledReactRouterLink>
            <ChevronRightIcon style={categoriesBoxChevronRightIcon} />
          </Box>

          <Box style={categoriesBox}>
            <UnstyledReactRouterLink to="https://steamcommunity.com/app/570/guides">
              <Text>Steam Guides</Text>
            </UnstyledReactRouterLink>

            <ChevronRightIcon style={categoriesBoxChevronRightIcon} />
          </Box>
          <Box style={categoriesBox}>
            <UnstyledReactRouterLink to="https://www.dota2.com/patches/7.34e">
              <Text>Patches</Text>
            </UnstyledReactRouterLink>

            <ChevronRightIcon style={categoriesBoxChevronRightIcon} />
          </Box>
          <Box style={categoriesBox}>
            <UnstyledReactRouterLink to="https://www.dota2.com/news/updates">
              <Text>Gameplay Updates</Text>
            </UnstyledReactRouterLink>

            <ChevronRightIcon style={categoriesBoxChevronRightIcon} />
          </Box>
          <Box style={categoriesBox}>
            <Text cursor="pointer" onClick={handleHamburgerClick}>
              Store
            </Text>

            <ChevronRightIcon style={categoriesBoxChevronRightIcon} />
          </Box>
        </Box>
        <Box backgroundColor="#1B1B1B">
          <Box style={pagesBox}>
            <Box>
              <UnstyledReactRouterLink to="/Heroes">
                <Text style={textData}>Heroes</Text>
              </UnstyledReactRouterLink>
            </Box>
            <Box>
              <ChevronRightIcon style={pagesChevronRightIcon} />
            </Box>
          </Box>
          <Box style={pagesBox}>
            <Box>
              <UnstyledReactRouterLink to="https://www.dota2.com/news">
                <Text style={textData}>News</Text>
              </UnstyledReactRouterLink>
            </Box>
            <Box>
              <ChevronRightIcon style={pagesChevronRightIcon} />
            </Box>
          </Box>
          <Box style={pagesBox}>
            <Box>
              <UnstyledReactRouterLink to="https://www.dota2.com/esports/ti12/watch/15728/48/game1vod">
                <Text style={textData}>Esports</Text>
              </UnstyledReactRouterLink>
            </Box>
            <Box>
              <ChevronRightIcon style={pagesChevronRightIcon} />
            </Box>
          </Box>
        </Box>
        <Box marginTop="230px">
          <UnstyledReactRouterLink to="https://steamcommunity.com/oauth/loginform/?goto=%2Foauth%2Flogin%3Fclient_id%3D9B2C1229%26response_type%3Dtoken%26state%3Dheroes">
            <Text
              marginLeft="15px"
              fontWeight="bold"
              fontSize=" 18px"
              color="#BFBFBF"
              letterSpacing="2px"
            >
              Login
            </Text>
          </UnstyledReactRouterLink>
        </Box>
        <Box display="flex" width="100%" marginTop="10px">
          <Box width="100%" marginX="10px">
            <CommonButton useBreakpoints={false}>
              <BsSteam fontSize="20px" />
              Play For Free
            </CommonButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HamburgerMenu;
