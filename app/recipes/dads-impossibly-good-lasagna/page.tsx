import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { dadsImpossiblyGoodLasagna as recipe } from '@/lib/recipes';
import styles from './recipe.module.css';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Golden, bubbly, and worth the fifteen-minute wait.',
  heroClassName: styles.heroPhoto,
  catCaption: 'fifteen minutes, please',
  catClassName: styles.catArt,
  ingredientNote: 'Dry fillings. A little sauce. A very good lasagna.',
  methodEyebrow: 'Build the layers, then let them settle',
  gallery: {
    eyebrow: 'From the kitchen',
    title: 'The layers, the top, the bonus pan',
    intro:
      'A little preparation keeps the layers rich and the finished lasagna from turning soupy.',
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
