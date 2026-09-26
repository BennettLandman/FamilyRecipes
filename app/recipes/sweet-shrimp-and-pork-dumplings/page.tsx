import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { sweetShrimpAndPorkDumplings as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Shrimp, pork, Napa, and a sweet little dish of hoisin.',
  catCaption: 'politely requesting one dumpling and possibly the whole plate',
  ingredientNote:
    'Two thumbs of fresh ginger, rubbed into an extra-fine paste, make the filling bright without interrupting its soft texture.',
  methodEyebrow: 'The sweeter basket dumpling',
  familyNoteIcon: '✦',
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
