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
  catImage: string;
  catAlt: string;
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
    catImage: '/cats/midcentury-kitchen-cat.webp',
    catAlt: 'A watchful mid-century print cat beside a tomato',
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
  {
    slug: 'classic-crepes',
    title: 'Classic Crepes',
    description:
      'Thin, golden crepes ready for cinnamon sugar, jam, Nutella, or Pascal’s s’more filling.',
    author: 'Dad',
    yield: 'About 12–16 crepes',
    yieldRange: [12, 16],
    yieldUnit: 'crepes',
    added: 'September 13, 2026',
    updated: 'September 13, 2026',
    section: 'Breakfast',
    meals: ['Breakfast'],
    commonIngredients: [
      'Eggs',
      'Flour',
      'Milk',
      'Vanilla',
      'Chocolate',
      'Banana',
      'Jam',
    ],
    badges: ['Valen’s favorite', 'Pascal’s s’more invention'],
    heroImage: '/photos/classic-crepes-finished.webp',
    heroAlt:
      'A plate piled with rolled and folded homemade crepes, including one filled with chocolate chips',
    catImage: '/cats/watercolor-kitchen-cat.webp',
    catAlt: 'A soft watercolor cat quietly watching from the kitchen',
    ingredients: [
      { amount: 3, item: 'eggs' },
      { amount: 1, unit: 'cup', pluralUnit: 'cups', item: 'flour' },
      { amount: 1, unit: 'cup', pluralUnit: 'cups', item: 'milk' },
      { item: 'An extra little splash of milk, as needed' },
      {
        amount: 2,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'homemade vanilla extract',
      },
      {
        item: 'Optional fillings: chocolate chips, Nutella, banana, cinnamon sugar, or any jam—especially raspberry',
      },
      {
        item: 'For s’more crepes: marshmallow pieces and chocolate chips',
      },
    ],
    steps: [
      {
        title: 'Whisk it smooth',
        text: 'Whisk the eggs, flour, 1 cup of milk, and homemade vanilla together until smooth. Add the extra little splash of milk if the batter needs loosening.',
      },
      {
        title: 'Heat the pan',
        text: 'Warm a pan over medium heat. Pour in enough batter to spread into a thin crepe; the pan size will determine whether the batch makes closer to 12 or 16.',
      },
      {
        title: 'Cook both sides',
        text: 'Cook until the first side is golden brown, then flip and cook the other side.',
      },
      {
        title: 'Fill and shape',
        text: 'Add a favorite filling or topping. Roll them for the kids, or fold them into squares the way Dad likes them.',
      },
    ],
    houseNote: {
      title: 'Pro tip: French toast → crepes',
      text: 'If Orinda wants French toast while everyone else wants crepes, start with the French toast. Then add flour, eggs, and a splash of milk to the remaining cinnamon-sugar custard. Aim for crepe-batter consistency rather than exact amounts.',
    },
    familyNote: {
      title: 'Valen’s favorite',
      text: 'The kids like their crepes rolled. Dad prefers them folded into squares, more French-style. S’more crepes—marshmallow pieces and chocolate chips—are Pascal’s invention.',
    },
  },
];

export const dadsFrenchToast = recipes[0];
export const classicCrepes = recipes[1];
