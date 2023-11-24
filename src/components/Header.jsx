import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Img,
  Text,
} from '@chakra-ui/react';

import { BsSteam } from 'react-icons/bs';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import CommonButton from './CommonButton';
import { useBreakpoint } from './constants/BreakPoints';
import { Link } from 'react-router-dom';

const FONT_DATA = {
  color: ' #f5f4f5d1',
  fontSize: ' 25px',
  cursor: 'pointer',
};

function Header() {
  const [isMenuHovered, setMenuHovered] = useState(false);
  const [breakPoint700] = useBreakpoint('isBreakPoint700'); // HAMBURGER
  const [breakPoint900] = useBreakpoint('isBreakPoint900'); // LOGO
  const [breakPoint1200] = useBreakpoint('isBreakPoint1200'); //GRAJ ZA DARMO
  const [breakPoint1300] = useBreakpoint('isBreakPoint1300'); //DOTA

  return (
    <Box
      display="flex"
      width="100%"
      height="80px"
      justifyContent="space-between"
      textTransform="uppercase"
    >
      <Box
        display="flex"
        fontSize="25px"
        gap="40px"
        alignItems="center"
        ml="30px"
      >
        <Link to="#" textDecoration="none" {...FONT_DATA}>
          <Box display="flex" alignItems="center" gap="10px">
            {(!breakPoint900 || breakPoint700) && (
              <Img width="50px" height="50px" src="/dota.svg" />
            )}

            {breakPoint1300 ? null : (
              <Link to="/Home">
                <Text fontSize="30px" letterSpacing="5px">
                  DOTA 2
                </Text>
              </Link>
            )}
          </Box>
        </Link>
        {breakPoint700 ? null : (
          <Box display="flex" fontSize="25px" gap="40px" alignItems="center">
            <Menu isOpen={isMenuHovered} onClose={() => setMenuHovered(false)}>
              <MenuButton
                width="110px"
                border="2px solid transparent"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                cursor="pointer"
                onMouseEnter={() => setMenuHovered(true)}
                background="transparent"
                fontSize="inherit"
                _hover={{
                  borderTopLeftRadius: '5px',
                  borderTopRightRadius: '5px',
                  backgroundColor: 'rgba(244,244,244,.2)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255,255,255,.6)',
                  transitionDuration: '.2s',
                }}
                {...FONT_DATA}
              >
                Game
              </MenuButton>

              <MenuList
                onMouseEnter={() => setMenuHovered(true)}
                onMouseLeave={() => setMenuHovered(false)}
                {...FONT_DATA}
              >
                <MenuItem>
                  <Link to="https://www.dota2.com/patches/7.34e">Patches</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="https://www.dota2.com/news/updates">
                    Gameplay updates
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="https://www.dota2.com/pastupdates">
                    Previous updates
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>

            <Link to="/Heroes" {...FONT_DATA}>
              Heroes
            </Link>
            <Link to="https://www.dota2.com/news" {...FONT_DATA}>
              News
            </Link>
            <Link
              to="https://www.dota2.com/esports/ti12/watch/15728/48/game1vod"
              {...FONT_DATA}
            >
              E-sport
            </Link>
          </Box>
        )}
      </Box>
      <Box display="flex" mr="50px" gap="40px" alignItems="center">
        {breakPoint700 ? null : (
          <Box display="flex" flexDir="column">
            <Link to="https://steamcommunity.com/oauth/loginform/?goto=%2Foauth%2Flogin%3Fclient_id%3D9B2C1229%26response_type%3Dtoken%26state%3Dhome">
              <Box
                display="flex"
                justifyContent="flex-end"
                m="5px"
                p="5px"
                {...FONT_DATA}
                fontSize="15px"
              >
                Login
              </Box>
            </Link>
          </Box>
        )}
        {breakPoint1200 ? null : (
          <Box display="flex">
            <Link to="https://store.steampowered.com/app/570/Dota_2/">
              <CommonButton>
                <BsSteam />
                Play for free
              </CommonButton>
            </Link>
          </Box>
        )}
        {breakPoint700 ? (
          <Box
            cursor="pointer"
            marginRight={breakPoint700 ? '-20px' : 'inherit'}
          >
            <HamburgerIcon width="50px" height="50px" />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default Header;
