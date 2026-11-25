import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { dadsLeftoverBabaGanoush as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Dad’s eggplant dip, ready for chips.',
  catCaption: 'Nap while it chills.',
  catClassName: 'recipe-cat-inset-caption',
  ingredientNote: 'Save the peels and seedy centers.',
  gallery: {
    eyebrow: 'In the kitchen',
    title: 'From skillet to food processor',
    intro: 'Soften the eggplant completely before blending it into the dip.',
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
