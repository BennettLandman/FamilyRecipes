export const assetPath = '/FamilyRecipes';

export type Recipe = {
  slug: string;
  title: string;
  description: string;
  author: string;
  yield: string;
  added: string;
  updated: string;
  meals: string[];
  commonIngredients: string[];
  badges: string[];
  heroImage: string;
  heroAlt: string;
};

export const recipes: Recipe[] = [{
  slug: 'dads-french-toast',
  title: 'Dad’s French Toast',
  description: 'Slow-cooked, cinnamon-sugared French toast with a custardy middle and caramelized edges.',
  author: 'Dad',
  yield: 'About 4–5 pieces',
  added: 'September 13, 2026',
  updated: 'September 13, 2026',
  meals: ['Breakfast'],
  commonIngredients: ['Eggs', 'Bread', 'Milk', 'Cinnamon'],
  badges: ['Dad’s recipe'],
  heroImage: '/photos/dads-french-toast-finished.webp',
  heroAlt: 'Two pieces of French toast dusted with cinnamon sugar on a ceramic plate',
}];

export const dadsFrenchToast = recipes[0];
