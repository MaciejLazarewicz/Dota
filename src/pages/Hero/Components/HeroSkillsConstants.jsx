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
    fifthSkill:
      heroSkills[heroId] && heroSkills[heroId][5]
        ? {
            fifthFirstValue: heroSkills[heroId][5][0],
            fifthSecondValue: heroSkills[heroId][5][1],
            fifthThirdValue: heroSkills[heroId][5][2],
          }
        : {},
    sixthSkill:
      heroSkills[heroId] && heroSkills[heroId][6]
        ? {
            sixthFirstValue: heroSkills[heroId][6][0],
            sixthSecondValue: heroSkills[heroId][6][1],
            sixthThirdValue: heroSkills[heroId][6][2],
          }
        : {},
    seventhSkill: heroSkills[heroId] && heroSkills[heroId][7],
    eighthSkill: heroSkills[heroId] && heroSkills[heroId][8],
    ninthSkill:
      heroSkills[heroId] && heroSkills[heroId][9]
        ? {
            ninthFirstValue: heroSkills[heroId][9][0],
            ninthSecondValue: heroSkills[heroId][9][1],
          }
        : {},
    tenthSkill: heroSkills[heroId] && heroSkills[heroId][10],
    eleventhSkill: heroSkills[heroId] && heroSkills[heroId][11],

    videoUrl: `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${formattedName}/${formattedName}_`,
    imagePath: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/${formattedName}_`,
  };
};

export default getHeroSkills;
