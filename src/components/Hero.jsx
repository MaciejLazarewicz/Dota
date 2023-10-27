import { useState, useEffect } from 'react';

import { Box } from '@chakra-ui/react';
function Hero() {
  const [hero, setHero] = useState([]);
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await fetch('https://api.opendota.com/api/heroStats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const heroData = await response.json();
        setHero(heroData);
      } catch (error) {
        console.error('Error fetching heroes:', error);
      }
    };

    fetchHero();
  }, []);
  const PUBLIC_DOMAIN = 'https://cdn.cloudflare.steamstatic.com/';

  return (
    <Box width="90%">
      <ul>
        {hero.map((hero) => (
          <li key={hero.id}>
            {hero.localized_name}
            <img
              src={`${PUBLIC_DOMAIN}${hero.img}`}
              alt={hero.localized_name}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default Hero;
