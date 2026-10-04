import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { eggWhiteCrepe as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'A delicate folded crepe, a few bright vegetables, and toast if the morning calls for it.',
  catCaption: 'taking the “gently” instruction very seriously',
  ingredientNote:
    'Use only a tiny bit of butter and wait until the top is fully set before flipping; the egg white crepe stays tender that way.',
  methodEyebrow: 'A very gentle breakfast crepe',
  gallery: {
    eyebrow: 'A single pan, a calm breakfast',
    title: 'Thin, set, then folded',
    intro:
      'Shaken egg whites become a thin round in a lightly buttered pan. Keep the seasoning simple, then serve with whatever vegetables or toast are handy.',
    items: [
      {
        src: '/photos/egg-white-crepe-pan.webp',
        alt: 'A thin egg white round cooking in a lightly buttered pan',
        caption: 'Cook until the surface is set enough to flip gently.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
