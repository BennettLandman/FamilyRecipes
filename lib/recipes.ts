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
