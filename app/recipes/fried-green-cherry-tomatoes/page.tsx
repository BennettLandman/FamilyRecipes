import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { friedGreenCherryTomatoes as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Both batches, side by side in the serving dish.',
  catCaption: 'Inspecting the smallest tomato.',
  ingredientNote: 'Dry the halves well before dredging.',
  gallery: {
    eyebrow: 'At the table',
    title: 'Rémoulade on the side',
    intro: 'Keep the dip in a separate bowl so the cornmeal stays crisp.',
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
