import { useBreakpoint } from './BreakPoints';
const FontStyles = () => {
  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');
  const [isBreakPoint1500] = useBreakpoint('isBreakPoint1500');
  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');
  const [isBreakPoint600] = useBreakpoint('isBreakPoint600');
  const [isBreakPoint450] = useBreakpoint('isBreakPoint450');
  const darkFont = {
    fontSize: '70px',
    color: 'rgba(226,218,206,.5647058824)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 700,
    lineHeight: '105%',
    marginBottom: '5px',
  };

  const lightFont = {
    fontSize: '100px',
    color: '#e2dace',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 700,
    lineHeight: '105%',
    marginTop: '5px',
    marginBottom: '20px',
  };
  const descriptionFont = {
    color: '#e2dace',
    fontSize: '26px',
    letterSpacing: '2px',
    lineHeight: '105%',
    marginTop: '20px',
  };
  const buttonFont = {
    fontSize: '20px',
    textTransform: 'uppercase',
  };

  const darkFont1500 = {
    fontSize: '50px',
  };

  const darkFont1200 = {
    fontSize: '44px',
  };
  const darkFont900 = {
    fontSize: '36px',
  };
  const darkFont600 = {
    fontSize: '28px',
  };
  const darkFont450 = {
    fontSize: '20px',
  };
  const lightFont1500 = {
    fontSize: '56px',
  };

  const lightFont1200 = {
    fontSize: ' 60px',
  };
  const lightFont900 = {
    fontSize: ' 44px',
  };
  const lightFont600 = {
    fontSize: '20px',
  };
  const lightFont450 = {
    fontSize: '14px',
  };

  const descriptionFont1500 = {
    fontSize: '24px',
  };

  const descriptionFont1200 = {};

  const descriptionFont900 = {
    fontSize: '18px',
  };
  const descriptionFont600 = {
    fontSize: '14px',
  };
  const descriptionFont450 = {
    fontSize: '10px',
  };

  const darkFontBreakpoints = {
    ...darkFont,
    ...(isBreakPoint1500 && darkFont1500),
    ...(isBreakPoint1200 && darkFont1200),

    ...(isBreakPoint900 && darkFont900),
    ...(isBreakPoint600 && darkFont600),
    ...(isBreakPoint450 && darkFont450),
  };

  const lightFontBreakpoints = {
    ...lightFont,
    ...(isBreakPoint1500 && lightFont1500),
    ...(isBreakPoint900 && lightFont900),
    ...(isBreakPoint600 && lightFont600),
    ...(isBreakPoint450 && lightFont450),
  };

  const descriptionFontBreakpoints = {
    ...descriptionFont,
    ...(isBreakPoint1500 && descriptionFont1500),
    ...(isBreakPoint900 && descriptionFont900),
    ...(isBreakPoint600 && descriptionFont600),
    ...(isBreakPoint450 && descriptionFont450),
  };
  return {
    darkFont,
    lightFont,
    descriptionFont,
    buttonFont,
    darkFont1500,
    darkFont1200,
    darkFont900,
    darkFont600,
    darkFont450,
    lightFont1500,
    lightFont1200,
    lightFont900,
    lightFont600,
    lightFont450,
    descriptionFont1500,
    descriptionFont1200,
    descriptionFont900,
    descriptionFont600,
    descriptionFont450,
    lightFontBreakpoints,
    darkFontBreakpoints,
    descriptionFontBreakpoints,
  };
};
export default FontStyles;
