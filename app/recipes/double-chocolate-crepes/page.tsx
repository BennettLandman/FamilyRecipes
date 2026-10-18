import { RecipePageLayout, createRecipeMetadata, type RecipePageDetails } from '@/components/recipe-page-layout';
import { doubleChocolateCrepes as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'A little cocoa in the batter, chocolate chips inside.',
  catCaption: 'the official chocolate-chip supervisor',
  ingredientNote: 'Keep the cocoa packets handy',
  methodEyebrow: 'A careful flip is worth it',
  gallery: {
    eyebrow: 'From batter to breakfast',
    title: 'Chocolate crepes, step by step',
    intro: 'Cook gently, flip carefully, and tuck in the chocolate chips.',
    threeColumn: true,
    items: [
      {
        src: '/photos/double-chocolate-crepes-batter.webp',
        alt: 'Chocolate crepe batter in a mixing bowl with a ladle',
        caption: 'Whisk the cocoa into the standard crepe batter.',
      },
      {
        src: '/photos/double-chocolate-crepes-pan.webp',
        alt: 'A chocolate crepe cooking in a skillet',
        caption: 'A moderate, steady heat helps prevent burning.',
      },
      {
        src: '/photos/double-chocolate-crepes-finished.webp',
        alt: 'A plate piled with folded chocolate and plain crepes',
        caption: 'Fold with chocolate chips and enjoy.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
