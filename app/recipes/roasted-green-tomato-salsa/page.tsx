import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { roastedGreenTomatoSalsa as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Tangy green tomato salsa, ready to spoon.',
  catCaption: 'On tomato watch.',
  ingredientNote: 'One hot pepper for the whole batch.',
  gallery: {
    eyebrow: 'From sheet pan to bowl',
    title: 'Before and after broiling',
    intro: 'Look for blistered tomato skins and browned edges on the onions.',
    threeColumn: true,
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
