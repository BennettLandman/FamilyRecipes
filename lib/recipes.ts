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
  yieldPluralUnit: string;
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
    yieldUnit: 'piece',
    yieldPluralUnit: 'pieces',
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
    yieldUnit: 'crepe',
    yieldPluralUnit: 'crepes',
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
  {
    slug: 'orindas-honey-goat-cheese',
    title: 'Orinda’s Honey Goat Cheese',
    description:
      'Honeyed, lemon-zested goat cheese shaped by hand and dressed with fresh fig flowers.',
    author: 'Orinda',
    yield: 'One 8-ounce appetizer',
    yieldRange: [1, 1],
    yieldUnit: 'batch',
    yieldPluralUnit: 'batches',
    added: 'September 13, 2026',
    updated: 'September 13, 2026',
    section: 'Appetizers',
    meals: ['Appetizers'],
    commonIngredients: ['Goat cheese', 'Honey', 'Lemon', 'Milk', 'Figs'],
    badges: ['Orinda’s recipe'],
    heroImage: '/photos/orindas-honey-goat-cheese-finished.webp',
    heroAlt:
      'Honey goat cheese on a wooden serving board decorated with fresh fig flowers',
    catImage: '/cats/collage-kitchen-cat.webp',
    catAlt: 'A small collage-style cat sitting quietly in the kitchen',
    ingredients: [
      {
        amount: 1,
        unit: '8-ounce log',
        pluralUnit: '8-ounce logs',
        item: 'goat cheese',
      },
      {
        amount: 2,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'honey, or to taste',
      },
      { item: 'Lemon zest, to taste' },
      { item: 'A dash of milk, plus more as needed' },
      { item: 'Fresh figs, optional' },
    ],
    steps: [
      {
        title: 'Coat the cheese',
        text: 'Take the goat cheese out of its package and place it in a bowl. Drizzle with the honey until fully coated, or until it reaches the amount you like.',
      },
      {
        title: 'Add the lemon',
        text: 'Zest lemon directly over the goat cheese.',
      },
      {
        title: 'Mix by hand',
        text: 'Use your fingers to mix the goat cheese, honey, and lemon zest until fully combined.',
      },
      {
        title: 'Adjust the consistency',
        text: 'Add milk a dash at a time until the mixture reaches the consistency you want.',
      },
      {
        title: 'Shape it',
        text: 'Line the bottom of a small container with parchment. Spoon in the mixture and pat it down lightly.',
      },
      {
        title: 'Turn it out',
        text: 'Slide a knife around the edges, invert the container, and pat the bottom until the goat cheese releases.',
      },
      {
        title: 'Make fig flowers',
        text: 'Optional: cut the figs into quarters. Arrange groups of 5 to 7 fig pieces like flowers on top of and around the goat cheese.',
      },
    ],
    houseNote: {
      title: 'Orinda’s measure',
      text: 'The honey and milk are guided by taste and texture: fully coat the cheese, then add milk only until the consistency feels right.',
    },
  },
  {
    slug: 'moms-roasted-okra',
    title: 'Mom’s Roasted Okra',
    description:
      'Garden okra and peppers roasted simply with olive oil, Lawry’s, and black pepper until tender.',
    author: 'Mom',
    yield: 'One sheet-pan batch',
    yieldRange: [1, 1],
    yieldUnit: 'batch',
    yieldPluralUnit: 'batches',
    added: 'September 13, 2026',
    updated: 'September 13, 2026',
    section: 'Side dishes',
    meals: ['Side dishes'],
    commonIngredients: [
      'Okra',
      'Peppers',
      'Olive oil',
      'Lawry’s Seasoned Salt',
      'Black pepper',
    ],
    badges: ['Mom’s garden recipe'],
    heroImage: '/photos/moms-roasted-okra-finished.webp',
    heroAlt:
      'Whole roasted okra seasoned with black pepper in a white bowl with blue stars',
    catImage: '/cats/ink-kitchen-cat.webp',
    catAlt: 'A small ink-drawn cat stretching near the recipe',
    ingredients: [
      { item: 'Fresh okra' },
      { item: 'Other vegetables, such as spicy peppers, optional' },
      { item: 'Olive oil, as needed' },
      { item: 'Lawry’s Seasoned Salt, to taste' },
      { item: 'Black pepper, to taste' },
    ],
    steps: [
      {
        title: 'Pick, preheat, and line',
        text: 'Pick the okra and any other vegetables. Preheat the oven to 400°F. Choose a cookie sheet that can handle 400°F and fits easily in the dishwasher, then line it with parchment paper.',
      },
      {
        title: 'Wash well',
        text: 'Thoroughly wash the okra and other vegetables, making sure to remove the dirt. Put the vegetables on the parchment while they are still dripping wet.',
      },
      {
        title: 'Build a little wall',
        text: 'If some vegetables are spicy, fold a small parchment-paper wall to keep the peppers separate from the okra.',
      },
      {
        title: 'Season every side',
        text: 'Drizzle first with olive oil so the seasoning sticks; the water left from washing helps too. Sprinkle with Lawry’s Seasoned Salt and black pepper, then stir so every side gets coated.',
      },
      {
        title: 'Roast until soft',
        text: 'Roast in the hot oven for at least 10 minutes. Larger okra may need considerably longer at 400°F. Test it by touch and take it out when the okra is soft.',
      },
    ],
    houseNote: {
      title: 'Choose the practical pan',
      text: 'Use a cookie sheet that fits easily in the dishwasher. The parchment makes cleanup simpler and can double as a wall between mild and spicy vegetables.',
    },
  },
  {
    slug: 'moms-toasties',
    title: 'Mom’s Toasties',
    description:
      'Thin, diagonally sliced baguette toasties, broiled simply and ready for whatever spread comes next.',
    author: 'Mom',
    yield: 'One baguette',
    yieldRange: [1, 1],
    yieldUnit: 'baguette',
    yieldPluralUnit: 'baguettes',
    added: 'September 13, 2026',
    updated: 'September 13, 2026',
    section: 'Appetizers',
    meals: ['Appetizers'],
    commonIngredients: ['Bread', 'Baguette', 'Olive oil'],
    badges: ['Mom’s recipe'],
    heroImage: '/photos/moms-toasties-finished.webp',
    heroAlt:
      'A broiler-safe tray filled with diagonally sliced baguette toasties browned to different levels',
    catImage: '/cats/moms-toasties-linocut-cat.webp',
    catAlt: 'A handmade linocut-style cat inspecting a tiny toastie',
    ingredients: [
      {
        amount: 1,
        unit: 'baguette',
        pluralUnit: 'baguettes',
        item: 'for slicing',
      },
      { item: 'Olive oil, optional' },
    ],
    steps: [
      {
        title: 'Slice on the diagonal',
        text: 'Cut the baguette diagonally into thin slices, about ⅓ to ½ inch thick.',
      },
      {
        title: 'Choose oil or no oil',
        text: 'For a richer taste, lightly brush the slices with olive oil. To let the flavor of the eventual spread show through, leave them plain.',
      },
      {
        title: 'Arrange for broiling',
        text: 'Place the slices in a single layer on a broiler-safe pan.',
      },
      {
        title: 'Broil low and watch',
        text: 'Broil on low until the toasties are done to your liking. They can darken quickly, so stay close.',
      },
      {
        title: 'Flip only if fancy',
        text: 'For more even browning, carefully flip the toasties and briefly broil the second side—but do not burn yourself.',
      },
    ],
    houseNote: {
      title: 'Let the spread decide',
      text: 'Oil makes a richer toastie. Leaving the bread plain gives honey goat cheese or another flavorful spread the whole stage.',
    },
  },
];

export const dadsFrenchToast = recipes[0];
export const classicCrepes = recipes[1];
export const orindasHoneyGoatCheese = recipes[2];
export const momsRoastedOkra = recipes[3];
export const momsToasties = recipes[4];
