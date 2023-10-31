import { useState, useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import HeroGrid from './HeroGrid';

export const PUBLIC_DOMAIN = 'https://cdn.cloudflare.steamstatic.com/';

function Hero() {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await fetch('https://api.opendota.com/api/heroStats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const heroData = await response.json();
        setHeroes(heroData);
      } catch (error) {
        console.error('Error fetching heroes:', error);
      }
    };

    fetchHero();
  }, []);

  return (
    <Box width="90%">
      {heroes.map((hero) => (
        <HeroGrid
          key={hero.id}
          name={hero.localized_name}
          img={`${PUBLIC_DOMAIN}${hero.img}`}
          alt={hero.localized_name}
          icon={`${PUBLIC_DOMAIN}${hero.primary_attr.icon}`}
          prim={hero.primary_attr}
        />
      ))}
    </Box>
  );
}

export default Hero;
