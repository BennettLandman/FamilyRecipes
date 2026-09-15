import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { valensRice as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'The rice cooker understood the assignment.',
  catCaption: 'spout-timing apprentice',
  ingredientNote: '¾ cup rice. 1 cup water. Valen has the timing.',
  methodEyebrow: 'The very exact water method',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'The machine knows',
    title: 'A small, glossy success',
    intro:
      'Valen handles the ratio and the mysterious spout timing; the rice cooker handles the rest.',
    items: [
      {
        src: '/photos/valens-rice-cooker.webp',
        alt: 'A rice cooker with its white-rice setting running and a playful face on its lid',
        caption: 'The cooker is on the case.',
      },
      {
        src: '/photos/valens-rice-finished.webp',
        alt: 'A bowl of finished glossy white rice inside an open rice cooker',
        caption: 'Sticky or less glutinous: that choice happened at the rinse.',
      },
    ],
  },
};

export default function ValensRicePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
