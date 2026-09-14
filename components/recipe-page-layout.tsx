/* eslint-disable next/no-img-element -- Recipe photographs and cat art are optimized before publishing. */

import type { Metadata } from 'next';
import { PrintButton } from '@/components/print-button';
import { RecipeScaler } from '@/components/recipe-scaler';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { formatIngredient } from '@/lib/recipe-format';
import { assetPath, type Recipe } from '@/lib/recipes';

const siteUrl = 'https://bennettlandman.github.io/FamilyRecipes';

export type RecipeGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type RecipePageDetails = {
  heroCaption: string;
  catCaption: string;
  ingredientNote: string;
  methodEyebrow?: string;
  familyNoteIcon?: string;
  heroClassName?: string;
  catClassName?: string;
  gallery?: {
    eyebrow: string;
    title: string;
    intro: string;
    threeColumn?: boolean;
    items: RecipeGalleryItem[];
  };
};

export function createRecipeMetadata(recipe: Recipe): Metadata {
  const canonicalUrl = `${siteUrl}/recipes/${recipe.slug}`;
  const heroUrl = `${siteUrl}${recipe.heroImage}`;

  return {
    title: recipe.title,
    description: recipe.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: recipe.title,
      description: recipe.description,
      type: 'article',
      url: canonicalUrl,
      images: [{ url: heroUrl, alt: recipe.heroAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: recipe.title,
      description: recipe.description,
      images: [heroUrl],
    },
  };
}

function isoDate(date: string) {
  return new Date(`${date} 12:00:00 UTC`).toISOString().slice(0, 10);
}

export function RecipePageLayout({
  recipe,
  details,
}: {
  recipe: Recipe;
  details: RecipePageDetails;
}) {
  const heroUrl = `${siteUrl}${recipe.heroImage}`;
  const structuredRecipe = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    author: { '@type': 'Person', name: recipe.author },
    datePublished: isoDate(recipe.added),
    dateModified: isoDate(recipe.updated),
    description: recipe.description,
    image: [heroUrl],
    recipeCategory: recipe.section,
    recipeYield: recipe.yield,
    recipeIngredient: recipe.ingredients.map((ingredient) =>
      formatIngredient(ingredient),
    ),
    recipeInstructions: recipe.steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.text,
    })),
  };

  return (
    <div className="site-shell recipe-page">
      <SiteHeader />
      <main className="wrap recipe-wrap">
        <a className="back-link no-print" href={`${assetPath}/#recipes`}>
          <span aria-hidden="true">←</span> Back to the recipe box
        </a>
        <article>
          <header className="recipe-hero">
            <div className="recipe-hero-copy">
              <p className="eyebrow">{recipe.section}</p>
              <div className="recipe-badges">
                {recipe.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
              <h1>{recipe.title}</h1>
              <p className="recipe-deck">{recipe.description}</p>
              <dl className="recipe-dates">
                <div>
                  <dt>By</dt>
                  <dd>{recipe.author}</dd>
                </div>
                <div>
                  <dt>Added</dt>
                  <dd>{recipe.added}</dd>
                </div>
                <div>
                  <dt>Updated</dt>
                  <dd>{recipe.updated}</dd>
                </div>
              </dl>
              <PrintButton />
            </div>
            <figure
              className={`recipe-hero-photo ${details.heroClassName ?? ''}`}
            >
              <img
                src={`${assetPath}${recipe.heroImage}`}
                alt={recipe.heroAlt}
              />
              <figcaption>{details.heroCaption}</figcaption>
            </figure>
            <figure
              className={`cat-art recipe-cat ${details.catClassName ?? ''}`}
            >
              <img src={`${assetPath}${recipe.catImage}`} alt={recipe.catAlt} />
              <figcaption>{details.catCaption}</figcaption>
            </figure>
          </header>

          <div className="recipe-content">
            <section
              className="ingredients-card"
              aria-labelledby="ingredients-title"
            >
              <div className="paperclip" aria-hidden="true" />
              <p className="handwritten">{details.ingredientNote}</p>
              <h2 id="ingredients-title">Ingredients</h2>
              <RecipeScaler
                baseYield={recipe.yieldRange}
                yieldUnit={recipe.yieldUnit}
                yieldPluralUnit={recipe.yieldPluralUnit}
                ingredients={recipe.ingredients}
              />
              {recipe.houseNote && (
                <aside className="house-note">
                  <strong>{recipe.houseNote.title}</strong>
                  <p>{recipe.houseNote.text}</p>
                </aside>
              )}
            </section>

            <section className="method" aria-labelledby="method-title">
              <p className="eyebrow">
                {details.methodEyebrow ?? 'How we make it'}
              </p>
              <h2 id="method-title">Method</h2>
              <ol>
                {recipe.steps.map((step, index) => (
                  <li key={step.title}>
                    <span>{index + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              {recipe.familyNote && (
                <aside className="favorite-note">
                  <span aria-hidden="true">
                    {details.familyNoteIcon ?? '♥'}
                  </span>
                  <p>
                    <strong>{recipe.familyNote.title}</strong>
                    {recipe.familyNote.text}
                  </p>
                </aside>
              )}
            </section>
          </div>

          {details.gallery && (
            <section
              className="process-gallery no-print"
              aria-labelledby="process-title"
            >
              <div className="section-heading">
                <div>
                  <p className="eyebrow">{details.gallery.eyebrow}</p>
                  <h2 id="process-title">{details.gallery.title}</h2>
                </div>
                <p>{details.gallery.intro}</p>
              </div>
              <div
                className={`gallery-grid${details.gallery.threeColumn ? ' gallery-grid-three' : ''}`}
              >
                {details.gallery.items.map((item) => (
                  <figure key={item.src}>
                    <img src={`${assetPath}${item.src}`} alt={item.alt} />
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <SiteFooter hideWhenPrinting />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredRecipe) }}
      />
    </div>
  );
}
