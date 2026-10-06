import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { quickSmokedSausage as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'Smoked sausage coins with crisp golden edges—ready to take dinner in any direction.',
  catCaption: 'waiting patiently for the golden-brown side to appear',
  ingredientNote:
    'Give the sliced sausage enough time to brown on both cut sides. That small pause is where the extra flavor happens.',
  methodEyebrow: 'One skillet, plenty of possibilities',
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
