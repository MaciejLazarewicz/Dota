import { Box } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import HeroUpperSection from './Sections/HeroUpperSection';
import { fetchHeroData } from '../../components/FetchHeroData';
import { PUBLIC_DOMAIN } from '../HomePage/Home';
import { useParams, useNavigate } from 'react-router-dom';
import HeroBar from './Sections/HeroBar';

import Skills from './Components/Skills';
import HeroSkillsDetails from './Components/HeroSkillsDetails';
import FooterSection from '../HomePage/Sections/FooterSection';
import HeroBottomBar from './Components/HeroBottomBar';

function HeroDetails() {
  const [heroes, setHeroes] = useState([]);
  const { name } = useParams();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [nextHeroName, setNextHeroName] = useState(null);
  const [prevHeroName, setPrevHeroName] = useState(null);
  const [nextHeroImage, setNextHeroImage] = useState(null);
  const [prevHeroImage, setPrevHeroImage] = useState(null);

  const skillRefs = {
    1: useRef(),
    2: useRef(),
    3: useRef(),
    4: useRef(),
  };

  const handleImageClick = (skillId) => {
    setSelectedSkill(skillId);
  };

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

  const navigate = useNavigate();

  const handleNextHero = () => {
    const currentIndex = heroes.findIndex(
      (hero) => hero.localized_name === name
    );
    const nextIndex = (currentIndex + 1) % heroes.length;
    const nextHero = heroes[nextIndex];
    navigate(`/Hero/${nextHero.localized_name}`);
    setNextHeroName(nextHero.localized_name);
    setPrevHeroName(name);

    setNextHeroImage(`${PUBLIC_DOMAIN}${nextHero.img}`);
    setPrevHeroImage(`${PUBLIC_DOMAIN}${heroes[currentIndex].img}`);
  };

  const handlePrevHero = () => {
    const currentIndex = heroes.findIndex(
      (hero) => hero.localized_name === name
    );
    const prevIndex = (currentIndex - 1 + heroes.length) % heroes.length;
    const prevHero = heroes[prevIndex];
    navigate(`/Hero/${prevHero.localized_name}`);
    setPrevHeroName(prevHero.localized_name);
    setNextHeroName(null);
    setNextHeroImage(`${PUBLIC_DOMAIN}${heroes[currentIndex].img}`);
    setPrevHeroImage(`${PUBLIC_DOMAIN}${prevHero.img}`);
  };

  return (
    <Box>
      {heroes
        .filter((hero) => (name ? hero.localized_name === name : true))
        .map((hero) => (
          <Box key={hero.id} name={hero.localized_name}>
            <HeroUpperSection
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
            <HeroBar
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

            <Skills
              heroId={hero.id}
              name={hero.localized_name}
              onImageClick={handleImageClick}
            />
            <HeroSkillsDetails
              heroId={hero.id}
              refs={skillRefs}
              name={name}
              selectedSkill={selectedSkill}
            />
            <HeroBottomBar
              heroId={hero.id}
              name={name}
              nextHero={handleNextHero}
              nextHeroName={nextHeroName}
              previousHero={handlePrevHero}
              previousHeroName={prevHeroName}
              nextHeroImg={nextHeroImage}
              prevHeroImg={prevHeroImage}
            />
            <FooterSection />
          </Box>
        ))}
    </Box>
  );
}

export default HeroDetails;
