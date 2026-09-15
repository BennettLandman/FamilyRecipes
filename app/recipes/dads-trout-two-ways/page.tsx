import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { dadsTroutTwoWays as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'One fish, two good answers.',
  catCaption: 'split-decision consultant',
  ingredientNote: 'Lemon on one half. Basil, onion, and Parmesan on the other.',
  methodEyebrow: 'Dad’s half-and-half approach',
  familyNoteIcon: '↔',
  gallery: {
    eyebrow: 'One fish, two paths',
    title: 'The very practical divide',
    intro:
      'The two halves start together and finish together—only the toppings change.',
    threeColumn: true,
    items: [
      {
        src: '/photos/dads-trout-two-ways-raw.webp',
        alt: 'A whole raw steelhead trout fillet resting on parchment paper',
        caption: 'A 3½-pound steelhead trout gets the whole pan.',
      },
      {
        src: '/photos/dads-trout-two-ways-topped.webp',
        alt: 'Steelhead trout with lemon slices on one half and basil onion Parmesan topping on the other',
        caption:
          'Lemon for one side; basil, onion, and Parmesan for the other.',
      },
      {
        src: '/photos/dads-trout-two-ways-finished.webp',
        alt: 'Baked trout with browned lemon slices and a browned basil Parmesan crust',
        caption: 'Forty minutes later, both camps get their fish.',
      },
    ],
  },
};

export default function DadsTroutTwoWaysPage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
