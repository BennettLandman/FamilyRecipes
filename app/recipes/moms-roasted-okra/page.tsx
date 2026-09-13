/* eslint-disable next/no-img-element -- Recipe photographs and cat art are already optimized WebP assets. */

import type { Metadata } from 'next';
import { PrintButton } from '@/components/print-button';
import { RecipeScaler } from '@/components/recipe-scaler';
import { SiteHeader } from '@/components/site-header';
import { formatIngredient } from '@/lib/recipe-format';
import { assetPath, momsRoastedOkra as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';

const canonicalUrl =
  'https://bennettlandman.github.io/FamilyRecipes/recipes/moms-roasted-okra';
const heroUrl =
  'https://bennettlandman.github.io/FamilyRecipes/photos/moms-roasted-okra-finished.webp';

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

export default function MomsRoastedOkraPage() {
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
            <figure className="recipe-hero-photo okra-hero-photo">
              <img
                src={`${assetPath}${recipe.heroImage}`}
                alt={recipe.heroAlt}
              />
              <figcaption>
                Soft, peppery, and straight from the garden.
              </figcaption>
            </figure>
            <figure className="cat-art recipe-cat okra-cat">
              <img src={`${assetPath}${recipe.catImage}`} alt={recipe.catAlt} />
              <figcaption>garden inspector</figcaption>
            </figure>
          </header>

          <div className="recipe-content">
            <section
              className="ingredients-card"
              aria-labelledby="ingredients-title"
            >
              <div className="paperclip" aria-hidden="true" />
              <p className="handwritten">Pick, wash, season, roast</p>
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
                <p className="eyebrow">Garden to oven</p>
                <h2 id="process-title">A very short trip</h2>
              </div>
              <p>Keep the okra whole and let softness—not the clock—decide.</p>
            </div>
            <div className="gallery-grid gallery-grid-three">
              <figure>
                <img
                  src={`${assetPath}/photos/moms-roasted-okra-flower.webp`}
                  alt="An okra pod growing beside a pale yellow okra flower"
                />
                <figcaption>
                  First, find the okra hiding by the flowers.
                </figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/moms-roasted-okra-harvest.webp`}
                  alt="Freshly picked okra and peppers in a white basket"
                />
                <figcaption>The garden haul, dirt and all.</figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/moms-roasted-okra-separated.webp`}
                  alt="Fresh wet okra and spicy peppers separated by a folded parchment wall"
                />
                <figcaption>
                  A tiny wall keeps the spicy peppers honest.
                </figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/moms-roasted-okra-seasoned.webp`}
                  alt="Okra and peppers on parchment with Lawry’s Seasoned Salt and black pepper"
                />
                <figcaption>
                  Wet vegetables, olive oil, Lawry’s, pepper.
                </figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/moms-roasted-okra-peppers.webp`}
                  alt="Roasted spicy peppers in a clear glass serving bowl"
                />
                <figcaption>The spicy side of the parchment wall.</figcaption>
              </figure>
            </div>
          </section>
        </article>
      </main>
      <footer className="site-footer no-print">
        <div className="wrap">
          <p>Made around one well-used kitchen table.</p>
          <span>Brentwood Bunch Recipes · Since 2026</span>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredRecipe) }}
      />
    </div>
  );
}
