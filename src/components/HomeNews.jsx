import { Box, Link, Text } from '@chakra-ui/react';

function HomeNews() {
  return (
    <Box display="flex" flexDir="column">
      <Box display="flex" flexDir="row" gap="20px">
        <Text>NAJNOWSZE WIADOMOŚCI</Text>
        <Link cursor="pointer" to="/">
          <Text>ZOBACZ WSZYSTKO</Text>
        </Link>
      </Box>
      <Box display="flex" gap="20px">
        <Box bgColor="#f51" width="400px" height="150px">
          dd
        </Box>
        <Box bgColor="#f51" width="400px" height="150px">
          dd
        </Box>
        <Box bgColor="#f51" width="400px" height="150px">
          ddd
        </Box>
      </Box>
    </Box>
  );
}

export default HomeNews;
