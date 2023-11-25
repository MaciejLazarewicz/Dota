import { Box, Button } from '@chakra-ui/react';

import { useBreakpoint } from './constants/BreakPoints';

function CommonButton({ children }) {
  const [isBreakPoint600] = useBreakpoint('isBreakPoint600');

  const commonButtonStyles600 = {
    height: '25px',
    padding: '25px',
    width: '150px',
  };

  const commonButtonStyles = {
    borderRadius: '5px',
    alignItems: 'center',
    height: '50px',
    padding: '30px 30px ',
    width: 'fit-content',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    letterSpacing: '2px',
    transition: 'borderColor 0.1s ease-in-out, margin-top 0.1s ease-in-out',
    ...(isBreakPoint600 && commonButtonStyles600),
  };

  const buttonBoxStyles600 = {
    fontSize: '10px',
  };

  const buttonBoxStyles = {
    display: 'flex',
    fontSize: '15px',
    color: '#fff',
    alignItems: 'center',
    gap: '15px',
    textTransform: 'uppercase',
    ...(isBreakPoint600 && buttonBoxStyles600),
  };
  return (
    <Box>
      <Button
        style={commonButtonStyles}
        border="3px solid rgba(255,255,255,.31)"
        _hover={{
          borderColor: '#f51',
          marginTop: '-2px',
        }}
      >
        <Box style={buttonBoxStyles}>{children}</Box>
      </Button>
    </Box>
  );
}

export default CommonButton;
