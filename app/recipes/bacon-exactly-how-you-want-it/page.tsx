import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { baconExactlyHowYouWantIt as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'Oven-baked bacon, cooked until it is exactly your favorite kind of crisp.',
  catCaption: 'maintaining a respectful distance from the hot tray',
  ingredientNote:
    'The 35-minute timing is a reference for three trays of thick-cut bacon, not a rule—your preferred crispness gets the final say.',
  methodEyebrow: 'No frying pan, no splatter debate',
  gallery: {
    eyebrow: 'Tray to table',
    title: 'Bake it all at once',
    intro:
      'Moving the trays between racks every five minutes gives every strip its turn in the hot spots.',
    items: [
      {
        src: '/photos/bacon-exactly-how-you-want-it-tray.webp',
        alt: 'Bacon cooking on a sheet pan in rendered fat',
        caption:
          'The bacon has begun to color; keep rotating the trays until it reaches your preferred crispness.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
