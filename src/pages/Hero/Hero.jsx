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
import { useBreakpoint } from '../../components/constants/BreakPoints';
import Header from '../../components/Header';

function Hero() {
  const [heroes, setHeroes] = useState([]);
  const { name } = useParams();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [nextHeroName, setNextHeroName] = useState(null);
  const [prevHeroName, setPrevHeroName] = useState(null);
  const [nextHeroImage, setNextHeroImage] = useState(null);
  const [prevHeroImage, setPrevHeroImage] = useState(null);
  const [nextIndexAttr, setNextIndexAttr] = useState(null);
  const [prevIndexAttr, setPrevIndexAttr] = useState(null);
  const [nextIndexAttackType, setNextIndexAttackType] = useState(null);
  const [prevIndexAttackType, setPrevIndexAttackType] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bottomImagesUrl =
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crops/';

  const formattedName = (name) =>
    name.toLowerCase().replace(/\s+/g, '_').replace('-', '');

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

  useEffect(() => {
    if (heroes.length > 0) {
      const currentIndex = heroes.findIndex(
        (hero) => hero.localized_name === name
      );
      const prevIndex = (currentIndex - 1 + heroes.length) % heroes.length;
      const nextIndex = (currentIndex + 1) % heroes.length;

      setPrevHeroName(heroes[prevIndex].localized_name);
      setNextHeroName(heroes[nextIndex].localized_name);
      setNextIndexAttr(heroes[nextIndex].primary_attr);
      setPrevIndexAttr(heroes[prevIndex].primary_attr);
      setNextIndexAttackType(heroes[nextIndex].attack_type);
      setPrevIndexAttackType(heroes[nextIndex].attack_type);

      setPrevHeroImage(
        `${bottomImagesUrl}${formattedName(
          heroes[prevIndex].localized_name
        )}.png`
      );
      setNextHeroImage(
        `${bottomImagesUrl}${formattedName(
          heroes[nextIndex].localized_name
        )}.png`
      );
    }
  }, [name, heroes]);

  const handleNextHero = () => {
    const currentIndex = heroes.findIndex(
      (hero) => hero.localized_name === name
    );
    const nextIndex = (currentIndex + 1) % heroes.length;
    const nextHero = heroes[nextIndex];
    navigate(`/Hero/${nextHero.localized_name}`);
  };

  const handlePrevHero = () => {
    const currentIndex = heroes.findIndex(
      (hero) => hero.localized_name === name
    );
    const prevIndex = (currentIndex - 1 + heroes.length) % heroes.length;
    const prevHero = heroes[prevIndex];
    navigate(`/Hero/${prevHero.localized_name}`);
  };

  const [isBreakPoint1200] = useBreakpoint('isBreakPoint1200');

  return (
    <Box>
      {heroes
        .filter((hero) => (name ? hero.localized_name === name : true))
        .map((hero) => (
          <Box key={hero.id} name={hero.localized_name}>
            <Box width="100%" position="absolute" zIndex="999">
              <Header setIsMenuOpen={setIsMenuOpen} />
            </Box>
            {!isMenuOpen ? (
              <>
                <HeroUpperSection
                  id={hero.id}
                  name={hero.localized_name}
                  prim={hero.primary_attr}
                  attackType={hero.attack_type}
                  nextHero={handleNextHero}
                  previousHero={handlePrevHero}
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

                {isBreakPoint1200 ? null : (
                  <Skills
                    heroId={hero.id}
                    name={hero.localized_name}
                    onImageClick={handleImageClick}
                  />
                )}

                <HeroSkillsDetails
                  heroId={hero.id}
                  refs={skillRefs}
                  name={name}
                  selectedSkill={selectedSkill}
                />
                <HeroBottomBar
                  heroId={hero.id}
                  prim={hero.primary_attr}
                  name={name}
                  nextHeroName={nextHeroName}
                  previousHeroName={prevHeroName}
                  nextHeroImg={nextHeroImage}
                  prevHeroImg={prevHeroImage}
                  nextHero={handleNextHero}
                  previousHero={handlePrevHero}
                  nextIndexAttr={nextIndexAttr}
                  prevIndexAttr={prevIndexAttr}
                  nextIndexAttackType={nextIndexAttackType}
                  prevIndexAttackType={prevIndexAttackType}
                />
                <FooterSection />
              </>
            ) : null}
          </Box>
        ))}
    </Box>
  );
}

export default Hero;
