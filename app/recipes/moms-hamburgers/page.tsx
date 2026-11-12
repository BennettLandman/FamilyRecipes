import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { momsHamburgers as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Hot off the grill, with cheese and ketchup.',
  catCaption: 'Keeping an eye on the grill.',
  ingredientNote: 'Five ingredients, all by eye.',
  gallery: {
    eyebrow: 'From bowl to grill',
    title: 'What to look for',
    intro:
      'Use the flecks of seasoning and the color of the beef as your guide.',
    threeColumn: true,
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
