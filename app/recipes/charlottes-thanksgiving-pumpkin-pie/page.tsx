import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { charlottesThanksgivingPumpkinPie as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Charlotte’s pie cooling on the rack.',
  catCaption: 'Pumpkin inspection complete.',
  catClassName: 'recipe-cat-inset-caption',
  ingredientNote: 'Start with sweet pie pumpkins.',
  gallery: {
    eyebrow: 'In the kitchen',
    title: 'From garden pumpkins to pie',
    intro: 'Roast the pumpkins until the flesh is soft enough to purée.',
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
