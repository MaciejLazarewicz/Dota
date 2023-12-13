import { useMediaQuery } from '@chakra-ui/react';

export const breakpoints = {
  isBreakPoint300: '(max-width: 300px)',
  isBreakPoint350: '(max-width: 350px)',
  isBreakPoint400: '(max-width: 400px)',
  isBreakPoint450: '(max-width: 450px)',
  isBreakPoint550: '(max-width: 550px)',
  isBreakPoint600: '(max-width: 600px)',
  isBreakPoint700: '(max-width: 700px)',
  isBreakPoint900: '(max-width: 900px)',
  isBreakPoint1000: '(max-width: 1000px)',
  isBreakPoint1200: '(max-width: 1200px)',
  isBreakPoint1300: '(max-width: 1300px)',
  isBreakPoint1500: '(max-width: 1500px)',
  isBreakPoint1650: '(max-width: 1650px)',
  isBreakPoint1900: '(max-width: 1900px)',
};
export const useBreakpoint = (breakpoint) => {
  return useMediaQuery(breakpoints[breakpoint]);
};
