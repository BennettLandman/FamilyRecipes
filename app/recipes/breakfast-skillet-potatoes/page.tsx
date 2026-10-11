import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { breakfastSkilletPotatoes as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'Crisp, buttery potato cubes with the skins still doing their good work.',
  catCaption: 'here for the potato skins and the skillet soundtrack',
  ingredientNote:
    'For a full pan, six tablespoons of unsalted butter is enough to coat the potato cubes and skillet without leaving a puddle.',
  methodEyebrow: 'Yesterday’s baked potatoes become breakfast',
  gallery: {
    eyebrow: 'Start cold',
    title: 'Skin-on cubes, ready for the skillet',
    intro:
      'Cold baked potatoes hold their shape while the skillet builds a golden, crisp exterior.',
    items: [
      {
        src: '/photos/breakfast-skillet-potatoes-chopped.webp',
        alt: 'Chilled baked potatoes with skins cut into cubes on a cutting board',
        caption:
          'About 1-centimeter cubes give plenty of edges to brown while keeping the centers tender.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
