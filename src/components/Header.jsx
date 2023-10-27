import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Link,
  Img,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { TbWorld } from 'react-icons/tb';
import { BsSteam } from 'react-icons/bs';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import CommonButton from './constants/CommonButton';

const FONT_DATA = {
  color: ' #f5f4f5d1',
  fontSize: ' 25px',
  cursor: 'pointer',
  // _hover: {
  //   color: '#F5F4F5',
  // },
};

function Header() {
  const [isMenuHovered, setMenuHovered] = useState(false);
  const [breakPoint1300] = useMediaQuery('(max-width: 1300px)'); //DOTA
  const [breakPoint1200] = useMediaQuery('(max-width: 1200px)'); //GRAJ ZA DARMO
  const [breakPoint900] = useMediaQuery('(max-width: 900px)'); // LOGO
  const [breakPoint700] = useMediaQuery('(max-width: 700px)'); // HAMBURGER

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
        <Link href="#" textDecoration="none" {...FONT_DATA}>
          <Box display="flex" alignItems="center" gap="10px">
            {(!breakPoint900 || breakPoint700) && (
              <Img width="50px" height="50px" src="/dota.svg" />
            )}

            {breakPoint1300 ? null : (
              <Text fontSize="30px" letterSpacing="5px">
                DOTA 2
              </Text>
            )}
          </Box>
        </Link>
        {breakPoint700 ? null : (
          <Box display="flex" fontSize="25px" gap="40px" alignItems="center">
            <Menu isOpen={isMenuHovered} onClose={() => setMenuHovered(false)}>
              <MenuButton
                border="none"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                cursor="pointer"
                onMouseEnter={() => setMenuHovered(true)}
                background="transparent"
                fontSize="inherit"
                _hover={{
                  padding: '12px 20px',

                  borderTopLeftRadius: '5px',
                  borderTopRightRadius: '5px',
                  backgroundColor: 'rgba(244,244,244,.2)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255,255,255,.6)',
                  transitionDuration: '.2s',
                }}
                {...FONT_DATA}
              >
                GRA
              </MenuButton>

              <MenuList
                onMouseLeave={() => setMenuHovered(false)}
                {...FONT_DATA}
              >
                <MenuItem>
                  <Link>Łatki</Link>
                </MenuItem>
                <MenuItem>
                  <Link>Aktualizacje Rozgrywki</Link>
                </MenuItem>
                <MenuItem>
                  <Link>Poprzednie aktualizacje</Link>
                </MenuItem>
              </MenuList>
            </Menu>

            <Link {...FONT_DATA}>Bohaterowie</Link>
            <Link {...FONT_DATA}>Wiadomosci</Link>
            <Link {...FONT_DATA}>E-sport</Link>
          </Box>
        )}
      </Box>
      <Box display="flex" mr="50px" gap="40px" alignItems="center">
        {breakPoint700 ? null : (
          <Box display="flex" flexDir="column">
            <Link
              textDecoration="none"
              href="https://steamcommunity.com/oauth/loginform/?goto=%2Foauth%2Flogin%3Fclient_id%3D9B2C1229%26response_type%3Dtoken%26state%3Dhome"
            >
              <Box
                display="flex"
                justifyContent="flex-end"
                m="5px"
                p="5px"
                {...FONT_DATA}
                fontSize="15px"
              >
                Zaloguj sie
              </Box>
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<TbWorld />}
                rightIcon={<ChevronDownIcon />}
                border="none"
              >
                Wybierz Język
              </MenuButton>
              <MenuList>
                <MenuItem>d</MenuItem>
                <MenuItem>d</MenuItem>
                <MenuItem>a</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        )}
        {breakPoint1200 ? null : (
          <Box display="flex">
            <Link href="https://store.steampowered.com/app/570/Dota_2/">
              <CommonButton>
                <BsSteam />
                Graj za darmo
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
