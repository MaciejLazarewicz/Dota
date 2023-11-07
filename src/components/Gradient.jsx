import { Box } from '@chakra-ui/react';

function Gradient() {
  return (
    <Box
      background="linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.733) 90%, rgb(0, 0, 0) 100%)"
      position="absolute"
      width="100%"
      height="100%"
    />
  );
}

export default Gradient;
