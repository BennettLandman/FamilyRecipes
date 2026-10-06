import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { momsMashedPotatoes as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'Hot potatoes, butter, and cheese meeting while there is still enough heat to melt everything together.',
  catCaption: 'patiently waiting for the butter to finish melting',
  ingredientNote:
    'The potatoes set the quantity. Start light with salt and pepper, then let the butter and cheese do their work before deciding whether the bowl needs milk, sour cream, or yogurt.',
  methodEyebrow: 'Build the texture from the heat of the potatoes',
  gallery: {
    eyebrow: 'Boil, drain, then mix',
    title: 'The fork-tender checkpoint',
    intro:
      'Uniform cubes cook at the same pace. As soon as they split easily with a fork, drain them and move them straight over the waiting butter.',
    items: [
      {
        src: '/photos/moms-mashed-potatoes-boiling.webp',
        alt: 'A large pot of salted water at a rolling boil for potatoes',
        caption:
          'Start with a true rolling boil, then cook only until the potato cubes are fork tender.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
