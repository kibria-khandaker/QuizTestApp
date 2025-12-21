/*
  Fetch categories dynamically from ONLINE categoryConfig.json
  Expected categoryConfig.json structure (ARRAY):

  [
    {
      "title": "General Knowledge",
      "url": ".../generalKnowledge.json",
      "perExam": 10,
      "finalExamQuestions": 25
    }
  ]
*/

const CATEGORY_CONFIG_URL =
  'https://raw.githubusercontent.com/kibria-khandaker/QuizTestAppData/refs/heads/main/categoryConfig.json';

export const fetchAllCategories = async () => {
  try {
    const configRes = await fetch(CATEGORY_CONFIG_URL);
    const categoryConfig = await configRes.json();

    const data = {};

    for (const category of categoryConfig) {
      const res = await fetch(category.url);
      const questions = await res.json();

      data[category.title] = {
        questions,

        // ✅ Correct keys
        perExam: Number(category.perExam) || 10,
        finalExamQuestions: Number(category.finalExamQuestions) || 20,
      };
    }

    return data;
  } catch (error) {
    console.log('❌ Error fetching quiz data:', error);
    return {};
  }
};
