import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import HeroUpperSection from './Components/HeroUpperSection';
import { fetchHeroData } from '../../components/FetchHeroData';
import { PUBLIC_DOMAIN } from '../HomePage/Home';
import { useParams } from 'react-router-dom';

function HeroDetails() {
  const [heroes, setHeroes] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const heroData = await fetchHeroData();
        setHeroes(heroData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      {heroes
        .filter((hero) => (name ? hero.localized_name === name : true))
        .map((hero) => (
          <HeroUpperSection
            key={hero.id}
            id={hero.id}
            name={hero.localized_name}
            img={`${PUBLIC_DOMAIN}${hero.img}`}
            alt={hero.localized_name}
            prim={hero.primary_attr}
            attackType={hero.attack_type}
          />
        ))}
    </Box>
  );
}

export default HeroDetails;
