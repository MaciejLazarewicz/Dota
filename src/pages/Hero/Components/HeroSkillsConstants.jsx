import { heroSkills } from './HeroSkills';

export const formattedName = (name) => {
  return name.toLowerCase().replace(/\s+/g, '_').replace('-', '');
};

export const getHeroSkills = (heroId, formattedName) => {
  return {
    firstSkill: heroSkills[heroId] && heroSkills[heroId][1],
    secondSkill: heroSkills[heroId] && heroSkills[heroId][2],
    thirdSkill: heroSkills[heroId] && heroSkills[heroId][3],
    fourthSkill: heroSkills[heroId] && heroSkills[heroId][4],
    fifthSkill: heroSkills[heroId] && heroSkills[heroId][5],
    sixthSkill: heroSkills[heroId] && heroSkills[heroId][6],
    seventhSkill: heroSkills[heroId] && heroSkills[heroId][7],
    eighthSkill: heroSkills[heroId] && heroSkills[heroId][8],
    ninthSkill: heroSkills[heroId] && heroSkills[heroId][9],
    tenthSkill: heroSkills[heroId] && heroSkills[heroId][10],
    videoUrl: `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${formattedName}/${formattedName}_`,
    imagePath: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${formattedName}_`,
  };
};

export default getHeroSkills;
