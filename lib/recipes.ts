export const assetPath = '/FamilyRecipes';

export const recipeSections = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Appetizers',
  'Side dishes',
  'Desserts',
  'Pantry',
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
  {
    slug: 'dads-lamb-gyros',
    title: 'Dad’s Lamb Gyros',
    description:
      'Herb-packed sous-vide lamb, flashed over a roaring-hot grill and piled into warm naan with garden vegetables and feta.',
    author: 'Dad',
    yield: 'About 5 pounds of lamb for gyros',
    yieldRange: [5, 5],
    yieldUnit: 'pound of lamb',
    yieldPluralUnit: 'pounds of lamb',
    added: 'September 13, 2026',
    updated: 'September 13, 2026',
    section: 'Dinner',
    meals: ['Dinner'],
    commonIngredients: [
      'Lamb',
      'Sage',
      'Chives',
      'Naan',
      'Feta',
      'Cucumber',
      'Tomatoes',
      'Tzatziki',
    ],
    badges: ['Dad’s recipe'],
    heroImage: '/photos/dads-lamb-gyros-chopped.webp',
    heroAlt: 'Medium-rare grilled lamb chopped into pieces for filling gyros',
    catImage: '/cats/dads-lamb-gyros-grill-cat.webp',
    catAlt:
      'A small painted cat using very long tongs to tend a tiny flaming grill',
    ingredients: [
      {
        amount: 5,
        unit: 'pound',
        pluralUnit: 'pounds',
        item: 'boneless leg of lamb, casing removed',
        approximate: true,
      },
      {
        amount: 1,
        unit: 'large handful',
        pluralUnit: 'large handfuls',
        item: 'fresh sage',
      },
      {
        amount: 1,
        unit: 'large handful',
        pluralUnit: 'large handfuls',
        item: 'garlic chives',
      },
      {
        amount: 1,
        unit: 'large handful',
        pluralUnit: 'large handfuls',
        item: 'regular chives',
      },
      { item: 'Cutting celery, if available' },
      { item: 'Salt and black pepper, for seasoning' },
      { item: 'Store-bought naan and ghee, for serving' },
      { item: 'Onions, for grilling' },
      { item: 'Cucumbers and fresh tomatoes, chopped' },
      { item: 'Crumbled feta cheese and tzatziki sauce' },
    ],
    steps: [
      {
        title: 'Season and pack with herbs',
        text: 'Remove any casing from the lamb. For a faster cook, cut the leg into four pieces; with more time, leave it whole. Season every side with salt and pepper, then stuff and surround the lamb with the sage, garlic chives, regular chives, and cutting celery.',
      },
      {
        title: 'Sous vide at 132.5°F',
        text: 'Seal the lamb and herbs in bags. Sous vide at 132.5°F for at least 3 hours, continuing until the center of the meat has reached 132.5°F.',
      },
      {
        title: 'Drain and heat the grill',
        text: 'Remove the lamb from the bags. Discard the herbs and cooking liquid. Heat the grill as hot as it will go for at least 15 minutes; Dad’s registers about 800°F. A very hot cast-iron pan also works.',
      },
      {
        title: 'Sear fast—and stand back',
        text: 'Using long tongs, sear the lamb for 30 to 90 seconds per side. The fat can cause flare-ups, so stay back and keep the meat moving. Aim for a golden crust and grill marks without letting it turn black, smoky, or burned.',
      },
      {
        title: 'Rest, then chop',
        text: 'Rest the lamb for at least 10 minutes, then slice or chop it into pieces that fit easily inside the naan.',
      },
      {
        title: 'Warm the naan',
        text: 'While the lamb rests, brush store-bought naan with ghee and bake directly on the oven rack at 400°F for 3 to 4 minutes.',
      },
      {
        title: 'Build the gyros',
        text: 'Grill the onions over fairly indirect heat after the lamb. Fill the warm naan with lamb, grilled onions, chopped cucumber, fresh tomatoes, crumbled feta, and tzatziki. Peel garden cucumbers first if their skins are bitter.',
      },
    ],
    houseNote: {
      title: 'Golden, not singed',
      text: 'This is a very fast final sear. Use long tongs, expect the fatty lamb to flare up, and stay back from the grill while chasing a browned crust—not smoke or black edges.',
    },
    familyNote: {
      title: 'The barbecue-sauce situation',
      text: 'Pascal adds barbecue sauce. Dad considers that a separate issue and is not putting it on his. The lamb makes excellent leftovers; larger pieces can be seared again on the second day so a fresh surface gets a new crust.',
    },
  },
  {
    slug: 'egg-mcdad',
    title: 'Egg McDad',
    description:
      'A fast toasted-bagel breakfast sandwich with a fluffy microwave egg and whatever good toppings are waiting in the fridge.',
    author: 'Dad',
    yield: '1 sandwich',
    yieldRange: [1, 1],
    yieldUnit: 'sandwich',
    yieldPluralUnit: 'sandwiches',
    added: 'September 14, 2026',
    updated: 'September 14, 2026',
    section: 'Breakfast',
    meals: ['Breakfast', 'Lunch'],
    commonIngredients: ['Eggs', 'Bagel', 'Cheese'],
    badges: ['One of Dad’s favorites'],
    heroImage: '/photos/egg-mcdad-finished.webp',
    heroAlt:
      'An Egg McDad sandwich with egg, cheddar, and salami on a toasted everything bagel',
    catImage: '/cats/egg-mcdad-microwave-cat.webp',
    catAlt:
      'An ink-drawn kitchen cat holding a timer and watching an egg puff in a microwave',
    ingredients: [
      { amount: 1, item: 'bagel' },
      {
        range: [1, 2],
        unit: 'egg',
        pluralUnit: 'eggs',
        item: 'or the equivalent amount of egg whites',
      },
      { item: 'Salt and black pepper, if desired' },
      {
        item: 'Toppings such as cheddar or Mexican-blend cheese, salami, steak, or other leftovers',
      },
    ],
    steps: [
      {
        title: 'Defrost and toast the bagel',
        text: 'Microwave a frozen bagel for about 30 seconds, until it is still cold but defrosted. Slice it carefully and toast both halves.',
      },
      {
        title: 'Prepare the egg',
        text: 'While the bagel toasts, put 1 to 2 eggs—or the equivalent amount of egg whites—in a microwave-safe bowl. Add salt and pepper if desired. If using whole eggs, scramble them with a fork.',
      },
      {
        title: 'Microwave until puffed',
        text: 'Microwave for 60 to 70 seconds, depending on the bowl and microwave. The egg will puff as it cooks. Continue only until it is cooked or nearly cooked.',
      },
      {
        title: 'Add the toppings',
        text: 'Top the egg with cheese, salami, steak, or whatever leftovers look good. Microwave for about 10 seconds more to warm the toppings and finish the egg.',
      },
      {
        title: 'Release the sandwich',
        text: 'Carefully remove the hot bowl. Place the top half of the bagel on the egg and press down slightly. Turn it gently until the egg releases from the bowl, then invert the bowl to make an upside-down sandwich.',
      },
      {
        title: 'Flip, finish, and poof',
        text: 'Add the bottom half of the bagel, flip the sandwich right side up, and poof—you have an Egg McDad.',
      },
    ],
    houseNote: {
      title: 'Choose the bowl wisely',
      text: 'A microwave-safe bowl close to the width of the bagel makes a tidy round egg. The bowl and steam will be hot, so handle them carefully.',
    },
    familyNote: {
      title: 'One of Dad’s favorites',
      text: 'The topping changes with the leftovers, but the bagel-on-bowl flip is the essential Egg McDad maneuver.',
    },
  },
  {
    slug: 'dads-baked-tofu-bites',
    title: 'Dad’s Baked Tofu Bites',
    description:
      'Teriyaki-marinated tofu with a lightly crisp crust—cut it thin for chewy and meaty, or thicker for tender and savory.',
    author: 'Dad',
    yield: 'About 4 servings',
    yieldRange: [4, 4],
    yieldUnit: 'serving',
    yieldPluralUnit: 'servings',
    added: 'September 14, 2026',
    updated: 'September 14, 2026',
    section: 'Dinner',
    meals: ['Dinner', 'Lunch'],
    commonIngredients: ['Tofu', 'Teriyaki sauce', 'Cornstarch'],
    badges: ['Dad’s recipe', 'Crispy edges'],
    heroImage: '/photos/dads-baked-tofu-bites-finished.webp',
    heroAlt:
      'Golden brown teriyaki tofu bites baked on a parchment-lined sheet pan',
    catImage: '/cats/dads-baked-tofu-bites-linocut-cat.webp',
    catAlt:
      'A warm brown linocut-style cat watching a tray of baked tofu bites',
    ingredients: [
      { amount: 1, item: 'package (16 ounces) firm tofu' },
      { item: 'Teriyaki sauce, enough to coat the tofu' },
      {
        item: 'Cornstarch, for a light coating (or flour if that is what you have)',
      },
    ],
    steps: [
      {
        title: 'Drain and slice the tofu',
        text: 'Drain the package of firm tofu. Slice it flatways into slabs, then slice crossways to make approximate cubes. Make the slabs thinner for a chewier, meatier bite, or thicker for a more tender and savory one.',
      },
      {
        title: 'Marinate',
        text: 'Add teriyaki sauce and let the tofu marinate for as long as you have time.',
      },
      {
        title: 'Make a little crust',
        text: 'When ready to bake, toss the tofu with just a little starch to dry the surfaces and help form a better crust. Dad prefers cornstarch; flour works when the cornstarch is out.',
      },
      {
        title: 'Bake the first side',
        text: 'Spread the bites on a parchment-lined baking sheet and bake at 325°F for 20 minutes.',
      },
      {
        title: 'Flip, raise the heat, and finish',
        text: 'Flip the bites with a spatula. Raise the oven to 375°F and bake for 20 minutes more, until they reach the brownness and consistency you want.',
      },
    ],
    houseNote: {
      title: 'The slice is the texture control',
      text: 'Thin tofu cooks up chewier and meatier. Thicker pieces stay more tender and savory, so choose the cut before the teriyaki goes on.',
    },
    familyNote: {
      title: 'Dad’s starch preference',
      text: 'Cornstarch is the first choice for the crust. On this tray, flour stepped in and still did the job.',
    },
  },
  {
    slug: 'moms-burned-broccoli',
    title: 'Burned Broccoli',
    description:
      'Bite-sized broccoli roasted until the edges get properly dark and deeply savory—Orinda’s favorite.',
    author: 'Mom',
    yield: 'One sheet-pan batch',
    yieldRange: [1, 1],
    yieldUnit: 'batch',
    yieldPluralUnit: 'batches',
    added: 'September 14, 2026',
    updated: 'September 14, 2026',
    section: 'Side dishes',
    meals: ['Side dishes', 'Dinner'],
    commonIngredients: ['Broccoli', 'Olive oil', 'Worcestershire sauce'],
    badges: ['Orinda’s favorite', 'Mom’s recipe'],
    heroImage: '/photos/moms-burned-broccoli-finished.webp',
    heroAlt:
      'Broccoli florets with deeply browned edges on a foil-lined baking sheet',
    catImage: '/cats/moms-burned-broccoli-seedpacket-cat.webp',
    catAlt:
      'A retro seed-packet-style cat watching a sheet pan of roasted broccoli',
    ingredients: [
      { item: 'Broccoli, chopped into bite-sized pieces or a little larger' },
      { item: 'Olive oil, for a light coating' },
      { item: 'Mom’s special Worcestershire sauce, for a light coating' },
    ],
    steps: [
      {
        title: 'Chop the broccoli',
        text: 'Cut the broccoli into bite-sized pieces or a little larger. Spread it on a sheet pan.',
      },
      {
        title: 'Choose the coating',
        text: 'Lightly coat the broccoli with a little olive oil or Mom’s special Worcestershire sauce. Toss it around until the pieces are evenly coated.',
      },
      {
        title: 'Burn it nicely',
        text: 'Bake at 375°F for about 20 minutes, until the florets are as deeply browned as you like them.',
      },
    ],
    houseNote: {
      title: 'A little larger is fine',
      text: 'This is not fussy broccoli. Bite-sized pieces are perfect, but slightly larger florets are welcome too—just get every piece lightly coated.',
    },
    familyNote: {
      title: 'Orinda’s favorite',
      text: 'The dark, toasty edges are the point. Keep an eye on the pan near the end, but do not pull it just because the broccoli looks a little burned.',
    },
  },
  {
    slug: 'dads-trout-two-ways',
    title: 'Dad’s Trout Two Ways',
    description:
      'One steelhead trout, split down the middle: bright lemon and pepper on one half, basil, onion, and Parmesan on the other.',
    author: 'Dad',
    yield: 'One 3½-pound trout',
    yieldRange: [3.5, 3.5],
    yieldUnit: 'pound of trout',
    yieldPluralUnit: 'pounds of trout',
    added: 'September 14, 2026',
    updated: 'September 14, 2026',
    section: 'Dinner',
    meals: ['Dinner'],
    commonIngredients: [
      'Steelhead trout',
      'Basil',
      'Onion',
      'Parmesan',
      'Lemons',
    ],
    badges: ['Dad’s recipe', 'Two ways'],
    heroImage: '/photos/dads-trout-two-ways-finished.webp',
    heroAlt:
      'Baked steelhead trout with lemon slices on one half and a basil Parmesan topping on the other',
    catImage: '/cats/dads-trout-two-ways-fieldguide-cat.webp',
    catAlt:
      'A natural-history-style cat studying a baking sheet with two styles of trout',
    ingredients: [
      {
        amount: 3.5,
        unit: 'pound',
        pluralUnit: 'pounds',
        item: 'steelhead trout',
      },
      { item: 'Basil, minced' },
      {
        amount: 0.25,
        unit: 'onion',
        pluralUnit: 'onions',
        item: 'minced',
      },
      {
        amount: 1,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'grated Parmesan cheese',
      },
      { item: 'Cracked pepper, to taste' },
      { item: 'Salt and pepper, to taste' },
      { item: 'Lemons, sliced' },
    ],
    steps: [
      {
        title: 'Prepare the trout',
        text: 'Place the 3½-pound steelhead trout on a parchment-lined baking sheet. Mentally divide it into two halves.',
      },
      {
        title: 'Make the basil Parmesan side',
        text: 'Mince the basil and ¼ onion, then mix them with about 1 cup grated Parmesan. Coat one half of the trout with the mixture and add a little cracked pepper.',
      },
      {
        title: 'Make the lemon side',
        text: 'On the other half, add a little salt, pepper, and cracked pepper. Cover it with sliced lemons.',
      },
      {
        title: 'Bake until firm',
        text: 'Bake at 375°F for about 40 minutes, or until the fish is firm.',
      },
    ],
    houseNote: {
      title: 'Two halves, no debate',
      text: 'The division is intentional: the lemon half stays simple and bright, while the basil–onion–Parmesan half gets more savory and rich.',
    },
    familyNote: {
      title: 'Dad’s insurance policy',
      text: 'Dad makes trout two ways so everyone has half the fish in case they hate the other half.',
    },
  },
  {
    slug: 'valens-rice',
    title: 'Valen’s Rice',
    description:
      'A rice-cooker ratio Valen measures by uncanny spout timing, with Mom’s useful advice about when not to rinse.',
    author: 'Valen',
    yield: 'One rice-cooker batch',
    yieldRange: [1, 1],
    yieldUnit: 'batch',
    yieldPluralUnit: 'batches',
    added: 'September 14, 2026',
    updated: 'September 14, 2026',
    section: 'Side dishes',
    meals: ['Side dishes', 'Dinner'],
    commonIngredients: ['Rice', 'Water'],
    badges: ['Valen’s recipe', 'Mom’s tip'],
    heroImage: '/photos/valens-rice-finished.webp',
    heroAlt: 'Glossy white rice in the open bowl of a rice cooker',
    catImage: '/cats/valens-rice-colored-pencil-cat.webp',
    catAlt:
      'A colored-pencil cat watching an open rice cooker full of white rice',
    ingredients: [
      {
        amount: 0.75,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'rice',
      },
      { amount: 1, unit: 'cup', pluralUnit: 'cups', item: 'water' },
    ],
    steps: [
      {
        title: 'Decide whether to rinse',
        text: 'Rinse the rice if you want it less glutinous. Do not rinse it if you want it stickier.',
      },
      {
        title: 'Use Valen’s ratio',
        text: 'For every ¾ cup rice, add 1 cup water to the rice-cooker bowl.',
      },
      {
        title: 'Time the spout',
        text: 'Valen magically times the water coming from the spout so it matches the rice exactly. Start the rice cooker and let it do its work.',
      },
    ],
    houseNote: {
      title: 'Mom’s tip',
      text: 'Rinse for less glutinous rice; do not rinse for stickier rice.',
    },
    familyNote: {
      title: 'The precision method',
      text: 'Valen can apparently time the water from the spout perfectly. This is completely not helpful, but it does make good rice.',
    },
  },
  {
    slug: 'great-grandma-ednas-steak-sandwiches',
    title: 'Great Grandma Edna’s Steak Sandwiches',
    description:
      'Thin, quickly browned steak on a single juice-soaked slice of toast—the small step that makes the sandwich.',
    author: 'Edna',
    yield: 'One skillet batch',
    yieldRange: [1, 1],
    yieldUnit: 'batch',
    yieldPluralUnit: 'batches',
    added: 'September 15, 2026',
    updated: 'September 15, 2026',
    section: 'Lunch',
    meals: ['Lunch', 'Dinner'],
    commonIngredients: ['Steak', 'Garlic salt', 'Bread', 'Butter', 'Cheese'],
    badges: ['Great Grandma Edna’s recipe', 'Dad’s current version'],
    heroImage: '/photos/great-grandma-ednas-steak-sandwiches-finished.webp',
    heroAlt: 'A thin steak sandwich on toasted rosemary Parmesan bread',
    catImage: '/cats/great-grandma-ednas-steak-sandwiches-diner-cat.webp',
    catAlt:
      'A mid-century diner-style cat watching an open-face steak sandwich',
    ingredients: [
      {
        item: 'Thin steak, about ¼ to ⅜ inch thick, or thin bulgogi steak',
      },
      { item: 'Garlic salt, for seasoning' },
      {
        item: 'Or equal parts onion powder, pepper, and salt, for seasoning',
      },
      { item: 'Butter, for a regular skillet if needed' },
      { item: 'Cheese, optional' },
      { item: 'One slice of toast for each sandwich' },
    ],
    steps: [
      {
        title: 'Make the steak thin',
        text: 'Start with a steak about ¼ to ⅜ inch thick. Like Great Grandma Edna, pound it thin with a meat mallet. If using thin bulgogi steak, do not pound it—it is already thin enough and will just disappear.',
      },
      {
        title: 'Season lightly',
        text: 'Use garlic salt, or make a simple seasoning with roughly equal parts onion powder, pepper, and salt. Lightly sprinkle the meat on both sides.',
      },
      {
        title: 'Fry fast',
        text: 'Quickly fry the steak in a nonstick pan, or use a little butter in a regular pan. Cook until browned on both sides.',
      },
      {
        title: 'Add cheese if wanted',
        text: 'If you want cheese, put it on the steak and let it melt. Dad tends to skip it, but some of the kids like it.',
      },
      {
        title: 'Make the sandwich',
        text: 'Put the steak on one slice of toast. Before serving, use that piece of bread to soak up the meat juices in the pan. That extra-flavorful bread is the key to Great Grandma Edna’s steak sandwiches.',
      },
    ],
    houseNote: {
      title: 'The bread is not an afterthought',
      text: 'Here, Dad used rosemary Parmesan toast. Any good slice works, as long as it gets a pass through the pan juices before it meets the steak.',
    },
    familyNote: {
      title: 'Great Grandma Edna’s move',
      text: 'The sandwich uses one slice of toast, not two. Let it soak up the juice—the bread carries the flavor all the way to the plate.',
    },
  },
  {
    slug: 'brentwood-cheesesteak-a-la-valen',
    title: 'Brentwood Cheesesteak Sandwiches à la Valen',
    description:
      'Thin steak, slow-browned onions, and gooey Swiss cheese tucked into a toasted baguette—Valen’s idea.',
    author: 'Valen',
    yield: 'One skillet batch',
    yieldRange: [1, 1],
    yieldUnit: 'batch',
    yieldPluralUnit: 'batches',
    added: 'September 15, 2026',
    updated: 'September 15, 2026',
    section: 'Lunch',
    meals: ['Lunch', 'Dinner'],
    commonIngredients: ['Steak', 'Onion', 'Swiss cheese', 'Baguette'],
    badges: ['Valen’s idea', 'Gooey mess'],
    heroImage: '/photos/brentwood-cheesesteak-a-la-valen-finished.webp',
    heroAlt:
      'A toasted baguette stuffed with thin steak, browned onions, and melted Swiss cheese',
    catImage: '/cats/brentwood-cheesesteak-a-la-valen-cutpaper-cat.webp',
    catAlt: 'A layered cut-paper cat quietly watching a cheesesteak sandwich',
    ingredients: [
      {
        amount: 0.5,
        unit: 'onion',
        pluralUnit: 'onions',
        item: 'sliced',
      },
      { item: 'Salt, for the onions and steak' },
      { item: 'Thinly sliced steak' },
      { item: 'Onion powder and pepper, for seasoning the steak' },
      { item: 'Swiss cheese' },
      { item: 'Baguette, sliced and toasted' },
    ],
    steps: [
      {
        title: 'Brown the onions slowly',
        text: 'Slice ½ onion and cook it over medium-low heat with just a tiny bit of salt to help it brown. When the onions are browned, move them to the side of the pan.',
      },
      {
        title: 'Cook the steak',
        text: 'Season the thinly sliced steak with a little onion powder, pepper, and salt. Cook it until it is essentially done and a little brown.',
      },
      {
        title: 'Bring it together',
        text: 'Add the onions back to the steak and top with Swiss cheese. Move everything around until the cheese melts into a proper gooey mess.',
      },
      {
        title: 'Fill the baguette',
        text: 'Serve the steak, onions, and melted cheese in a toasted, sliced baguette. Enjoy the gooey mess.',
      },
    ],
    houseNote: {
      title: 'Let the onion take its time',
      text: 'The steak cooks quickly. The onions are the patient part: medium-low heat and a tiny bit of salt are all they need.',
    },
    familyNote: {
      title: 'À la Valen',
      text: 'This is Valen’s idea: do not fuss over a perfectly tidy sandwich. The cheese is supposed to get gooey.',
    },
  },
  {
    slug: 'homemade-vanilla',
    title: 'Homemade Vanilla',
    description:
      'Vanilla beans steeped patiently in vodka or Tennessee whiskey for a deeply fragrant homemade extract.',
    author: 'Brentwood Bunch',
    yield: 'One 1.75-liter jar',
    yieldRange: [1.75, 1.75],
    yieldUnit: 'liter',
    yieldPluralUnit: 'liters',
    added: 'September 15, 2026',
    updated: 'September 15, 2026',
    section: 'Pantry',
    meals: ['Pantry'],
    commonIngredients: ['Vanilla beans', 'Vodka', 'Whiskey'],
    badges: ['Six-month extraction', 'Two ways'],
    heroImage: '/photos/homemade-vanilla-vodka.webp',
    heroAlt:
      'A 1.75-liter bottle holding vanilla beans for a homemade extract beside a whiskey bottle',
    catImage: '/cats/homemade-vanilla-letterpress-cat.webp',
    catAlt:
      'A sepia letterpress-style cat inspecting a bottle of steeping vanilla beans',
    ingredients: [
      {
        amount: 25,
        item: 'vanilla beans, Grade B or Grade A',
      },
      {
        amount: 1.75,
        unit: 'liter',
        pluralUnit: 'liters',
        item: 'Tito’s vodka, for a traditional Mexican-style extract',
      },
      {
        item: 'Or 1.75 liters Jack Daniel’s whiskey, for a warmer, rounder Tennessee special',
      },
    ],
    steps: [
      {
        title: 'Choose your beans',
        text: 'Buy vanilla beans in bulk. Grade B is less expensive and works beautifully for a long extraction; Grade A also makes a clean-tasting vanilla.',
      },
      {
        title: 'Choose your spirit',
        text: 'Put about 25 vanilla beans into a 1.75-liter jar or bottle. Cover them with Tito’s vodka for a traditional Mexican-style extract, or use Jack Daniel’s whiskey for a Tennessee special with a warmer, rounder flavor.',
      },
      {
        title: 'Let it steep',
        text: 'Store the bottle in a dark cabinet for at least six months before using the extract.',
      },
      {
        title: 'Shake gently now and then',
        text: 'Occasionally give the bottle a gentle shake to agitate the beans while the vanilla develops.',
      },
    ],
    houseNote: {
      title: 'Grade B is the practical choice',
      text: 'Grade B beans are less expensive and especially good when the extract will have plenty of time to steep. Grade A beans also work well when a clean-tasting vanilla is the goal.',
    },
    familyNote: {
      title: 'The Tennessee special',
      text: 'Jack Daniel’s makes a vanilla that is warmer and rounder than the vodka version. Both start with the same easy ratio: about 25 beans to a 1.75-liter bottle.',
    },
  },
  {
    slug: 'valens-cookie-cake',
    title: 'Valen’s Cookie Cake',
    description:
      'A thick chocolate-chip cookie cake with Valen’s optional oat twist, baked low and slow for a proper birthday-cookie-cake center.',
    author: 'Valen',
    yield: 'One cookie cake',
    yieldRange: [1, 1],
    yieldUnit: 'cake',
    yieldPluralUnit: 'cakes',
    added: 'September 15, 2026',
    updated: 'September 15, 2026',
    section: 'Desserts',
    meals: ['Desserts'],
    commonIngredients: ['Butter', 'Brown sugar', 'Chocolate chips', 'Oats'],
    badges: ['Valen’s recipe', 'Grandpa Gary’s favorite'],
    heroImage: '/photos/valens-cookie-cake-finished.webp',
    heroAlt:
      'A large finished chocolate-chip cookie cake on a parchment-lined sheet pan',
    catImage: '/cats/valens-cookie-cake-screenprint-cat.webp',
    catAlt:
      'A vintage screen-print cat watching a chocolate-chip cookie cake with a birthday candle',
    ingredients: [
      {
        amount: 1,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'unsalted butter, softened',
      },
      {
        amount: 0.75,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'granulated white sugar',
      },
      {
        amount: 0.75,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'brown sugar, measured generously',
      },
      { amount: 2, item: 'eggs' },
      { item: 'A splash of homemade vanilla' },
      {
        amount: 0.5,
        unit: 'teaspoon',
        pluralUnit: 'teaspoons',
        item: 'salt',
      },
      {
        amount: 1,
        unit: 'teaspoon',
        pluralUnit: 'teaspoons',
        item: 'baking soda',
        approximate: true,
      },
      {
        amount: 2.25,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'all-purpose flour',
      },
      {
        amount: 2,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'chocolate chips',
      },
      {
        amount: 1,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'rolled oats, optional',
      },
    ],
    steps: [
      {
        title: 'Heat the oven',
        text: 'Preheat the oven to 325°F convection. Line a baking sheet with parchment paper.',
      },
      {
        title: 'Cream butter and sugar',
        text: 'Beat the softened butter with the granulated sugar and generously measured brown sugar until smooth.',
      },
      {
        title: 'Add the wet ingredients',
        text: 'Beat in the eggs, then add a splash of homemade vanilla. If you are quick, Valen says you can make the entire recipe without stopping the mixer.',
      },
      {
        title: 'Add the dry ingredients gently',
        text: 'Mix in the salt and about a teaspoon of baking soda. Slowly beat in the flour, stopping as soon as it is incorporated so the dough does not get stiff.',
      },
      {
        title: 'Fold in the good parts',
        text: 'Slowly fold in the chocolate chips so there are lovely pockets of chocolate and pockets of dough. If you want Valen’s variation, fold in the rolled oats instead of chopped nuts.',
      },
      {
        title: 'Shape and bake',
        text: 'Spread or pat the dough into one thick cookie cake on the prepared sheet. Bake for 20–30 minutes, rotating the pan halfway through, until it is baked through and lightly golden.',
      },
    ],
    houseNote: {
      title: 'Do not overmix the flour',
      text: 'The dough is supposed to stay tender. Add the flour slowly and stop mixing as soon as it disappears into the dough.',
    },
    familyNote: {
      title: 'Birthday-cookie-cake history',
      text: 'This cookie cake was modeled after Grandpa Gary’s favorite birthday cookie cakes. Valen’s only real departure from the recipe is the optional cup of oats at the end.',
    },
  },
  {
    slug: 'tennessee-thai-basil-curry',
    title: 'Tennessee Thai-Basil Curry',
    description:
      'A generously sized, one-pot curry of rotisserie chicken, andouille chicken sausage, peppers, rice, and fresh Thai basil—made even better with leftover roasted okra.',
    author: 'Brentwood Bunch',
    yield: '20 large servings',
    yieldRange: [20, 20],
    yieldUnit: 'large serving',
    yieldPluralUnit: 'large servings',
    added: 'September 17, 2026',
    updated: 'September 17, 2026',
    section: 'Dinner',
    meals: ['Dinner'],
    commonIngredients: [
      'Chicken',
      'Andouille chicken sausage',
      'Golden Curry mix',
      'Thai basil',
    ],
    badges: ['One-pot supper', 'Thai basil', 'Leftover brilliance'],
    heroImage: '/photos/tennessee-thai-basil-curry-finished.webp',
    heroAlt:
      'A large pot of Tennessee Thai-basil curry with chicken, andouille sausage, rice, peppers, okra, and basil',
    catImage: '/cats/tennessee-thai-basil-curry-tile-cat.webp',
    catAlt:
      'A small cat beside a simmering curry pot in a hand-painted ceramic-tile kitchen',
    ingredients: [
      {
        amount: 4,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'coconut oil',
      },
      {
        amount: 20,
        unit: 'ounce',
        pluralUnit: 'ounces',
        item: 'andouille chicken sausage, sliced',
      },
      { amount: 2, item: 'rotisserie chicken breasts, white meat, diced' },
      { amount: 1, item: 'onion, chopped' },
      {
        amount: 2,
        item: 'handfuls of mini multicolored bell peppers, chopped',
      },
      {
        amount: 6,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'tomato paste (one small can)',
      },
      { amount: 2, item: 'cubes Golden Curry mix' },
      {
        amount: 2.25,
        unit: 'rice-cooker cup',
        pluralUnit: 'rice-cooker cups',
        item: 'long-grain white rice (three 0.75-cup measures)',
      },
      {
        amount: 8,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'fresh chicken bone stock, plus more as needed',
      },
      {
        amount: 1.5,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'fresh Thai basil, chopped and divided',
      },
      {
        range: [1, 2],
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'leftover softened roasted okra, with any tough pieces removed',
      },
      { item: 'For the bone stock: chicken carcass, wings, and skin' },
      { item: 'Peppercorns and any fresh herbs you want to use' },
    ],
    steps: [
      {
        title: 'Make the bone stock, if needed',
        text: 'Add the chicken carcass, wings, and skin to a pot of water with peppercorns. Boil for at least 20 minutes, until the water turns a rich color, then strain. If you have longer, add as many fresh herbs as you like from the garden or fridge.',
      },
      {
        title: 'Start the onion',
        text: 'Heat the coconut oil in a large pot over medium-high heat. Sauté the chopped onion until it begins to brown.',
      },
      {
        title: 'Brown the chicken, sausage, and peppers',
        text: 'Add the diced rotisserie chicken, sliced andouille chicken sausage, and chopped bell peppers. Cook until everything starts to pick up a little color.',
      },
      {
        title: 'Build the curry',
        text: 'Stir in the tomato paste and the two cubes of Golden Curry mix until the cubes begin to dissolve and the pot smells deeply savory.',
      },
      {
        title: 'Add rice and stock',
        text: 'Add the rice, 8 cups of chicken bone stock, and about half of the chopped Thai basil. Bring the pot to a simmer and cook until the rice is tender.',
      },
      {
        title: 'Keep it curry-like',
        text: 'As the rice cooks, add more stock as needed to keep the mixture loose and spoonable rather than thick and dry.',
      },
      {
        title: 'Finish with the leftovers',
        text: 'When the rice is nearly tender, fold in the softened roasted okra and the remaining Thai basil. Stir until hot and well combined, then serve.',
      },
    ],
    houseNote: {
      title: 'A rice-cooker cup is its own thing',
      text: 'This uses three 0.75-cup rice measures—2.25 rice-cooker cups total—rather than three standard measuring cups.',
    },
    familyNote: {
      title: 'Tennessee meets Thai basil',
      text: 'Rotisserie chicken, andouille chicken sausage, garden Thai basil, and leftover roasted okra all get to belong in the same generous pot.',
    },
  },
  {
    slug: 'shiitake-veggie-dumplings',
    title: 'Shiitake-Veggie Dumplings',
    description:
      'Tofu, mushrooms, vegetables, ginger, and sesame become a savory dumpling filling that is equally happy steamed, potsticker-crisped, or air-fried.',
    author: 'Bennett',
    yield: '40 dumplings',
    yieldRange: [40, 40],
    yieldUnit: 'dumpling',
    yieldPluralUnit: 'dumplings',
    added: 'September 24, 2026',
    updated: 'September 24, 2026',
    section: 'Appetizers',
    meals: ['Appetizers', 'Lunch'],
    commonIngredients: [
      'Tofu',
      'Shiitake mushrooms',
      'Napa cabbage',
      'Dumpling wrappers',
    ],
    badges: ['Three cooking methods', 'Vegetarian', 'Leftover-ready'],
    heroImage: '/photos/shiitake-veggie-dumplings-finished.webp',
    heroAlt:
      'A plate of shiitake-veggie dumplings prepared in several different ways',
    catImage: '/cats/shiitake-veggie-dumplings-watercolor-cat.webp',
    catAlt: 'A watercolor cat watching a bamboo steamer of vegetable dumplings',
    ingredients: [
      {
        amount: 8,
        unit: 'ounce',
        pluralUnit: 'ounces',
        item: 'tofu, mashed',
      },
      { amount: 2, item: 'medium carrots, very finely grated' },
      { amount: 4, item: 'green onions, thinly minced' },
      {
        amount: 2,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'Napa cabbage, thinly minced',
      },
      {
        amount: 4,
        unit: 'ounce',
        pluralUnit: 'ounces',
        item: 'shiitake mushrooms, thinly minced',
      },
      {
        amount: 4,
        unit: 'ounce',
        pluralUnit: 'ounces',
        item: 'oyster mushrooms, thinly minced',
      },
      {
        amount: 1,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'toasted sesame oil',
        approximate: true,
      },
      {
        amount: 4,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'soy sauce',
      },
      { item: 'A large pinch of white pepper' },
      { item: 'One large thumb of fresh ginger, grated into a fine paste' },
      {
        amount: 12,
        unit: 'ounce',
        pluralUnit: 'ounces',
        item: 'dumpling wrappers (one package)',
      },
      {
        amount: 1,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'hoisin sauce, for serving',
      },
    ],
    steps: [
      {
        title: 'Prepare the vegetables',
        text: 'Mash the tofu. Very finely grate the carrots, and mince the green onions, Napa cabbage, shiitakes, and oyster mushrooms. Grate the ginger to a fine paste with a ceramic grater or a food processor.',
      },
      {
        title: 'Make the filling',
        text: 'Combine the tofu, vegetables, mushrooms, toasted sesame oil, soy sauce, white pepper, and ginger. Mix by hand until the tofu is fully broken up and the mixture becomes an even, consistent paste.',
      },
      {
        title: 'Fill and shape',
        text: 'Fill the dumpling wrappers and seal them into about 40 dumplings. A dumpling press makes quick work of it, but folding by hand is just as good.',
      },
      {
        title: 'Potsticker method',
        text: 'Add just enough water to coat the bottom of a skillet, then add the dumplings. When about half the water has evaporated, gently flip them once if your wrappers can take it. Let the remaining water evaporate so the bottoms crisp a little before serving.',
      },
      {
        title: 'Steamer method',
        text: 'Steam the dumplings over boiling water for 7–8 minutes, until heated through and the wrappers are tender and transparent.',
      },
      {
        title: 'Air-fryer method',
        text: 'For crispier dumplings, air-fry at 390°F for 4–5 minutes. They will be crisp on the outside with a more solid, compact filling.',
      },
      {
        title: 'Use every bit of filling',
        text: 'Cook any leftover filling in a frying pan until crisped, then spoon it over rice for lunch or another easy meal. Serve the dumplings with a little hoisin sauce.',
      },
    ],
    houseNote: {
      title: 'Thin wrappers need a gentle hand',
      text: 'These wrappers were delicate, so flip potstickers only when they are sturdy enough to cooperate. The steamer and air fryer are forgiving backup plans.',
    },
    familyNote: {
      title: 'Orinda’s dumpling field notes',
      text: 'The potstickers are gooey in the middle and crispy outside. The steamed dumplings are mostly tender and warm all the way through, while the air-fried version is crispy, compact, and perfect for a quick bite.',
    },
  },
  {
    slug: 'moms-breakfast-burrito',
    title: 'Mom’s Breakfast Burrito',
    description:
      'Soft scrambled eggs, tiny pieces of sausage, and shredded cheese rolled into a warm tortilla make a quick, satisfying breakfast.',
    author: 'Mom',
    yield: '1 burrito',
    yieldRange: [1, 1],
    yieldUnit: 'burrito',
    yieldPluralUnit: 'burritos',
    added: 'September 24, 2026',
    updated: 'September 24, 2026',
    section: 'Breakfast',
    meals: ['Breakfast'],
    commonIngredients: ['Eggs', 'Breakfast sausage', 'Tortilla', 'Cheese'],
    badges: ['Weekday quick', 'Microwave assist', 'Mom’s recipe'],
    heroImage: '/photos/moms-breakfast-burrito-finished.webp',
    heroAlt: 'A finished breakfast burrito on a plate',
    catImage: '/cats/moms-breakfast-burrito-crayon-cat.webp',
    catAlt:
      'A colored-pencil cat watching a breakfast burrito with scrambled eggs and sausage',
    ingredients: [
      { amount: 2, item: 'eggs' },
      { item: 'Salt and pepper' },
      { amount: 2, item: 'frozen breakfast sausages' },
      { item: 'One dry paper towel and one damp paper towel' },
      { amount: 1, item: 'large burrito-size tortilla' },
      { item: 'Shredded cheese' },
    ],
    steps: [
      {
        title: 'Scramble the eggs',
        text: 'Heat a nonstick pan, then crack in the eggs. Season with salt and pepper and scramble until cooked to your liking.',
      },
      {
        title: 'Warm the sausages',
        text: 'Set the frozen sausages on a dry paper towel and cover with a damp paper towel. Microwave according to the package instructions, about 60 seconds, until hot throughout.',
      },
      {
        title: 'Make tiny sausage pieces',
        text: 'Slice each sausage lengthwise and then crosswise into lots of little bite-size bits. Stir them into the scrambled eggs if you have time, so everything becomes one happy mash.',
      },
      {
        title: 'Fill the tortilla',
        text: 'Lay the tortilla on a plate. Add the egg-and-sausage mixture down the center and scatter shredded cheese over the top.',
      },
      {
        title: 'Fold and roll',
        text: 'Starting at the bottom third, fold up the tortilla, fold the two ends inward, then roll it up into a burrito. Bon appétit.',
      },
    ],
    houseNote: {
      title: 'A dry towel and a damp towel',
      text: 'The dry towel catches microwave sausage grease, while the damp towel helps keep the sausages from drying out.',
    },
    familyNote: {
      title: 'Tiny pieces, maximum burrito coverage',
      text: 'Slicing the sausages lengthwise and then crosswise makes sure every bite gets a little sausage, egg, and cheese.',
    },
  },
  {
    slug: 'simply-amazing-shrimp-scampi',
    title: 'Simply Amazing Shrimp Scampi',
    description:
      'Buttery shrimp, a favorite pasta shape, and plenty of finely grated Parmesan make a fast, thoroughly kid-approved dinner.',
    author: 'Brentwood Bunch',
    yield: '4 servings',
    yieldRange: [4, 4],
    yieldUnit: 'serving',
    yieldPluralUnit: 'servings',
    added: 'September 25, 2026',
    updated: 'September 25, 2026',
    section: 'Dinner',
    meals: ['Dinner'],
    commonIngredients: ['Shrimp', 'Unsalted butter', 'Pasta', 'Parmesan'],
    badges: ['Fast dinner', 'Kid-approved', 'Weeknight favorite'],
    heroImage: '/photos/simply-amazing-shrimp-scampi-finished.webp',
    heroAlt:
      'Shrimp and pasta tossed with finely grated Parmesan in a serving bowl',
    catImage: '/cats/simply-amazing-shrimp-scampi-gouache-cat.webp',
    catAlt: 'An ink-and-gouache cat peeking at a bowl of shrimp pasta',
    ingredients: [
      {
        amount: 1,
        unit: 'pound',
        pluralUnit: 'pounds',
        item: 'shrimp, nearly defrosted',
      },
      {
        amount: 2,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'unsalted butter',
        approximate: true,
      },
      { item: 'Salt and pepper, to taste' },
      { item: 'A pasta shape of your preference' },
      {
        amount: 2,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'freshly grated Parmesan cheese, divided',
      },
    ],
    steps: [
      {
        title: 'Start the pasta',
        text: 'Bring a pot of water to a boil and cook your chosen pasta according to the package directions. Aim for the shrimp and pasta to finish at about the same time.',
      },
      {
        title: 'Sauté the shrimp',
        text: 'Melt the unsalted butter in a skillet over medium heat. Add the nearly defrosted shrimp, season with salt and pepper, and sauté until opaque and cooked through. The shrimp may release plenty of water—that is okay.',
      },
      {
        title: 'Taste and drain',
        text: 'Taste the pasta before draining; use a spoon, blow carefully, and do not burn yourself. When the shrimp is essentially done, drain away the excess liquid, then heat it briefly and carefully to dry the shrimp a little.',
      },
      {
        title: 'Toss, layer, and serve',
        text: 'Put the drained pasta in a serving bowl and toss with half the Parmesan. Layer the shrimp on top, then sprinkle over the remaining Parmesan. Serve immediately and watch it disappear.',
      },
    ],
    houseNote: {
      title: 'Nearly defrosted is part of the plan',
      text: 'Do not worry when the shrimp releases water. Just drain it once the shrimp is cooked, then give the pan a short final heat to dry things out.',
    },
    familyNote: {
      title: 'Dinner with a vanishing act',
      text: 'A big serving bowl, lots of grated Parmesan, and somehow the kids have already eaten all of it.',
    },
  },
  {
    slug: 'teriyaki-mushroom-pork-dumplings',
    title: 'Teriyaki Mushroom Pork Dumplings',
    description:
      'Pork, two kinds of mushrooms, and scallions are folded into wonton wrappers with a glossy sesame-honey teriyaki sauce, then steamed until tender.',
    author: 'Brentwood Bunch',
    yield: 'One package of dumplings',
    yieldRange: [1, 1],
    yieldUnit: 'package',
    yieldPluralUnit: 'packages',
    added: 'September 25, 2026',
    updated: 'September 25, 2026',
    section: 'Appetizers',
    meals: ['Appetizers', 'Lunch'],
    commonIngredients: [
      'Ground pork',
      'Shiitake mushrooms',
      'Wonton wrappers',
      'Soy sauce',
    ],
    badges: ['Steamed', 'Sesame-honey teriyaki', 'Mushroom-packed'],
    heroImage: '/photos/teriyaki-mushroom-pork-dumplings-steamed.webp',
    heroAlt: 'Teriyaki mushroom pork dumplings steaming in a bamboo basket',
    catImage: '/cats/teriyaki-mushroom-pork-dumplings-woodblock-cat.webp',
    catAlt: 'A woodblock-style cat looking at a bamboo steamer of dumplings',
    ingredients: [
      {
        amount: 2,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'sesame oil',
      },
      {
        amount: 0.25,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'honey',
      },
      {
        amount: 0.5,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'soy sauce',
      },
      {
        range: [2, 3],
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'sesame seeds',
      },
      {
        amount: 1,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'ground ginger, or more to taste',
      },
      {
        range: [1, 2],
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'rice wine vinegar or light white vinegar',
      },
      {
        amount: 1,
        unit: 'pound',
        pluralUnit: 'pounds',
        item: 'ground pork',
      },
      {
        amount: 8,
        unit: 'ounce',
        pluralUnit: 'ounces',
        item: 'shiitake mushroom caps, thinly diced (no stems)',
      },
      {
        amount: 8,
        unit: 'ounce',
        pluralUnit: 'ounces',
        item: 'cremini mushrooms, thinly diced, with dry stem portions discarded',
      },
      {
        amount: 1.5,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'green onions, minced',
      },
      { item: 'One package wonton wrappers' },
      { item: 'Water, for sealing the wrappers' },
    ],
    steps: [
      {
        title: 'Make the teriyaki sauce',
        text: 'Combine the sesame oil, honey, soy sauce, sesame seeds, ground ginger, and vinegar in a small pan. Heat over low to medium-low heat, whisking gently with a heat-proof whisk, just until the mixture begins to boil and the flavors fuse. Let cool.',
      },
      {
        title: 'Mix the filling',
        text: 'In a bowl, combine the ground pork, diced shiitake caps, diced creminis, and minced green onions. Pour in the cooled teriyaki sauce and mix carefully until fully blended.',
      },
      {
        title: 'Fill and fold',
        text: 'Open the wonton wrappers. Moisten the edges of one wrapper with a thin line of water, then add about a teaspoon or a little more of filling. Fold it into a triangle, then bring the two long corners along the hypotenuse together to make a little basket shape. Repeat.',
      },
      {
        title: 'Steam until done',
        text: 'Steam the dumplings for 8–10 minutes, until the wrappers are tender and the pork filling is fully cooked. Enjoy.',
      },
    ],
    houseNote: {
      title: 'Cremini is a small portobello',
      text: 'Use the caps and tender parts of the cremini stems; discard any dry, woody stem portions before mincing.',
    },
    familyNote: {
      title: 'The little basket fold',
      text: 'The triangle starts simply. Bringing those two long corners together turns it into a cheerful little dumpling basket.',
    },
  },
  {
    slug: 'sweet-shrimp-and-pork-dumplings',
    title: 'Sweet Shrimp and Pork Dumplings',
    description:
      'Ground pork, shrimp, Napa cabbage, and fresh ginger are folded into wonton wrappers and steamed, then served with hoisin for a sweet finish.',
    author: 'Brentwood Bunch',
    yield: 'One package of dumplings',
    yieldRange: [1, 1],
    yieldUnit: 'package',
    yieldPluralUnit: 'packages',
    added: 'September 25, 2026',
    updated: 'September 25, 2026',
    section: 'Appetizers',
    meals: ['Appetizers', 'Lunch'],
    commonIngredients: [
      'Ground pork',
      'Shrimp',
      'Napa cabbage',
      'Hoisin sauce',
    ],
    badges: ['Steamed', 'Sweet hoisin finish', 'Shrimp and pork'],
    heroImage: '/photos/sweet-shrimp-pork-dumplings-finished.webp',
    heroAlt: 'A plate of steamed shrimp and pork dumplings',
    catImage: '/cats/sweet-shrimp-pork-dumplings-paper-collage-cat.webp',
    catAlt:
      'A paper-collage cat sitting beside shrimp and pork dumplings with hoisin sauce',
    ingredients: [
      {
        amount: 1,
        unit: 'pound',
        pluralUnit: 'pounds',
        item: 'ground pork',
      },
      {
        amount: 1.5,
        unit: 'pound',
        pluralUnit: 'pounds',
        item: 'shrimp, minced or coarsely diced',
        approximate: true,
      },
      {
        range: [1, 2],
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'Napa cabbage, thinly chopped',
        approximate: true,
      },
      {
        amount: 0.25,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'low-sodium soy sauce',
        approximate: true,
      },
      { item: 'Two thumbs of fresh ginger, finely minced or finely grated' },
      { item: 'One package wonton wrappers' },
      { item: 'Water, for moistening wrapper edges' },
      { item: 'Hoisin sauce, for serving' },
    ],
    steps: [
      {
        title: 'Make the filling',
        text: 'Combine the ground pork, minced or coarsely diced shrimp, thinly chopped Napa cabbage, low-sodium soy sauce, and finely minced ginger. A ceramic rubbing grater makes an extra-fine ginger grate. Mix until fully homogeneous.',
      },
      {
        title: 'Fill and fold',
        text: 'Place about 1 teaspoon of filling in each wonton wrapper. Moisten the edges with water, fold the wrapper into a triangle, then bring the two corners adjacent to the hypotenuse together to make a little basket shape. Repeat.',
      },
      {
        title: 'Steam',
        text: 'Steam the dumplings for 8–10 minutes, until the wrappers are tender and the pork-and-shrimp filling is fully cooked.',
      },
      {
        title: 'Serve sweet',
        text: 'Serve with hoisin sauce for an extra-sweet complement to the other dumplings. Enjoy.',
      },
    ],
    houseNote: {
      title: 'The ceramic grater earns its place',
      text: 'A rubbing grater turns fresh ginger into a fine paste that disappears evenly through the shrimp-and-pork filling.',
    },
    familyNote: {
      title: 'The sweeter dumpling plate',
      text: 'Hoisin sauce makes this the sweet counterpoint when several kinds of dumplings share the table.',
    },
  },
  {
    slug: 'dads-famous-pizza-dogs',
    title: 'Dad’s Famous Pizza Dogs',
    description:
      'Fully cooked dogs wrapped in a soft homemade pizza-style dough and baked until lightly golden.',
    author: 'Dad',
    yield: 'One package of pizza dogs (about 6–8)',
    yieldRange: [6, 8],
    yieldUnit: 'pizza dog',
    yieldPluralUnit: 'pizza dogs',
    added: 'October 3, 2026',
    updated: 'October 3, 2026',
    section: 'Lunch',
    meals: ['Lunch', 'Dinner'],
    commonIngredients: ['Hot dogs', 'Yeast', 'Flour', 'Honey'],
    badges: ['Dad’s recipe', 'Homemade dough', 'Kid-approved'],
    heroImage: '/photos/dads-famous-pizza-dogs-finished.webp',
    heroAlt: 'Golden baked pizza dogs on a parchment-lined baking sheet',
    catImage: '/cats/dads-famous-pizza-dogs-gouache-cat.webp',
    catAlt:
      'An orange-and-white cat beside a homemade pizza dog on a wooden board',
    ingredients: [
      {
        amount: 1,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'active dry yeast',
      },
      {
        amount: 1,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'warm water, about 100–110°F',
      },
      {
        amount: 2,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'honey, or white or brown sugar',
      },
      {
        amount: 1,
        unit: 'teaspoon',
        pluralUnit: 'teaspoons',
        item: 'salt',
      },
      {
        amount: 2.5,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'all-purpose flour (bread flour works even better)',
      },
      {
        range: [6, 8],
        unit: 'fully cooked hot dog',
        pluralUnit: 'fully cooked hot dogs',
        item: 'or other ready-to-eat sausage',
      },
      { item: 'Parchment paper, for the baking sheet' },
    ],
    steps: [
      {
        title: 'Wake up the yeast',
        text: 'Stir the yeast into warm-to-the-touch water, about 100–110°F, with the honey or sugar. Let it sit for 10–15 minutes, depending on the room temperature, until the mixture looks frothy. The water should be pleasantly warm, never scalding.',
      },
      {
        title: 'Mix and knead the dough',
        text: 'Add the salt and flour. With a dough hook, mix until the dough forms a ball, then continue on medium speed for about 5 minutes. Keep an eye on the mixer: an unbalanced mixer can walk right off the counter.',
      },
      {
        title: 'Let it rise',
        text: 'Cover the dough and let it rest for about 30 minutes. Use a damp cloth on a very dry, hot day; a dry cloth is fine when the kitchen is humid.',
      },
      {
        title: 'Dry the dogs completely',
        text: 'Meanwhile, pat the fully cooked hot dogs or sausages absolutely dry with paper towels. This works with ready-to-eat chicken dogs or sausages, too. If using something that needs cooking, cook it first, cool it completely, and dry it thoroughly. Sticky or humid dogs will not wrap well.',
      },
      {
        title: 'Wrap and proof again',
        text: 'Take small pieces of dough and stretch each one a little longer and wider than its hot dog. Wrap the dough around the dog and set it seam-side down on a parchment-lined baking sheet. Dad prefers a thicker blanket of dough, while the kids like theirs thin. Let the wrapped dogs rise for another 10–15 minutes.',
      },
      {
        title: 'Bake until lightly golden',
        text: 'Bake at 350°F for 10–15 minutes, until lightly golden brown. In a hotter oven, rotate the pan about halfway through; you can also bake at a slightly lower temperature for a little longer.',
      },
    ],
    houseNote: {
      title: 'One dough, two thicknesses',
      text: 'This dough can make two packages of thin pizza dogs or one package of thicker ones. Stretch accordingly.',
    },
    familyNote: {
      title: 'The drying rule',
      text: 'The most important non-dough step is drying the dogs. A completely dry surface gives the dough something to hold on to.',
    },
  },
  {
    slug: 'impossibly-good-cheeseburger-buns',
    title: 'Impossibly Good Cheeseburger Buns',
    description:
      'Mushroom-loaded plant-based cheeseburger filling tucked into soft homemade dough and baked until lightly golden.',
    author: 'Bennett',
    yield: '5 cheeseburger buns',
    yieldRange: [5, 5],
    yieldUnit: 'cheeseburger bun',
    yieldPluralUnit: 'cheeseburger buns',
    added: 'October 3, 2026',
    updated: 'October 3, 2026',
    section: 'Lunch',
    meals: ['Lunch', 'Dinner'],
    commonIngredients: [
      'Plant-based ground beef',
      'Mushrooms',
      'Cheese',
      'Flour',
    ],
    badges: ['Bennett’s recipe', 'Mushroom-loaded', 'Plant-based'],
    heroImage: '/photos/impossibly-good-cheeseburger-buns-finished.webp',
    heroAlt:
      'Five lightly golden cheeseburger buns on a parchment-lined baking sheet',
    catImage: '/cats/impossibly-good-cheeseburger-buns-linocut-cat.webp',
    catAlt:
      'A tuxedo cat near a mushroom-and-cheese cheeseburger bun in a linocut-style kitchen scene',
    ingredients: [
      {
        amount: 8,
        unit: 'ounce',
        pluralUnit: 'ounces',
        item: 'mushrooms, roughly chopped',
      },
      { item: 'Salt, for the mushrooms' },
      { item: 'Soy sauce, for the mushrooms' },
      {
        amount: 1,
        unit: 'pound',
        pluralUnit: 'pounds',
        item: 'Impossible beef or other plant-based ground beef',
      },
      {
        amount: 0.25,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'dried chopped onions',
      },
      {
        amount: 1,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'Turkish oregano',
      },
      {
        amount: 1,
        unit: 'teaspoon',
        pluralUnit: 'teaspoons',
        item: 'smoked paprika',
      },
      {
        amount: 0.5,
        unit: 'teaspoon',
        pluralUnit: 'teaspoons',
        item: 'white pepper',
      },
      { item: 'A couple dashes California seasoned pepper' },
      {
        amount: 1.5,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'shredded cheese',
      },
      {
        amount: 1,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'active dry yeast',
      },
      {
        amount: 1,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'warm water',
      },
      {
        amount: 2,
        unit: 'tablespoon',
        pluralUnit: 'tablespoons',
        item: 'honey, or another sugar',
      },
      {
        amount: 2.5,
        unit: 'cup',
        pluralUnit: 'cups',
        item: 'all-purpose flour (bread flour works even better)',
      },
      {
        amount: 1,
        unit: 'teaspoon',
        pluralUnit: 'teaspoons',
        item: 'salt',
      },
      { item: 'Parchment paper, for the baking sheet' },
    ],
    steps: [
      {
        title: 'Cook the mushrooms dry',
        text: 'Sauté the roughly chopped mushrooms with a little salt and soy sauce until they are basically dry. The goal is to cook away as much water as possible. Set them aside.',
      },
      {
        title: 'Build the cheeseburger filling',
        text: 'Add the plant-based beef to the pan with the dried onions, Turkish oregano, smoked paprika, white pepper, and California seasoned pepper. Brown until nearly cooked, return the mushrooms, and stir until evenly combined. Cook through, scatter the cheese over the top, and let the filling cool.',
      },
      {
        title: 'Wake up the yeast',
        text: 'Stir the yeast into the warm water with the honey or other sugar. Let it stand for about 10 minutes, until frothy.',
      },
      {
        title: 'Mix and knead the dough',
        text: 'Add the flour and salt. With a dough hook, mix until a ball forms, then knead for about 5 more minutes to develop the right texture.',
      },
      {
        title: 'Let it rise',
        text: 'Cover the dough with a cloth and let it rise for about 30 minutes, until roughly doubled in volume.',
      },
      {
        title: 'Fill the buns',
        text: 'Press pieces of dough into palm-size circles, or a little larger. Place a generous mound of cooled cheeseburger filling in the middle, pull the dough up around it, and pinch it sealed. Set seam-side down on a parchment-lined baking sheet.',
      },
      {
        title: 'Rise once more and bake',
        text: 'Let the filled buns rise for 10 minutes. Bake at 350°F for about 15 minutes, until lightly golden brown. This batch makes 5 thinner, filling-forward buns with about half the dough; use thicker dough for a more bread-forward bun.',
      },
    ],
    houseNote: {
      title: 'The dry-mushroom rule',
      text: 'Cooking the mushrooms until nearly dry keeps the filling rich and savory instead of wet inside the dough.',
    },
    familyNote: {
      title: 'Thin bun, big filling',
      text: 'The kids prefer a lighter blanket of dough. If you want a thicker bun, simply give each pocket more dough before sealing.',
    },
  },
];

export const dadsFrenchToast = recipes[0];
export const classicCrepes = recipes[1];
export const orindasHoneyGoatCheese = recipes[2];
export const momsRoastedOkra = recipes[3];
export const momsToasties = recipes[4];
export const dadsLambGyros = recipes[5];
export const eggMcDad = recipes[6];
export const dadsBakedTofuBites = recipes[7];
export const momsBurnedBroccoli = recipes[8];
export const dadsTroutTwoWays = recipes[9];
export const valensRice = recipes[10];
export const greatGrandmaEdnasSteakSandwiches = recipes[11];
export const brentwoodCheesesteakALaValen = recipes[12];
export const homemadeVanilla = recipes[13];
export const valensCookieCake = recipes[14];
export const tennesseeThaiBasilCurry = recipes[15];
export const shiitakeVeggieDumplings = recipes[16];
export const momsBreakfastBurrito = recipes[17];
export const simplyAmazingShrimpScampi = recipes[18];
export const teriyakiMushroomPorkDumplings = recipes[19];
export const sweetShrimpAndPorkDumplings = recipes[20];
export const dadsFamousPizzaDogs = recipes[21];
export const impossiblyGoodCheeseburgerBuns = recipes[22];
