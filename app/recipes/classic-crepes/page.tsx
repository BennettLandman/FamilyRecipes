/* eslint-disable next/no-img-element -- Recipe photographs and cat art are already optimized WebP assets. */

import type { Metadata } from 'next';
import { PrintButton } from '@/components/print-button';
import { RecipeScaler } from '@/components/recipe-scaler';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { formatIngredient } from '@/lib/recipe-format';
import { assetPath, classicCrepes as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';

const canonicalUrl =
  'https://bennettlandman.github.io/FamilyRecipes/recipes/classic-crepes';
const heroUrl =
  'https://bennettlandman.github.io/FamilyRecipes/photos/classic-crepes-finished.webp';

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

export default function ClassicCrepesPage() {
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
              <p className="eyebrow">{recipe.meals.join(' · ')}</p>
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
            <figure className="recipe-hero-photo crepes-hero-photo">
              <img
                src={`${assetPath}${recipe.heroImage}`}
                alt={recipe.heroAlt}
              />
              <figcaption>Rolled, folded, filled—and disappearing.</figcaption>
            </figure>
            <figure className="cat-art recipe-cat crepes-cat">
              <img src={`${assetPath}${recipe.catImage}`} alt={recipe.catAlt} />
              <figcaption>quality control</figcaption>
            </figure>
          </header>

          <div className="recipe-content">
            <section
              className="ingredients-card"
              aria-labelledby="ingredients-title"
            >
              <div className="paperclip" aria-hidden="true" />
              <p className="handwritten">A thin-batter morning</p>
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
              <p className="eyebrow">What Dad did</p>
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
                  <span aria-hidden="true">★</span>
                  <p>
                    <strong>{recipe.familyNote.title}</strong>{' '}
                    {recipe.familyNote.text}
                  </p>
                </aside>
              )}
            </section>
          </div>

          <section
            className="process-gallery no-print"
            aria-labelledby="process-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">Evidence from the stove</p>
                <h2 id="process-title">Thin, golden, gone</h2>
              </div>
              <p>Consistency matters more than measuring the final splash.</p>
            </div>
            <div className="gallery-grid gallery-grid-three">
              <figure>
                <img
                  src={`${assetPath}/photos/classic-crepes-batter.webp`}
                  alt="Smooth pale crepe batter with a whisk in a mixing bowl"
                />
                <figcaption>Whisk smooth, then judge the batter.</figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/classic-crepes-pan.webp`}
                  alt="A thin crepe cooking until golden in a skillet"
                />
                <figcaption>
                  Golden on one side means it is time to flip.
                </figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/classic-crepes-french-toast-bridge.webp`}
                  alt="A folded crepe beside a piece of French toast on a plate"
                />
                <figcaption>
                  The French-toast-to-crepe breakfast compromise.
                </figcaption>
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
