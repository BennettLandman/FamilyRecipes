import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { greatGrandmaEdnasLemonMeringuePie as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Golden peaks, fresh from the oven.',
  catCaption: 'On whisk duty.',
  catClassName: 'recipe-cat-inset-caption',
  ingredientNote: 'Zest the lemons before juicing.',
  gallery: {
    eyebrow: 'In the kitchen',
    title: 'The lemon filling and meringue',
    intro: 'Have the meringue ready to spread while the filling is still hot.',
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
