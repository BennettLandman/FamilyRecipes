export const assetPath = '/FamilyRecipes';

export const recipeSections = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Appetizers',
  'Side dishes',
  'Desserts',
] as const;
export type RecipeSection = (typeof recipeSections)[number];

export type RecipeIngredient = {
  amount?: number;
  range?: [number, number];
  unit?: string;
  pluralUnit?: string;
  item: string;
  approximate?: boolean;
};

export type RecipeStep = { title: string; text: string };

export type Recipe = {
  slug: string;
  title: string;
  description: string;
  author: string;
  yield: string;
  yieldRange: [number, number];
  yieldUnit: string;
  added: string;
  updated: string;
  section: RecipeSection;
  meals: string[];
  commonIngredients: string[];
  badges: string[];
  heroImage: string;
  heroAlt: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  houseNote?: { title: string; text: string };
  familyNote?: { title: string; text: string };
};

export const recipes: Recipe[] = [
  {
    slug: 'dads-french-toast',
    title: 'Dad’s French Toast',
    description:
      'Slow-cooked, cinnamon-sugared French toast with a custardy middle and caramelized edges.',
    author: 'Dad',
    yield: 'About 4–5 pieces',
    yieldRange: [4, 5],
    yieldUnit: 'pieces',
    added: 'September 13, 2026',
    updated: 'September 13, 2026',
    section: 'Breakfast',
    meals: ['Breakfast'],
    commonIngredients: ['Eggs', 'Bread', 'Milk', 'Cinnamon'],
    badges: ['Dad’s recipe'],
    heroImage: '/photos/dads-french-toast-finished.webp',
    heroAlt:
      'Two pieces of French toast dusted with cinnamon sugar on a ceramic plate',
    ingredients: [
      { amount: 3, item: 'eggs' },
      { amount: 1.5, unit: 'cup', pluralUnit: 'cups', item: 'milk' },
      {
        amount: 2,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'cinnamon sugar',
      },
      {
        amount: 1,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'vanilla extract',
        approximate: true,
      },
      {
        range: [4, 5],
        unit: 'piece',
        pluralUnit: 'pieces',
        item: 'of bread, bagel halves, or other mildly stale bread',
      },
      { item: 'Butter, for the pan' },
    ],
    steps: [
      {
        title: 'Make the custard',
        text: 'Gently whisk together the eggs, milk, cinnamon sugar, and vanilla.',
      },
      {
        title: 'Give the bread time',
        text: 'Soak the bread or bagels for at least 3 to 4 minutes. It should become soft without completely falling apart—you’re making a custard inside the bread.',
      },
      {
        title: 'Warm the pan',
        text: 'Set a pan over medium to medium-low heat and add a little butter for flavor around the edges of the toast.',
      },
      {
        title: 'Cook it slowly',
        text: 'Cook, turning once, with enough heat to caramelize the outside but slowly enough to cook the custardy center all the way through.',
      },
    ],
    houseNote: {
      title: 'The house cinnamon sugar',
      text: 'Mix light brown sugar or white sugar with a generous helping of cinnamon, shake it together, and keep it in a jar for next time.',
    },
    familyNote: {
      title: 'Family table note',
      text: 'Orinda only likes the end pieces of bread.',
    },
  },
];

export const dadsFrenchToast = recipes[0];
