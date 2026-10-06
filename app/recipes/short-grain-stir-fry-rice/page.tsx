import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { shortGrainStirFryRice as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'Chilled short-grain rice earns its browned edges through a few patient rounds in the skillet.',
  catCaption: 'listening for the quiet crackle of another crisp-bottom round',
  ingredientNote:
    'Use leftover rice that was cooked with chicken stock and fully chilled. Soy sauce helps the rice steam and caramelize, but add it a little at a time.',
  methodEyebrow: 'Crisp the bottom, then stir it through',
  gallery: {
    eyebrow: 'Leeks and shiitakes first',
    title: 'Start the skillet with fragrance',
    intro:
      'The leeks and shiitakes soften in sesame oil before the cold rice goes in. Once the rice arrives, the goal is to break it apart, then give the skillet several chances to crisp it.',
    items: [
      {
        src: '/photos/short-grain-stir-fry-rice-mushrooms.webp',
        alt: 'Chopped leeks and shiitake mushrooms cooking in a skillet',
        caption:
          'A small amount of soy sauce helps the vegetables wilt and starts building the seasoning.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
