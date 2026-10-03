import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { impossiblyGoodCheeseburgerBuns as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'Five little dough-wrapped cheeseburgers, with mushrooms doing the heavy lifting.',
  catCaption: 'quietly assessing the mushroom-to-cheese ratio',
  ingredientNote:
    'Cook the mushrooms until very dry before they join the plant-based beef—this keeps the filling rich rather than wet.',
  methodEyebrow: 'Mushrooms, cheese, and a soft dough pocket',
  gallery: {
    eyebrow: 'The filling-and-dough handoff',
    title: 'From skillet to golden pocket',
    intro:
      'The mushrooms are deliberately cooked dry, then folded into the seasoned cheeseburger filling. Let that filling cool before the dough gets involved.',
    threeColumn: true,
    items: [
      {
        src: '/photos/impossibly-good-cheeseburger-buns-mushroom-beef.webp',
        alt: 'A skillet of mushroom and plant-based beef cheeseburger filling',
        caption:
          'Mushrooms return to the pan once the seasoned filling is nearly cooked.',
      },
      {
        src: '/photos/impossibly-good-cheeseburger-buns-cheese.webp',
        alt: 'A skillet of cheeseburger filling topped with shredded cheese',
        caption:
          'Cheese goes on at the end, then the filling gets time to cool.',
      },
      {
        src: '/photos/impossibly-good-cheeseburger-buns-shaped.webp',
        alt: 'Unbaked cheeseburger buns on a parchment-lined baking sheet',
        caption: 'Sealed pockets get a quick final rise before baking.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
