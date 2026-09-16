import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { valensCookieCake as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'A birthday-scale cookie, taking its time at 325°.',
  catCaption: 'birthday-cake quality control',
  ingredientNote: 'Valen’s variation: oats at the end, if the mood strikes.',
  methodEyebrow: 'The mixer may never stop',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'From mixer to birthday cake',
    title: 'Big dough, low oven, patient bake',
    intro:
      'Cream the butter and sugars, keep the flour gentle, then make one cookie large enough to count as a cake.',
    threeColumn: true,
    items: [
      {
        src: '/photos/valens-cookie-cake-mixer.webp',
        alt: 'Chocolate-chip cookie dough in a stand mixer bowl',
        caption: 'The mixer is already moving.',
      },
      {
        src: '/photos/valens-cookie-cake-shaped.webp',
        alt: 'Chocolate-chip cookie dough spread into a large round on parchment paper',
        caption: 'One very large cookie, ready for the oven.',
      },
      {
        src: '/photos/valens-cookie-cake-oven.webp',
        alt: 'A large chocolate-chip cookie cake baking in the oven',
        caption: 'Low oven, long bake, halfway turn.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
