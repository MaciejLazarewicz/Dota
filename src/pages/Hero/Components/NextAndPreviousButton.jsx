import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NextAndPreviousButton({ previousHero, nextHero }) {
  const arrowBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #888',
    width: '30px',
    height: '64px',
    cursor: 'pointer',
    _hover: {
      borderColor: '#fff',
      '& .inner-image': {
        filter: 'brightness(1.0)',
      },
    },
  };
  const arrowImageStyles = {
    filter: 'brightness(0.5)',
    className: 'inner-image',
    width: '15px',
    height: '32px',
    src: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_solid_left.png',
  };

  return (
    <Box
      position="absolute"
      right="100"
      top="200"
      display="flex"
      flexDir="row"
      width="200px"
      height="200px"
      zIndex="999"
      gap="5px"
    >
      <Box {...arrowBoxStyles} onClick={previousHero}>
        <Image {...arrowImageStyles} />
      </Box>

      <Link to="/Heroes">
        <Box
          display="grid"
          width="70px"
          height="45px"
          gap="8px"
          padding="9.5"
          gridTemplateColumns="repeat(3,1fr)"
          border="2px solid #888"
          cursor="pointer"
          _hover={{
            borderColor: '#fff',
            '& .inner-box': {
              backgroundColor: '#fff',
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Box
              key={index}
              width="16px"
              height="16px"
              backgroundColor="#888"
              className="inner-box"
            />
          ))}
        </Box>
      </Link>

      <Box {...arrowBoxStyles} transform="rotate(180deg)" onClick={nextHero}>
        <Image {...arrowImageStyles} />
      </Box>
    </Box>
  );
}

export default NextAndPreviousButton;
