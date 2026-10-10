import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { pascalsNearlyHomemadeTacos as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption:
    'Warm tortillas, lightly browned meat, and all the quick toppings.',
  catCaption: 'waiting to see whether any taco filling escapes',
  ingredientNote:
    'Use only half of the lime sauce and salsa in the skillet; keep the rest for serving if you like.',
  methodEyebrow: 'A taco-kit shortcut with a skillet finish',
  gallery: {
    eyebrow: 'One gentle skillet step',
    title: 'Warm, brown, then sauce',
    intro:
      'The goal is to heat the prepared meat and give it just a little color before the lime sauce and salsa go in.',
    items: [
      {
        src: '/photos/pascals-nearly-homemade-tacos-skillet.webp',
        alt: 'Lightly browned taco-kit meat warming with sauce in a skillet',
        caption:
          'Keep the heat at medium to medium-low so the sauce warms evenly without scorching.',
      },
      {
        src: '/photos/pascals-nearly-homemade-tacos-kit.webp',
        alt: 'A prepared taco kit with tortillas, shredded cabbage, lime wedges, and cooked meat',
        caption:
          'Everything begins in one taco kit; the skillet is what makes it feel freshly made.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
