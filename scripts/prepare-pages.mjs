import { copyFile, cp, mkdir, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const outputRoot = new URL('../dist/client/', import.meta.url).pathname;

// Vinext writes prefixed client assets beneath the repository name. GitHub
// Pages already mounts this artifact at /FamilyRecipes, so copy the assets to
// the artifact root to avoid a duplicated /FamilyRecipes/FamilyRecipes path.
await cp(
  join(outputRoot, 'FamilyRecipes', '_next'),
  join(outputRoot, '_next'),
  { recursive: true },
);

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectHtml(path)));
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

for (const htmlFile of await collectHtml(outputRoot)) {
  const route = relative(outputRoot, htmlFile);
  if (
    route === 'index.html' ||
    route === '404.html' ||
    route.endsWith('/index.html')
  )
    continue;
  const cleanDirectory = htmlFile.slice(0, -'.html'.length);
  await mkdir(cleanDirectory, { recursive: true });
  await copyFile(htmlFile, join(cleanDirectory, 'index.html'));
}
