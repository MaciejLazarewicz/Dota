import { Box } from '@chakra-ui/react';

function BackgroundVideo() {
  return (
    <Box>
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '80%', objectFit: 'cover' }}
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
