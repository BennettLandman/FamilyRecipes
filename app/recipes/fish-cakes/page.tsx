import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { fishCakes as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Crisp from the oven.',
  catCaption: 'Dreaming of leftovers.',
  ingredientNote: 'Save that leftover salmon.',
  gallery: {
    eyebrow: 'From crumbs to cakes',
    title: 'The ramekin trick',
    intro: 'A small parchment circle helps each cake release cleanly.',
    threeColumn: true,
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
