# Brentwood Bunch Recipes

A warm, practical family recipe collection published with GitHub Pages.

## Adding recipes

Each recipe has its complete structured record in `lib/recipes.ts` and its own printable page under `app/recipes/`. Photographs live in `public/photos/` as metadata-free WebP files. New recipes should retain the cook’s phrasing and practical cues while separating ingredients, method, and family notes. Use the shared `RecipeScaler` component for ingredient quantities and yield so every recipe can be resized in the browser and printed at the selected scale.

Recipes use one of seven sections: Breakfast, Lunch, Dinner, Appetizers, Side dishes, Desserts, or Pantry. The home page uses these sections for browsing, and the recipe book automatically groups recipes under the same headings.

## Recipe book

Open `/FamilyRecipes/book` or choose **Recipe book** in the site header. The book is assembled in the browser from the same recipe data as the site, including a cover, family introduction, table of contents, themed section dividers, recipe pages, and a final About page explaining how the cookbook is made. Choose **Save book as PDF**, then select **Save as PDF** in the browser print dialog. New recipes appear in the book automatically after the updated site is deployed; no separate book file needs to be regenerated or checked into the repository.

## Local preview

Use `pnpm dev`, then open the `/FamilyRecipes/` route printed by the development server.

## Publishing

Pushing `main` runs the GitHub Pages workflow, prepares clean recipe URLs, and publishes the static export.
