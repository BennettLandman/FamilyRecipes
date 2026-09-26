import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { teriyakiMushroomPorkDumplings as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'Sesame-honey teriyaki, mushrooms, and a steamer full of little baskets.',
  catCaption: 'counting dumplings with great concentration',
  ingredientNote:
    'Let the teriyaki sauce cool before it meets the pork so the filling stays a filling—not an accidental stir-fry.',
  methodEyebrow: 'Fold, pinch, steam',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'One sauce, two mushrooms, many folds',
    title: 'From glossy filling to steamer basket',
    intro:
      'Keep the mushroom dice small, seal the edges with a little water, then turn each triangle into a tiny basket before it goes into the steam.',
    threeColumn: false,
    items: [
      {
        src: '/photos/teriyaki-mushroom-pork-dumplings-filling.webp',
        alt: 'Ground pork, mushrooms, green onions, sesame seeds, and teriyaki sauce mixed in a bowl',
        caption:
          'The pork, mushroom, scallion, and sesame filling gets fully blended.',
      },
      {
        src: '/photos/teriyaki-mushroom-pork-dumplings-folded.webp',
        alt: 'Folded uncooked dumplings on a parchment-lined baking sheet',
        caption:
          'Triangle first; then bring the long corners together for the basket fold.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
