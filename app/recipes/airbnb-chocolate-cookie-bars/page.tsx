import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { airbnbChocolateCookieBars as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Soft, chocolatey, and best approached with a little patience.',
  catCaption: 'keeping an eye on the pan',
  ingredientNote: 'Five cocoa packets made this batch',
  methodEyebrow: 'A small pan, a warm oven',
  gallery: {
    eyebrow: 'From mixing bowl to plate',
    title: 'One pan of chocolate cookie bars',
    intro: 'Bake until set, then give the bars time to cool enough to handle.',
    threeColumn: true,
    items: [
      {
        src: '/photos/airbnb-chocolate-cookie-bars-mixing.webp',
        alt: 'Thick chocolate cookie bar dough in a mixing bowl',
        caption: 'Mix the butter, cocoa powder, and egg until very smooth.',
      },
      {
        src: '/photos/airbnb-chocolate-cookie-bars-pan.webp',
        alt: 'Chocolate cookie bar baked in a small ceramic pan',
        caption: 'Rotate the pan during baking until the bar is set.',
      },
      {
        src: '/photos/airbnb-chocolate-cookie-bars-finished.webp',
        alt: 'A piece of chocolate cookie bar on a white plate',
        caption: 'Let it cool enough to handle before enjoying.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
