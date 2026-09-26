import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { simplyAmazingShrimpScampi as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Butter, shrimp, pasta, Parmesan: dinner disappears fast.',
  catCaption: 'conducting a very serious Parmesan investigation',
  ingredientNote:
    'Nearly defrosted shrimp will weep water. Let it happen, drain it off, and keep going.',
  methodEyebrow: 'The no-fuss, all-gone dinner',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'One pan, one pot, one happy serving bowl',
    title: 'The shrimp-and-pasta handoff',
    intro:
      'Start the pasta and shrimp so they finish together. Then use the Parmesan in two stages: first to coat the noodles, then to shower the shrimp.',
    threeColumn: true,
    items: [
      {
        src: '/photos/simply-amazing-shrimp-scampi-start.webp',
        alt: 'Nearly defrosted shrimp cooking in melted butter',
        caption:
          'Butter and nearly defrosted shrimp are all the skillet needs.',
      },
      {
        src: '/photos/simply-amazing-shrimp-scampi-pasta.webp',
        alt: 'Pasta boiling in a pot',
        caption: 'Taste a piece before draining—carefully.',
      },
      {
        src: '/photos/simply-amazing-shrimp-scampi-shrimp.webp',
        alt: 'Cooked shrimp in a skillet after excess liquid has been drained',
        caption:
          'Once the extra water is gone, lightly dry the shrimp in the pan.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
