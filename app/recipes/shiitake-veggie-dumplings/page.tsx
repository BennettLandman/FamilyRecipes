import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { shiitakeVeggieDumplings as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'One filling, three perfectly good excuses to make dumplings.',
  catCaption: 'steamer-side supervision',
  ingredientNote:
    'The tiny bits matter: mince the vegetables finely, and grate the carrot and ginger until they disappear into the filling.',
  methodEyebrow: 'Fold them your way',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'Choose your texture',
    title: 'Tender, crisp, or a little of both',
    intro:
      'The same savory filling travels three different roads: a gently crisped potsticker, a tender steamed dumpling, or an air-fried quick bite.',
    threeColumn: true,
    items: [
      {
        src: '/photos/shiitake-veggie-dumplings-filling.webp',
        alt: 'A bowl of minced vegetables and mushrooms for dumpling filling',
        caption: 'Mince, grate, and mix until it becomes one filling.',
      },
      {
        src: '/photos/shiitake-veggie-dumplings-potstickers.webp',
        alt: 'Vegetable dumplings cooking in a skillet with water',
        caption: 'Potstickers finish with a little crisp at the bottom.',
      },
      {
        src: '/photos/shiitake-veggie-dumplings-steamed.webp',
        alt: 'Vegetable dumplings steaming in a bamboo steamer',
        caption: 'Steam brings out the warm, tender middle.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
