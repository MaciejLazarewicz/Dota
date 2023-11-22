import { Box, Text, Image } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';

function HomeNewsComponent() {
  const generateRandomDate = () => {
    const startDate = new Date(2019, 0, 1);
    const endDate = new Date();
    const randomDate = new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );

    const day = randomDate.getDate();
    const monthNames = [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień',
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

  return (
    <Box height="30%" display="flex" gap="35px">
      {imagesUrl.map((image, index) => (
        <Box
          width="100%"
          height="100%"
          position="relative"
          overflow="hidden"
          cursor="pointer"
          key={index}
          _hover={{
            borderBottom: '2px solid #f51',
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease-in-out',
          }}
          borderBottom="2px solid rgba(255,255,255,0.7)"
        >
          <Image
            height="250px"
            width="350px"
            src={image.src}
            alt="Random Gaming Image from Unsplash"
            borderRadius="15px"
          />

          <Box
            position="absolute"
            bottom="3"
            left="0"
            width="350px"
            height="85px"
            background="rgba(255,255,255,0.2)"
            borderRadius="15px"
          />

          <Box
            gap="5px"
            display="flex"
            flexDir="column"
            width="350px"
            height="100%"
            paddingTop="230px"
            position="absolute"
            top="0"
            left="0"
            zIndex="1"
            textTransform="capitalize"
            textAlign="justify"
            transform="translateY(-10%)"
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: 'translateY(-30%)',
              transition:
                'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
              backgroundColor: 'rgba(0,0,0,0.8)',
            }}
          >
            <Box marginLeft="15px" marginRight="15px">
              <Text margin="0" fontSize="20px" color="rgba(255,255,255,0.7)">
                {randomDate}
              </Text>
              <Text
                marginX="0"
                marginTop="0"
                marginBottom="30px"
                fontSize="20px"
                color="#fff"
              >
                {randomTitle}
              </Text>

              <Text color="rgba(255,255,255,0.7)">{randomSentence}</Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default HomeNewsComponent;
