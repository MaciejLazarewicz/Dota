import { useMediaQuery } from '@chakra-ui/react';

export const breakpoints = {
  isBreakPoint300: '(max-width: 300px)',
  isBreakPoint350: '(max-width: 350px)',
  isBreakPoint450: '(max-width: 450px)',
  isBreakPoint550: '(max-width: 550px)',
  isBreakPoint700: '(max-width: 700px)',
  isBreakPoint900: '(max-width: 900px)',
  isBreakPoint1200: '(max-width: 1200px)',
  isBreakPoint1300: '(max-width:1300px)',
};
export const useBreakpoint = (breakpoint) => {
  return useMediaQuery(breakpoints[breakpoint]);
};
