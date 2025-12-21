/* 
  This file handles fetching quiz questions from online JSON files.
  It exports a single async function `fetchAllCategories` which returns
  an object like: 
  {
    "General Knowledge": [...],
    "Sports": [...],
    "IT": [...]
  }
*/

export const fetchAllCategories = async () => {
  try {
    const urls = {
      'General Knowledge': 'https://raw.githubusercontent.com/kibria-khandaker/QuizTestAppData/refs/heads/main/generalKnowledge.json',
      Sports: 'https://raw.githubusercontent.com/kibria-khandaker/QuizTestAppData/refs/heads/main/sports.json',
      IT: 'https://raw.githubusercontent.com/kibria-khandaker/QuizTestAppData/refs/heads/main/it.json',
    };

    const data = {};
    for (const category in urls) {
      const res = await fetch(urls[category]);
      const json = await res.json();
      data[category] = json;
    }

    return data;
  } catch (err) {
    console.log('Error fetching quiz data:', err);
    return {
      'General Knowledge': [],
      Sports: [],
      IT: [],
    };
  }
};
