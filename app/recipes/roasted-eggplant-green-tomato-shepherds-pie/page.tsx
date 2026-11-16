import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { roastedEggplantGreenTomatoShepherdsPie as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'One of two pies, with Parmesan golden at the edges.',
  catCaption: 'Keeping the oven mitt warm.',
  ingredientNote: 'Go heavy on the smoked paprika.',
  gallery: {
    eyebrow: 'In the kitchen',
    title: 'Building the filling',
    intro:
      'The eggplant goes into the skillet first, followed by the roasted green tomatoes.',
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
