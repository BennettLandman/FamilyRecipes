import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { tennesseePotatoZaga as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'A deeply browned cheddar lid over tender, smoky potato layers.',
  catCaption: 'standing guard until the dish has cooled enough to serve',
  ingredientNote:
    'Pre-cooking in five-minute microwave segments makes the final 400°F bake about browning and melting, not starting from raw potatoes.',
  methodEyebrow: 'A microwave shortcut with a real gratin finish',
  gallery: {
    eyebrow: 'The three-cheese sauce',
    title: 'A spoon-coating sauce, not a stiff one',
    intro:
      'Butter and flour hold the milk and cheeses together while smoked paprika brings a warm, Tennessee-style color.',
    items: [
      {
        src: '/photos/tennessee-potato-zaga-sauce.webp',
        alt: 'Three cheeses melting into a smoked paprika sauce in a saucepan',
        caption:
          'Melt the cheeses gently over medium-low heat, then salt last: they carry plenty of seasoning themselves.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
