import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { brentwoodChanaMasala as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'A good scoop of chana masala, ready for rice.',
  catCaption: 'chickpea inspection',
  ingredientNote: 'The garden peppers mean business.',
  methodEyebrow: 'One big, fragrant pot',
  gallery: {
    eyebrow: 'From the kitchen',
    title: 'A little heat and a big pot',
    intro:
      'Garden peppers, fragrant onions, and chickpeas simmered until tender.',
    threeColumn: true,
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
