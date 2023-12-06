import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useBreakpoint } from '../../../components/constants/BreakPoints';

function NextAndPreviousButton({ previousHero, nextHero }) {
  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');
  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');
  const arrowBoxStyles1200 = {
    width: '20px',
    height: '45px',
  };
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
    ...(isBreakPoint1200 && arrowBoxStyles1200),
  };

  const arrowImageStyles1200 = {
    width: '10px',
    height: '22px',
  };
  const arrowImageStyles = {
    filter: 'brightness(0.5)',
    className: 'inner-image',
    width: '15px',
    height: '32px',
    src: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_solid_left.png',
    ...(isBreakPoint1200 && arrowImageStyles1200),
  };

  const chessButtonBoxStyles1200 = {
    width: '50px',
    height: '25px',
    gap: '4px',
    alignContent: 'center',
    justifyContent: 'center',
    padding: '10px',
  };

  const chessButtonBoxStyles = {
    width: '70px',
    height: '45px',
    gap: '8px',
    padding: '9.5px',
    border: '2px solid #888',
    cursor: 'pointer',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    ...(isBreakPoint1200 && chessButtonBoxStyles1200),
  };

  return (
    <Box
      position="absolute"
      right={isBreakPoint900 ? '0' : '20'}
      top={isBreakPoint900 ? '70' : '200'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="row"
      width="150px"
      height="70px"
      zIndex="999"
      gap="5px"
      bgColor={isBreakPoint900 ? '#383f4240' : ''}
      borderRadius={isBreakPoint900 ? '15px' : ''}
    >
      <Box {...arrowBoxStyles} onClick={previousHero}>
        <Image {...arrowImageStyles} />
      </Box>

      <Link to="/Heroes">
        <Box
          style={chessButtonBoxStyles}
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
              width={isBreakPoint1200 ? '12px' : '16px'}
              height={isBreakPoint1200 ? '12px' : '16px'}
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
