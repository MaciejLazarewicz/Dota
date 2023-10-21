import { Box } from '@chakra-ui/react';

function BackgroundVideo() {
  return (
    <Box>
      <video
        autoPlay
        loop
        style={{ width: '100vw', height: '75vh', objectFit: 'cover' }}
      >
        <source
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
          type="video/mp4"
        />
      </video>
    </Box>
  );
}

export default BackgroundVideo;
