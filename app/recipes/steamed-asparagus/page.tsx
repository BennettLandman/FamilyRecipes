import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { steamedAsparagus as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'A fast steel-pan steam keeps the spears bright, tender, and wholly themselves.',
  catCaption: 'watching closely for the first tiny bubbles at the cut ends',
  ingredientNote:
    'The snap point is the trim guide. Use only a light amount of pepper—the photo is intentionally a cautionary example.',
  methodEyebrow: 'A fast steam with no guesswork',
  gallery: {
    eyebrow: 'Snap, season, cover',
    title: 'Bright-green asparagus, quickly',
    intro:
      'The natural break removes the woody part. A little hot water and a covered steel pan finish the tender spears quickly.',
    items: [
      {
        src: '/photos/steamed-asparagus-pan.webp',
        alt: 'Trimmed asparagus seasoned in a steel pan before steaming',
        caption:
          'Keep the pepper lighter than this process photo: a touch is plenty.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
