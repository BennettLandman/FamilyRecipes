import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { momsLasagna as recipe } from '@/lib/recipes';
import styles from './recipe.module.css';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'A golden top, a warm middle, and a little patience.',
  heroClassName: styles.heroPhoto,
  catCaption: 'the spare-noodle supervisor',
  catClassName: styles.catArt,
  ingredientNote: 'Overlap the noodles. Save sauce for the top.',
  methodEyebrow: 'Mom’s order of operations',
  gallery: {
    eyebrow: 'Layer by layer',
    title: 'Sauce, ricotta, noodles, repeat',
    intro:
      'Keep each sauce layer modest, overlap the lower noodles, and give the top full coverage.',
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
