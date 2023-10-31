import { Box } from '@chakra-ui/react';

function HeroGrid({ name, img, alt, icon, prim }) {
  return (
    <Box width="1000px" height="1000px" display="flex" flexDir="row">
      <img width="50px" height="50px" src={img} alt={alt} />
      <p width="50px" height="50px">
        {name}
      </p>
      <img src={icon} />
      <p width="50px" height="50px">
        {prim}
      </p>
    </Box>
  );
}

export default HeroGrid;
