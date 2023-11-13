import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import HeroUpperSection from './Sections/HeroUpperSection';
import { fetchHeroData } from '../../components/FetchHeroData';
import { PUBLIC_DOMAIN } from '../HomePage/Home';
import { useParams } from 'react-router-dom';
import { ar } from '@faker-js/faker';

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
          <Box key={hero.id}>
            <HeroUpperSection
              key={hero.id}
              id={hero.id}
              name={hero.localized_name}
              img={`${PUBLIC_DOMAIN}${hero.img}`}
              alt={hero.localized_name}
              prim={hero.primary_attr}
              attackType={hero.attack_type}
              baseHP={hero.base_health}
              baseHPRegen={hero.base_health_regen}
              baseMP={hero.base_mana}
              baseMPRegen={hero.base_mana_regen}
              baseArmor={hero.base_armor}
              baseAttackMin={hero.base_attack_min}
              baseAttackMax={hero.base_attack_max}
              baseStrength={hero.base_str}
              baseAgility={hero.base_agi}
              baseIntelligence={hero.base_int}
              strengthGain={hero.str_gain}
              agilityGain={hero.agi_gain}
              intelligenceGain={hero.int_gain}
              attackRange={hero.attack_range}
              roles={hero.roles}
              attackRate={hero.attack_rate}
              baseMR={hero.base_mr}
              moveSpeed={hero.move_speed}
              attackPoint={hero.attack_point}
              dayVision={hero.day_vision}
              nightVision={hero.night_vision}
            />
          </Box>
        ))}
    </Box>
  );
}

export default HeroDetails;
