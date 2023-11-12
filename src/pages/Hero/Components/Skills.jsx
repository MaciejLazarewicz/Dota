import { Box, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function Skills() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const imagesStyles = {
    width: '80px',
    height: '80px',
    cursor: 'pointer',
    boxShadow: '0px 0px 20px #000, 0px 0px 20px #000',
    _hover: {
      transform: 'scale(1.1)',
    },
  };
  const videoUrl =
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/antimage/antimage_';
  const videoStyles = {
    autoPlay: 'autoPlay',
    muted: 'muted',
    loop: 'loop',
    width: '250px',
    height: '150px',
  };
  const videoBoxStyles = {
    opacity: 0,
  };
  const handleImageHover = (videoName) => {
    setSelectedVideo(videoName);
  };

  const handleImageLeave = () => {
    setSelectedVideo(null);
  };

  const toolTipStyles = {
    background: '#424C55',
    zIndex: '999',
  };

  return (
    <Box position="absolute" top="600px" right="500px">
      <Box
        display="flex"
        position="absolute"
        bottom="140px"
        left="-80px"
        {...(selectedVideo === 'mana_break' ? {} : videoBoxStyles)}
      >
        <video {...videoStyles} src={videoUrl + 'mana_break.webm'} />
        <Box
          display="flex"
          flexDir="column"
          width="250px"
          height="170px"
          bottom="-160px"
          position="absolute"
          {...toolTipStyles}
        >
          <Box zIndex="5" paddingX="10px" paddingBottom="15px" marginTop="-5px">
            <Text
              color="#fff"
              textTransform="uppercase"
              fontWeight="bold"
              letterSpacing="2px"
              fontSize="20px"
              marginBottom="2.5px"
            >
              Mana Break
            </Text>

            <Text
              color="#ddd"
              fontSize="17px"
              letterSpacing="0px"
              marginTop="2.5px"
              textAlign="left"
            >
              Spala manę wroga z każdym atakiem i zadaje celowi obrażenia równe
              pewnemu procentowi spalonej many. Jednostki bez many są
              spowalniane na krótki czas.
            </Text>
          </Box>
          <Box
            position="absolute"
            width="25px"
            height="25px"
            transform="rotate(45deg)"
            {...toolTipStyles}
            bottom="-10px"
            left="110px"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        position="absolute"
        bottom="100px"
        left="-10px"
        {...(selectedVideo === 'blink' ? {} : videoBoxStyles)}
      >
        <video {...videoStyles} src={videoUrl + 'blink.webm'} />
        <Box
          display="flex"
          flexDir="column"
          width="250px"
          height="140px"
          bottom="-120px"
          position="absolute"
          {...toolTipStyles}
        >
          <Box zIndex="5" paddingX="10px" paddingBottom="15px" marginTop="-5px">
            <Text
              color="#fff"
              textTransform="uppercase"
              fontWeight="bold"
              letterSpacing="2px"
              fontSize="20px"
              marginBottom="2.5px"
            >
              Blink
            </Text>

            <Text
              color="#ddd"
              fontSize="17px"
              letterSpacing="0px"
              marginTop="2.5px"
              textAlign="left"
            >
              Krótkodystansowa teleportacja, która umożliwia Anti-Mage'owi
              wkraczanie do walki i opuszczanie jej.
            </Text>
          </Box>
          <Box
            position="absolute"
            width="25px"
            height="25px"
            transform="rotate(45deg)"
            {...toolTipStyles}
            bottom="-10px"
            left="110px"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        position="absolute"
        bottom="165px"
        left="100px"
        {...(selectedVideo === 'counterspell' ? {} : videoBoxStyles)}
      >
        <video {...videoStyles} src={videoUrl + 'counterspell.webm'} />
        <Box
          display="flex"
          flexDir="column"
          width="250px"
          height="190px"
          bottom="-180px"
          position="absolute"
          {...toolTipStyles}
        >
          <Box zIndex="5" paddingX="10px" paddingBottom="15px" marginTop="-5px">
            <Text
              color="#fff"
              textTransform="uppercase"
              fontWeight="bold"
              letterSpacing="2px"
              fontSize="20px"
              marginBottom="2.5px"
            >
              Counterspell
            </Text>

            <Text
              color="#ddd"
              fontSize="17px"
              letterSpacing="0px"
              marginTop="2.5px"
              textAlign="left"
            >
              Pasywne zapewnia odporność na magię. Counterspell może zostać
              aktywowane, by otoczyć Anti-Mage'a antymagiczną powłoką, która
              zablokuje i odbije wszelkie czary celowane z powrotem w stronę
              rzucającego.
            </Text>
          </Box>
          <Box
            position="absolute"
            width="25px"
            height="25px"
            transform="rotate(45deg)"
            {...toolTipStyles}
            bottom="-10px"
            left="110px"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        position="absolute"
        bottom="135px"
        left="200px"
        {...(selectedVideo === 'mana_void' ? {} : videoBoxStyles)}
      >
        <video
          className="video"
          {...videoStyles}
          src={videoUrl + 'mana_void.webm'}
        />
        <Box
          display="flex"
          flexDir="column"
          width="250px"
          height="170px"
          bottom="-160px"
          position="absolute"
          {...toolTipStyles}
        >
          <Box zIndex="5" paddingX="10px" paddingBottom="15px" marginTop="-5px">
            <Text
              color="#fff"
              textTransform="uppercase"
              fontWeight="bold"
              letterSpacing="2px"
              fontSize="20px"
              marginBottom="2.5px"
            >
              Mana Void
            </Text>

            <Text
              color="#ddd"
              fontSize="17px"
              letterSpacing="0px"
              marginTop="2.5px"
              textAlign="left"
            >
              Każdy brakujący punkt many wybranej jednostki powoduje obrażenia,
              które są zadawane jej oraz pobliskim wrogom. Na główny cel
              zostanie także nałożone miniogłuszenie.
            </Text>
          </Box>
          <Box
            position="absolute"
            width="25px"
            height="25px"
            transform="rotate(45deg)"
            {...toolTipStyles}
            bottom="-10px"
            left="110px"
          />
        </Box>
      </Box>

      <Box
        display="flex"
        flexDir="column"
        position="absolute"
        alignItems="center"
      >
        <Text
          marginBottom="15px"
          letterSpacing="2px"
          fontSize="18px"
          textTransform="uppercase"
          color="#fff"
        >
          Umiejętności
        </Text>
        <Box display="flex" gap="15px">
          <Image
            onMouseEnter={() => handleImageHover('mana_break')}
            onMouseLeave={handleImageLeave}
            {...imagesStyles}
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_break.png"
          />
          <Image
            onMouseEnter={() => handleImageHover('blink')}
            onMouseLeave={handleImageLeave}
            {...imagesStyles}
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_blink.png"
          />
          <Image
            onMouseEnter={() => handleImageHover('counterspell')}
            onMouseLeave={handleImageLeave}
            {...imagesStyles}
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_counterspell.png"
          />
          <Image
            onMouseEnter={() => handleImageHover('mana_void')}
            onMouseLeave={handleImageLeave}
            {...imagesStyles}
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/antimage_mana_void.png"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Skills;

// DO POPRAWKI, ZA DUŻO POWTÓRZEŃ
