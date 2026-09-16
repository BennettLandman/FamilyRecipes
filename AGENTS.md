# Brentwood Bunch Recipes project guidance

## People and name verification

- The following names are already verified: Dad, Mom, Bennett, Melissa, Charlotte, Pascal, Valen, Orinda, Edna, and Gary.
- When recipe notes or other site content mention any person not on that list, ask the user to verify the spelling of that person's name on its first use before publishing or standardizing it.
- Once the user verifies a new name, add it to the verified-name list in this file so the user is not asked again.
- Preserve first-name-only attribution and references in public site content unless the user explicitly requests otherwise.

## Recipe-page cat art

- Include cat imagery on every recipe page, varying its visual style and treatment from recipe to recipe.
- Keep cats subtle and integrated into the composition, such as a small margin illustration, quiet photo companion, page-corner detail, or understated kitchen observer.
- The food, recipe title, ingredients, and method must remain the visual and functional focus.

## Recipe data and automatic book

- Put each recipe's complete structured content in `lib/recipes.ts`, including its ingredients, method, yield, dates, author, photographs, and family notes.
- Assign every recipe one of the shared sections: Breakfast, Lunch, Dinner, Appetizers, Side dishes, or Desserts.
- Treat the recipe data as the single source for home-page search, category browsing, recipe pages, scaling, and the automatic book at `/book`.
- Do not manually add a recipe to the book. A correctly structured recipe must appear there automatically.

## Efficient recipe additions

- Keep future recipe additions data-first: add the complete entry to `lib/recipes.ts`, process only the selected photos and one distinct cat image, then generate the thin route with `node scripts/scaffold-recipe-page.mjs <recipe-slug> <recipeExportName>`.
- Fill the generated route's short `details` object with the page-specific captions, humor, and optional gallery. The shared renderer owns metadata, structured recipe data, scaling, dates, layout, navigation, and the legal footer.
- Do not rewrite or restyle existing recipe pages merely to use the shared renderer. It is the default for new recipes and preserves the established layout while allowing each page's cat art and voice to remain original.
- Before adding a recipe, first resolve name spelling, transcription ambiguity, food-photo privacy, category, yield, and selected images. This prevents expensive layout rework late in the process.
