import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { orindasVegetarianScallops as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Fresh linguine with golden tomatoes and shaved Parmesan.',
  catCaption: 'On tomato watch.',
  catClassName: 'recipe-cat-inset-caption',
  ingredientNote: 'Keep the mushroom pan handy.',
  gallery: {
    eyebrow: 'In the kitchen',
    title: 'From prep to pan',
    intro: 'Salt the eggplant while you brown the mushrooms, then reuse the pan.',
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
