export const fetchHeroData = async () => {
  try {
    const response = await fetch('https://api.opendota.com/api/heroStats');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const heroData = await response.json();
    return heroData;
  } catch (error) {
    console.error('Error fetching heroes:', error);
    throw error;
  }
};
