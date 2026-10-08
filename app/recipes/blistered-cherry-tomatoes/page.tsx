import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { blisteredCherryTomatoes as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'Bright tomatoes, a little balsamic, and purple basil from the hot skillet.',
  catCaption: 'watching for the first good blister',
  ingredientNote:
    'Keep the tomatoes moving only after their first side begins to caramelize.',
  methodEyebrow: 'A quick hot skillet side',
  gallery: {
    eyebrow: 'Let them blister',
    title: 'Color first, basil last',
    intro: 'A few minutes of steady heat brings out the tomatoes’ sweetness.',
    items: [
      {
        src: '/photos/blistered-cherry-tomatoes-pan.webp',
        alt: 'Cherry tomatoes caramelizing in a skillet',
        caption: 'Give the tomatoes time on each side before stirring.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
