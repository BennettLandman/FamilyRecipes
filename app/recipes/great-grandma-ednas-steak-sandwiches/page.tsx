import {
  RecipePageLayout,
  createRecipeMetadata,
  type RecipePageDetails,
} from '@/components/recipe-page-layout';
import { greatGrandmaEdnasSteakSandwiches as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'The pan juice is the real sandwich seasoning.',
  catCaption: 'pan-juice supervisor',
  ingredientNote:
    'Thin steak, quick pan, one slice of toast. Do not waste the juice.',
  methodEyebrow: 'Great Grandma Edna’s key move',
  familyNoteIcon: '✦',
  gallery: {
    eyebrow: 'A sandwich with a plan',
    title: 'Thin steak, hot pan, juicy toast',
    intro:
      'The seasonings and cheese can vary; the one-slice pass through the pan is what makes it Great Grandma Edna’s.',
    threeColumn: true,
    items: [
      {
        src: '/photos/great-grandma-ednas-steak-sandwiches-bread.webp',
        alt: 'A stack of thick sliced rosemary Parmesan bread',
        caption: 'Use a toast-worthy bread—this batch was rosemary Parmesan.',
      },
      {
        src: '/photos/great-grandma-ednas-steak-sandwiches-seasoning.webp',
        alt: 'A small bowl with onion powder, cracked pepper, and salt',
        caption: 'A simple equal-parts seasoning stands in for garlic salt.',
      },
      {
        src: '/photos/great-grandma-ednas-steak-sandwiches-seasoned-steak.webp',
        alt: 'Thin raw steaks lightly seasoned with pepper and garlic salt mixture',
        caption: 'Thin steak, seasoned lightly, ready for a quick fry.',
      },
      {
        src: '/photos/great-grandma-ednas-steak-sandwiches-searing.webp',
        alt: 'Thin steaks browning in a nonstick skillet',
        caption: 'Brown both sides quickly.',
      },
      {
        src: '/photos/great-grandma-ednas-steak-sandwiches-juicy-toast.webp',
        alt: 'A slice of toast soaking up juices in a skillet',
        caption:
          'The non-negotiable move: let the toast take up the pan juices.',
      },
      {
        src: '/photos/great-grandma-ednas-steak-sandwiches-finished.webp',
        alt: 'Finished steak sandwich made with a single slice of toast',
        caption: 'A very flavorful steak sandwich, ready to eat.',
      },
    ],
  },
};

export default function GreatGrandmaEdnasSteakSandwichesPage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
