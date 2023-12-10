import { Box, Text, Image } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import { useBreakpoint } from './constants/BreakPoints';
import UnstyledReactRouterLink from './UnstyledReactRouterLink';

function HomeNewsComponent() {
  const [isBreakPoint900] = useBreakpoint('isBreakPoint900');
  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');

  const generateRandomDate = () => {
    const startDate = new Date(2019, 0, 1);
    const endDate = new Date();
    const randomDate = new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );

    const day = randomDate.getDate();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const monthName = monthNames[randomDate.getMonth()];
    const year = randomDate.getFullYear();

    return `${day} ${monthName} ${year}`;
  };

  const generateRandomTitle = () => {
    return faker.lorem.words();
  };

  const generateRandomDescription = (wordCount) => {
    return faker.lorem.words(wordCount);
  };

  const randomDate = generateRandomDate();

  const randomTitle = generateRandomTitle();
  const randomSentence = generateRandomDescription(20);

  const commonUrl = `https://clan.cloudflare.steamstatic.com/images/3703047/`;

  const generateImages = () => {
    const imageUrls = [
      `${commonUrl}678dbe85cacbc5aebbbfde27e48e7633dce28e9f.png`,
      `${commonUrl}c46bb21992914989e08cd1db26447bcb7ec6e7a2.jpg`,
      `${commonUrl}61f41c8b3ccb608a9ea87735685707a88a5ee08c.png`,
    ];
    return imageUrls.map((url) => ({
      src: url,
    }));
  };
  const imagesUrl = generateImages();

  const mainBoxStyles = {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const imageWidth1200 = {
    height: '200px',
    width: '270px',
  };

  const imageWidth900 = {
    width: '200px',
    height: '100px',
  };

  const imageStyles = {
    height: '250px',
    width: '350px',
    borderRadius: '15px',
    ...(isBreakPoint1200 && imageWidth1200),
    ...(isBreakPoint900 && imageWidth900),
  };

  const imageOverlayWidth1200 = {
    width: '300px',
    height: '55px',
  };
  const imageOverlayWidth900 = {
    display: 'none',
  };

  const imageOverlayStyles = {
    width: '350px',
    height: '75px',
    position: 'absolute',
    bottom: 3,
    left: '0',
    background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '15px',

    ...(isBreakPoint1200 && imageOverlayWidth1200),
    ...(isBreakPoint900 && imageOverlayWidth900),
  };

  const imageTextBoxWidth1200 = {
    paddingTop: '190px',
  };
  const imageTextBoxWidth900 = {
    paddingTop: '60px',
    transform: 'translateY(5px)',
  };

  const imageTextBoxStyles = {
    display: 'flex',
    flexDir: 'column',
    gap: '5px',
    width: '350px',
    height: '100%',
    paddingTop: '230px',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    textTransform: 'capitalize',
    textAlign: 'justify',
    transform: 'translateY(-10%)',
    transition: 'transform 0.3s ease-in-out',
    _hover: {
      transform: 'translateY(-30%)',
      transition:
        'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
    ...(isBreakPoint1200 && imageTextBoxWidth1200),
    ...(isBreakPoint900 && imageTextBoxWidth900),
  };

  return (
    <Box height="30%" display="flex" gap="35px">
      {imagesUrl.map((image, index) => (
        <>
          <UnstyledReactRouterLink to="https://www.dota2.com/news">
            <Box
              style={mainBoxStyles}
              key={index}
              _hover={{
                borderBottom: '2px solid #f51',
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease-in-out',
              }}
              borderBottom="2px solid rgba(255,255,255,0.7)"
            >
              <Image
                style={imageStyles}
                src={image.src}
                alt="Random Gaming Image from Unsplash"
                borderRadius="15px"
              />

              <Box style={imageOverlayStyles} borderRadius="15px" />

              <Box style={imageTextBoxStyles}>
                <Box marginX="10px" width="250px">
                  <Text
                    margin="0"
                    fontSize={isBreakPoint900 ? '10px' : '20px'}
                    color="rgba(255,255,255,0.7)"
                  >
                    {randomDate}
                  </Text>
                  <Text
                    marginX="0"
                    marginTop={isBreakPoint900 ? '5px' : '0'}
                    marginBottom="30px"
                    fontSize={isBreakPoint900 ? ' 10px' : '20px'}
                    color="#fff"
                  >
                    {randomTitle}
                  </Text>

                  <Text color="rgba(255,255,255,0.7)">{randomSentence}</Text>
                </Box>
              </Box>
            </Box>
          </UnstyledReactRouterLink>
        </>
      ))}
    </Box>
  );
}

export default HomeNewsComponent;
