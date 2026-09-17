import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { tennesseeThaiBasilCurry as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'One big, generous pot where Tennessee meets Thai basil.',
  catCaption: 'keeping an eye on the basil',
  ingredientNote:
    'Use the Thai basil from the garden if you can—it is the whole point of the title.',
  methodEyebrow: 'Make the big pot',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'A pot with a plan',
    title: 'Brown, simmer, and let the basil finish it',
    intro:
      'This curry starts with a properly flavorful pot, then lets rice, stock, Thai basil, and leftover roasted okra do the cozy work.',
    items: [
      {
        src: '/photos/tennessee-thai-basil-curry-onions.webp',
        alt: 'Chopped onions sautéing in coconut oil in a large pot',
        caption: 'Onion first, until it starts to brown.',
      },
      {
        src: '/photos/tennessee-thai-basil-curry-sausage-chicken.webp',
        alt: 'Chicken, sliced andouille sausage, and multicolored peppers in a pot',
        caption: 'Chicken, sausage, and peppers get a little color.',
      },
      {
        src: '/photos/tennessee-thai-basil-curry-simmer.webp',
        alt: 'Curry with chicken, sausage, peppers, and stock simmering in a pot',
        caption: 'Stock turns the pot into curry.',
      },
      {
        src: '/photos/tennessee-thai-basil-curry-thai-basil.webp',
        alt: 'Fresh Thai basil with purple flowers growing in a garden',
        caption: 'Fresh Thai basil makes the finish sing.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
