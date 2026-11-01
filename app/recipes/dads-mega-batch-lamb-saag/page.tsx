import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { dadsMegaBatchLambSaag as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'A big pot, a slow simmer, and a bowl over rice.',
  catCaption: 'on simmer patrol',
  ingredientNote: 'Save the juices. They belong in the pot.',
  methodEyebrow: 'A little patience, a lot of saag',
  gallery: {
    eyebrow: 'From the kitchen',
    title: 'The makings of a mega batch',
    intro:
      'Onions, tomatoes, and plenty of spinach make the sauce for a slow-simmered supper.',
    threeColumn: true,
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
