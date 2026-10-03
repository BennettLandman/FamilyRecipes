import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { dadsFamousPizzaDogs as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'Soft bread dough, a completely dry dog, and just enough time in the oven.',
  catCaption: 'on strict quality control for the golden-brown finish',
  ingredientNote:
    'The dog needs to be fully cooked and completely dry before it meets the dough.',
  methodEyebrow: 'Dad’s soft, golden dough blanket',
  gallery: {
    eyebrow: 'Proof, dry, wrap, bake',
    title: 'The pizza-dog assembly line',
    intro:
      'The dough does most of the work, but the dry-hot-dog rule is what makes the wrap behave. Give the finished dogs their short second rise before the oven.',
    threeColumn: true,
    items: [
      {
        src: '/photos/dads-famous-pizza-dogs-yeast.webp',
        alt: 'A frothy yeast mixture in a metal mixing bowl',
        caption: 'Frothy yeast means the dough is ready to begin.',
      },
      {
        src: '/photos/dads-famous-pizza-dogs-dogs.webp',
        alt: 'Fully cooked hot dogs drying on paper towels',
        caption: 'Dry them thoroughly—no sticky or humid surfaces.',
      },
      {
        src: '/photos/dads-famous-pizza-dogs-shaped.webp',
        alt: 'Unbaked dough-wrapped hot dogs on a parchment-lined baking sheet',
        caption: 'Wrapped, seam-side down, and ready for one more rise.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
