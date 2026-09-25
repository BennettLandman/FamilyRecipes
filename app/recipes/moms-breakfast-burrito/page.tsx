import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { momsBreakfastBurrito as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'Hot eggs, tiny sausage pieces, a good fold—breakfast solved.',
  catCaption: 'on crumb-watch before the first bite',
  ingredientNote:
    'The dry towel catches sausage grease; the damp towel keeps the microwave from making breakfast sad.',
  methodEyebrow: 'The weekday wrap',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'Breakfast, one burrito at a time',
    title: 'Scramble, chop, roll',
    intro:
      'The whole move is quick: scramble the eggs, make plenty of tiny sausage pieces, then give the tortilla a snug fold.',
    threeColumn: true,
    items: [
      {
        src: '/photos/moms-breakfast-burrito-eggs.webp',
        alt: 'Two eggs cooking in a skillet with salt and pepper',
        caption: 'Start with two well-seasoned eggs in a hot pan.',
      },
      {
        src: '/photos/moms-breakfast-burrito-sausage.webp',
        alt: 'Breakfast sausage cut into small bite-size pieces',
        caption: 'Lengthwise, then crosswise: tiny sausage bits everywhere.',
      },
      {
        src: '/photos/moms-breakfast-burrito-assembly.webp',
        alt: 'Egg, sausage, and shredded cheese piled on a flour tortilla',
        caption: 'Eggs, sausage, and cheese, ready for the roll-up.',
      },
    ],
  },
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
