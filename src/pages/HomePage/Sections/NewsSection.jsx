import { Box, Text, Link } from '@chakra-ui/react';
import Gradient from '../../../components/constants/Gradient';

import { ArrowForwardIcon } from '@chakra-ui/icons';

import HomeNewsComponent from '../../../components/HomeNewsComponent';

function NewsSection() {
  return (
    <Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        background="linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 100%)"
        filter="blur(50px)"
        pointerEvents="none"
      />
      <Box
        display="flex"
        flexDir="column"
        width="100%"
        marginTop="40px"
        alignItems="center"
        position="relative"
        background="rgb(0,0,0)"
      >
        <Box display="flex" flexDir="column" zIndex="1">
          <Box
            display="flex"
            flexDir="row"
            gap="15px"
            textTransform="uppercase"
            letterSpacing="3px"
            alignItems="center"
            fontSize="18px"
            marginTop="-40px"
          >
            <Text color="#fff">Najnowsze Wiadomości</Text>

            <Link
              cursor="pointer"
              color="#d0d1d3"
              display="flex"
              alignItems="center"
              to="#"
            >
              <Text
                _hover={{
                  letterSpacing: '5px',
                  transition: 'letter-spacing 0.2s ease-in-out',
                }}
              >
                Zobacz wszystko
              </Text>
              <ArrowForwardIcon boxSize="20px" />
            </Link>
          </Box>
          <Box display="flex " flexDir="row" gap="25px">
            <HomeNewsComponent />
            <HomeNewsComponent />
            <HomeNewsComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NewsSection;
