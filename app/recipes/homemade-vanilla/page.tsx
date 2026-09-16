import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { homemadeVanilla as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Twenty-five beans, six months, and a very good dark cabinet.',
  catCaption: 'patient pantry inspector',
  ingredientNote: 'The recipe is easy. The waiting is the important part.',
  methodEyebrow: 'The long steep',
  gallery: {
    eyebrow: 'Two ways to steep',
    title: 'Mexican-style or Tennessee special',
    intro:
      'Start with the same simple bean-to-bottle ratio, then choose the spirit that makes the vanilla you want.',
    items: [
      {
        src: '/photos/homemade-vanilla-vodka.webp',
        alt: 'Vanilla beans steeping in a clear 1.75-liter vodka bottle',
        caption: 'Vodka keeps the vanilla classic and clean.',
      },
      {
        src: '/photos/homemade-vanilla-whiskey.webp',
        alt: 'Vanilla beans steeping in a dark 1.75-liter whiskey bottle',
        caption: 'Whiskey makes the warmer, rounder Tennessee special.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
