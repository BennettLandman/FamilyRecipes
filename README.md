# Brentwood Bunch Recipes

A warm, practical family recipe collection published with GitHub Pages.

## Adding recipes

Each recipe has structured metadata in `lib/recipes.ts` and its own printable page under `app/recipes/`. Photographs live in `public/photos/` as metadata-free WebP files. New recipes should retain the cook’s phrasing and practical cues while separating ingredients, method, and family notes. Use the shared `RecipeScaler` component for ingredient quantities and yield so every recipe can be resized in the browser and printed at the selected scale.

## Local preview

Use `pnpm dev`, then open the `/FamilyRecipes/` route printed by the development server.

## Publishing

Pushing `main` runs the GitHub Pages workflow, prepares clean recipe URLs, and publishes the static export.
