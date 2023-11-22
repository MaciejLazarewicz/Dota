import { Box, Text, Link } from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';

import HomeNewsComponent from '../../../components/HomeNewsComponent';

function NewsSection() {
  return (
    <Box>
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
            marginTop="-45px"
          >
            <Text color="#fff">Latest news</Text>

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
                view all
              </Text>
              <ArrowForwardIcon boxSize="20px" />
            </Link>
          </Box>
          <Box display="flex " flexDir="row" gap="25px">
            <HomeNewsComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NewsSection;
