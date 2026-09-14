/* eslint-disable next/no-img-element -- Recipe photographs and cat art are already optimized WebP assets. */

import type { Metadata } from 'next';
import { PrintButton } from '@/components/print-button';
import { RecipeScaler } from '@/components/recipe-scaler';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { formatIngredient } from '@/lib/recipe-format';
import { assetPath, momsToasties as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';

const canonicalUrl =
  'https://bennettlandman.github.io/FamilyRecipes/recipes/moms-toasties';
const heroUrl =
  'https://bennettlandman.github.io/FamilyRecipes/photos/moms-toasties-finished.webp';

export const metadata: Metadata = {
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

const structuredRecipe = {
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: recipe.title,
  author: { '@type': 'Person', name: recipe.author },
  datePublished: '2026-09-13',
  dateModified: '2026-09-13',
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

export default function MomsToastiesPage() {
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
            <figure className="recipe-hero-photo toasties-hero-photo">
              <img
                src={`${assetPath}${recipe.heroImage}`}
                alt={recipe.heroAlt}
              />
              <figcaption>
                Some pale, some dark, all ready for spread.
              </figcaption>
            </figure>
            <figure className="cat-art recipe-cat toasties-cat">
              <img src={`${assetPath}${recipe.catImage}`} alt={recipe.catAlt} />
              <figcaption>toast inspector</figcaption>
            </figure>
          </header>

          <div className="recipe-content">
            <section
              className="ingredients-card"
              aria-labelledby="ingredients-title"
            >
              <div className="paperclip" aria-hidden="true" />
              <p className="handwritten">The shortest shopping list</p>
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
              <p className="eyebrow">What Mom did</p>
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
            </section>
          </div>

          <section
            className="process-gallery no-print"
            aria-labelledby="process-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">Before the spread</p>
                <h2 id="process-title">Slice, line up, watch closely</h2>
              </div>
              <p>Low broil still moves faster than family conversation.</p>
            </div>
            <div className="gallery-grid">
              <figure>
                <img
                  src={`${assetPath}/photos/moms-toasties-slicing.webp`}
                  alt="A baguette being sliced diagonally on a green cutting board"
                />
                <figcaption>
                  A third to a half inch, on the diagonal.
                </figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/moms-toasties-before-broiling.webp`}
                  alt="Thin baguette slices arranged in one layer on a foil-lined broiler-safe pan"
                />
                <figcaption>One layer, ready for low broil.</figcaption>
              </figure>
            </div>
          </section>
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
