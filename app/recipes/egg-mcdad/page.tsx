import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { eggMcDad as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Breakfast engineering, completed in one bowl.',
  catCaption: 'puff-watch supervisor',
  ingredientNote: 'Defrost, puff, top, flip, poof',
  methodEyebrow: 'The bowl-to-bagel maneuver',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'A very short assembly line',
    title: 'From cold bagel to Egg McDad',
    intro:
      'The bowl does the cooking and, with one careful flip, most of the assembly too.',
    threeColumn: true,
    items: [
      {
        src: '/photos/egg-mcdad-toasting.webp',
        alt: 'Two halves of an everything bagel toasting',
        caption: 'Cold but defrosted, then properly toasted.',
      },
      {
        src: '/photos/egg-mcdad-egg.webp',
        alt: 'Cooked egg whites puffed into a round shape in a dark bowl',
        caption: 'The microwave does its dramatic puffing act.',
      },
      {
        src: '/photos/egg-mcdad-cheese.webp',
        alt: 'A slice of cheddar cheese resting on the cooked round egg',
        caption: 'Cheddar is a classic. Leftovers are encouraged.',
      },
      {
        src: '/photos/egg-mcdad-salami.webp',
        alt: 'Slices of salami layered over cheddar and cooked egg in a bowl',
        caption: 'Today’s refrigerator contribution: salami.',
      },
      {
        src: '/photos/egg-mcdad-release.webp',
        alt: 'The top half of an everything bagel pressed over the egg and toppings in a bowl',
        caption: 'Press, turn, release, invert. Confidence helps.',
      },
    ],
  },
};

export default function EggMcDadPage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
