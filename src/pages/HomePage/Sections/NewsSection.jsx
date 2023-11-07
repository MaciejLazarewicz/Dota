import { Box, Text, Image } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';

function NewsSection() {
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
  const generateRandomImage = () => {
    return faker.image.url();
  };
  const generateRandomTitle = () => {
    return faker.lorem.words();
  };

  const generateRandomDescription = (wordCount) => {
    return faker.lorem.words(wordCount);
  };

  const randomDate = generateRandomDate();
  const randomImage = generateRandomImage();
  const randomTitle = generateRandomTitle();
  const randomSentence = generateRandomDescription(20);

  return (
    <Box width="100%" height="30%">
      <Box
        width="25%"
        height="100%"
        position="relative"
        overflow="hidden"
        cursor="pointer"
      >
        <Image
          height="250px"
          width="350px"
          src={randomImage}
          alt="Random Image from faker.js"
        />
        <Box
          gap="5px"
          display="flex"
          flexDir="column"
          width="350px"
          position="absolute"
          zIndex="1"
          top="75%"
          textTransform="capitalize"
          backgroundColor="rgba(169, 169, 169, 0.4)"
        >
          <Box
            display="flex"
            flexDir="column"
            marginLeft="10px"
            marginTop="5px"
            gap="5px"
            transform="translateY(0%)"
            transition="transform, 0.3s ease-in-out"
            _hover={{
              opacity: 1,
              background:
                'linear-gradient(rgba(19, 23, 28, 0) 60%, rgba(19, 23, 28, 0.733) 70%, rgb(19, 23, 28) 90%)',
              width: '100%',

              transform: 'translateY(-100%)',
              transition:
                'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
            }}
          >
            <Text margin="0" fontSize="20px" color="rgba(255,255,255,0.7)">
              {randomDate}
            </Text>
            <Text margin="0" fontSize="20px" color="#fff">
              {randomTitle}
            </Text>
            <Text color="rgba(255,255,255,0.7)">{randomSentence}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NewsSection;
