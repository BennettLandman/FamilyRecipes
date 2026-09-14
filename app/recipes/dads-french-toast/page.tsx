/* eslint-disable next/no-img-element -- Recipe photographs and cat art are already optimized WebP assets. */

import type { Metadata } from 'next';
import { PrintButton } from '@/components/print-button';
import { RecipeScaler } from '@/components/recipe-scaler';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { formatIngredient } from '@/lib/recipe-format';
import { assetPath, dadsFrenchToast as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: recipe.title,
  description: recipe.description,
  openGraph: {
    title: recipe.title,
    description: recipe.description,
    type: 'article',
    images: [
      {
        url: 'https://bennettlandman.github.io/FamilyRecipes/photos/dads-french-toast-finished.webp',
        alt: recipe.heroAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: recipe.title,
    description: recipe.description,
    images: [
      'https://bennettlandman.github.io/FamilyRecipes/photos/dads-french-toast-finished.webp',
    ],
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
  image: [
    'https://bennettlandman.github.io/FamilyRecipes/photos/dads-french-toast-finished.webp',
  ],
  recipeCategory: 'Breakfast',
  recipeYield: recipe.yield,
  recipeIngredient: recipe.ingredients.map((ingredient) =>
    formatIngredient(ingredient),
  ),
  recipeInstructions: recipe.steps.map((step) => ({
    '@type': 'HowToStep',
    text: step.text,
  })),
};

export default function DadsFrenchToastPage() {
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
            <figure className="recipe-hero-photo">
              <img
                src={`${assetPath}${recipe.heroImage}`}
                alt={recipe.heroAlt}
              />
              <figcaption>
                Finished, dusted, and ready before anyone gets impatient.
              </figcaption>
            </figure>
            <figure className="cat-art recipe-cat">
              <img src={`${assetPath}${recipe.catImage}`} alt={recipe.catAlt} />
              <figcaption>breakfast supervisor</figcaption>
            </figure>
          </header>

          <div className="recipe-content">
            <section
              className="ingredients-card"
              aria-labelledby="ingredients-title"
            >
              <div className="paperclip" aria-hidden="true" />
              <p className="handwritten">Pull these out first</p>
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
                <p className="eyebrow">A little evidence</p>
                <h2 id="process-title">From the kitchen</h2>
              </div>
              <p>Not styled. Not spotless. Definitely breakfast.</p>
            </div>
            <div className="gallery-grid">
              <figure>
                <img
                  src={`${assetPath}/photos/dads-french-toast-cinnamon-sugar.webp`}
                  alt="A small glass bowl of homemade cinnamon sugar on the kitchen counter"
                />
                <figcaption>
                  The jar mixture: sugar, plenty of cinnamon, shake.
                </figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/dads-french-toast-soaking.webp`}
                  alt="Bread soaking in French toast custard in a stainless steel mixing bowl"
                />
                <figcaption>
                  Soak until custardy, but rescue it before collapse.
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
