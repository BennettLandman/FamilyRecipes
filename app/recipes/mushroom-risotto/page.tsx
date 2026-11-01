import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { mushroomRisotto as recipe } from '@/lib/recipes';
import styles from './recipe.module.css';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Creamy rice, rich mushrooms, and a generous Parmesan finish.',
  catCaption: 'patiently supervising',
  ingredientNote: 'Dry the rice. Don’t fry the rice. Keep stirring.',
  methodEyebrow: 'A ladle at a time',
  gallery: {
    eyebrow: 'From the kitchen',
    title: 'The pans and the garden stand-in',
    intro:
      'The finished risotto starts with gently toasted rice, simmering mushrooms, and what the garden has to offer.',
    items: recipe.photos ?? [],
  },
};

export default function RecipePage() {
  return (
    <div className={styles.page}>
      <RecipePageLayout recipe={recipe} details={details} />
    </div>
  );
}
