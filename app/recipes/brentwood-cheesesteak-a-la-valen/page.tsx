import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { brentwoodCheesesteakALaValen as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Swiss, onions, steak, and no interest in being neat.',
  catCaption: 'gooey-mess enthusiast',
  ingredientNote:
    'Onions low and slow. Steak quick. Swiss as gooey as possible.',
  methodEyebrow: 'Valen’s very good idea',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'A properly gooey sequence',
    title: 'Onion, steak, Swiss, baguette',
    intro:
      'The order matters: give the onion time, cook the steak, then bring them together under melted Swiss.',
    threeColumn: true,
    items: [
      {
        src: '/photos/brentwood-cheesesteak-a-la-valen-onions.webp',
        alt: 'Sliced onions browning slowly in a skillet',
        caption: 'Medium-low heat gives the onions their head start.',
      },
      {
        src: '/photos/brentwood-cheesesteak-a-la-valen-melting.webp',
        alt: 'Thin steak and browned onions under melting Swiss cheese in a skillet',
        caption:
          'Onions back in, Swiss on top, then keep it moving until it melts.',
      },
      {
        src: '/photos/brentwood-cheesesteak-a-la-valen-finished.webp',
        alt: 'Finished cheesesteak sandwich in a toasted baguette',
        caption: 'Valen’s idea, served in a baguette and gloriously untidy.',
      },
    ],
  },
};

export default function BrentwoodCheesesteakALaValenPage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
