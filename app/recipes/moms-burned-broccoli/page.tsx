import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { momsBurnedBroccoli as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Dark edges are not a mistake.',
  catCaption: 'char-level observer',
  ingredientNote: 'A little oil or Worcestershire sauce. Then let it get dark.',
  methodEyebrow: 'How Mom burns it nicely',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'A short trip to the dark side',
    title: 'From bright green to just right',
    intro:
      'The pieces begin simply and finish with the browned, toasty edges that make this Orinda’s favorite.',
    threeColumn: true,
    items: [
      {
        src: '/photos/moms-burned-broccoli-raw.webp',
        alt: 'Raw broccoli florets spread over a foil-lined baking sheet',
        caption: 'Bite-sized—or a little bigger—is just right.',
      },
      {
        src: '/photos/moms-burned-broccoli-seasoned.webp',
        alt: 'Broccoli florets lightly coated on a foil-lined baking sheet',
        caption: 'Toss lightly so every piece gets a little coating.',
      },
      {
        src: '/photos/moms-burned-broccoli-finished.webp',
        alt: 'Roasted broccoli with dark browned edges on a baking sheet',
        caption: 'At 375°F, the dark edges are the whole idea.',
      },
    ],
  },
};

export default function MomsBurnedBroccoliPage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
