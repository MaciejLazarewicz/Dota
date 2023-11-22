import { Box } from '@chakra-ui/react';

function BackgroundVideo() {
  return (
    <Box width="100%" height="800px">
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
      <Box
        background="linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.733) 90%, rgb(0, 0, 0) 100%)"
        position="absolute"
        width="100%"
        height="100%"
        top="-150"
      />
    </Box>
  );
}

export default BackgroundVideo;
