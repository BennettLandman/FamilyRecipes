import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { dadsBakedTofuBites as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'A better crust, one careful flip at a time.',
  catCaption: 'crust inspection crew',
  ingredientNote: 'Teriyaki first. Tiny bit of starch. Let the oven work.',
  methodEyebrow: 'Dad’s two-temperature bake',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'A tofu timeline',
    title: 'From block to browned bites',
    intro:
      'The cut sets the texture; the teriyaki and a light starch coating take care of the edges.',
    threeColumn: true,
    items: [
      {
        src: '/photos/dads-baked-tofu-bites-plain.webp',
        alt: 'A block of firm tofu resting in its open package',
        caption: 'Start with a well-drained block of firm tofu.',
      },
      {
        src: '/photos/dads-baked-tofu-bites-marinated.webp',
        alt: 'Flat slices of tofu covered in dark teriyaki marinade',
        caption: 'Flatways, crossways, then a little time in teriyaki.',
      },
      {
        src: '/photos/dads-baked-tofu-bites-first-bake.webp',
        alt: 'Teriyaki tofu bites on a parchment-lined baking sheet during the first bake',
        caption: 'The first side sets up at 325°F.',
      },
      {
        src: '/photos/dads-baked-tofu-bites-finished.webp',
        alt: 'Golden tofu bites with browned edges on parchment paper',
        caption: 'Flip, raise the heat, and take them as brown as you like.',
      },
    ],
  },
};

export default function DadsBakedTofuBitesPage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
