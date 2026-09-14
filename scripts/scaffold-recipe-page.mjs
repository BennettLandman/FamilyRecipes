import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [slug, exportName] = process.argv.slice(2);
const validSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const validExport = /^[a-z][A-Za-z0-9]*$/;

if (!validSlug.test(slug ?? '') || !validExport.test(exportName ?? '')) {
  console.error(
    'Usage: node scripts/scaffold-recipe-page.mjs <recipe-slug> <recipeExportName>',
  );
  process.exit(1);
}

const directory = path.join(process.cwd(), 'app', 'recipes', slug);
const destination = path.join(directory, 'page.tsx');
const source = `import { RecipePageLayout, createRecipeMetadata, type RecipePageDetails } from '@/components/recipe-page-layout';
import { ${exportName} as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';
export const metadata = createRecipeMetadata(recipe);

const details: RecipePageDetails = {
  heroCaption: 'ADD A SHORT FOOD CAPTION',
  catCaption: 'ADD A QUIET CAT JOKE',
  ingredientNote: 'ADD A HANDWRITTEN-STYLE NOTE',
  methodEyebrow: 'How we make it',
};

export default function RecipePage() {
  return <RecipePageLayout recipe={recipe} details={details} />;
}
`;

await mkdir(directory, { recursive: true });
await writeFile(destination, source, { flag: 'wx' });
console.log(`Created ${path.relative(process.cwd(), destination)}`);
