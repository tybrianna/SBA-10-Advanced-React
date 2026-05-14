const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const endpoints = {
  categories: `${BASE_URL}/categories.php`,
  mealsByCategory: (category: string) =>
    `${BASE_URL}/filter.php?c=${category}`,
  mealDetails: (id: string) =>
    `${BASE_URL}/lookup.php?i=${id}`,
  searchMeals: (query: string) =>
    `${BASE_URL}/search.php?s=${query}`,
};