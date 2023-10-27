import { Box, Button } from '@chakra-ui/react';

function CommonButton({ children }) {
  return (
    <Box>
      <Button
        border="3px solid rgba(255,255,255,.31)"
        borderRadius="5px"
        alignItems="center"
        height="50px"
        padding="30px 30px"
        width="fit-content"
        bgColor="transparent"
        cursor="pointer"
        letterSpacing="2px"
        transition="borderColor 0.1s ease-in-out, margin-top 0.1s ease-in-out"
        _hover={{
          borderColor: '#f51',
          marginTop: '-2px',
        }}
      >
        <Box
          display="flex"
          fontSize="15px"
          color="#fff"
          alignItems="center"
          gap="15px"
        >
          {children}
        </Box>
      </Button>
    </Box>
  );
}

export default CommonButton;
