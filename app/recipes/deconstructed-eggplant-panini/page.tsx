import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { deconstructedEggplantPanini as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Straight from the oven, with the mozzarella just melted.',
  catCaption: 'The cat has called dibs on the warm spot.',
  ingredientNote: 'Slice the tomatoes as thin as you can.',
  gallery: {
    eyebrow: 'In the kitchen',
    title: 'From panini press to baking dish',
    intro: 'Grill the eggplant while the first layers wait in the baking dish.',
    threeColumn: true,
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
