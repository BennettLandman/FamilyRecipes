import { RecipePageLayout, createRecipeMetadata, type RecipePageDetails } from '@/components/recipe-page-layout';
import { pinkFishAndPineapple as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'One salmon fillet, with a caramelized chili-sugar half and a bright pineapple half.',
  catCaption: 'keeping a respectful distance from the sweet-hot side',
  ingredientNote: 'Mix the chili powder, brown sugar, and kosher salt in roughly equal parts; use a light hand with all extra salt.',
  methodEyebrow: 'Two salmon treatments, one parchment-lined pan',
  gallery: { eyebrow: 'The seasoning mix', title: 'Sweet, hot, and lightly salty', intro: 'A simple equal-parts blend gives one side of the salmon a caramelized crust.', items: [{ src: '/photos/pink-fish-and-pineapple-seasoning.webp', alt: 'Brown sugar, chili powder, and kosher salt in a bowl', caption: 'Kosher salt keeps the mix from becoming too salty.' }] },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
