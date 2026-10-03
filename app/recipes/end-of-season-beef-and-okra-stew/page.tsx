import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { endOfSeasonBeefAndOkraStew as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'A thick, deeply savory dinner for the giant okra pods that got away from you.',
  catCaption: 'offering a very serious opinion on stew versus soup',
  ingredientNote:
    'Roasting makes oversized okra easier to sort: keep the tender pieces, then rescue the soft interior and seeds from the woody pods.',
  methodEyebrow: 'A late-season okra rescue mission',
  gallery: {
    eyebrow: 'Roast, brown, simmer',
    title: 'Three pans, one serious stew',
    intro:
      'A splash of stock pulls the fond from the vegetable pans, and the long simmer brings every bit of beef, mushroom, leek, celery, and rescued okra together.',
    threeColumn: true,
    items: [
      {
        src: '/photos/end-season-beef-and-okra-stew-roasted-okra.webp',
        alt: 'Large roasted okra pods on a baking sheet',
        caption:
          'Roasted late-season pods are ready to be sorted for their tender parts.',
      },
      {
        src: '/photos/end-season-beef-and-okra-stew-stock-and-beef.webp',
        alt: 'Chicken stock, mushrooms, and browned ground beef cooking on the stove',
        caption: 'Rich stock, mushrooms, and well-browned beef build the base.',
      },
      {
        src: '/photos/end-season-beef-and-okra-stew-finished.webp',
        alt: 'Finished thick beef and okra stew in a pan on the stove',
        caption:
          'After an hour of simmering, the verdict is clear: absolutely stew.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
