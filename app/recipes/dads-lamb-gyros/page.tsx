/* eslint-disable next/no-img-element -- Recipe photographs and cat art are already optimized WebP assets. */

import type { Metadata } from 'next';
import { PrintButton } from '@/components/print-button';
import { RecipeScaler } from '@/components/recipe-scaler';
import { SiteHeader } from '@/components/site-header';
import { formatIngredient } from '@/lib/recipe-format';
import { assetPath, dadsLambGyros as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';

const canonicalUrl =
  'https://bennettlandman.github.io/FamilyRecipes/recipes/dads-lamb-gyros';
const heroUrl =
  'https://bennettlandman.github.io/FamilyRecipes/photos/dads-lamb-gyros-chopped.webp';

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

export default function DadsLambGyrosPage() {
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
            <figure className="recipe-hero-photo lamb-gyros-hero-photo">
              <img
                src={`${assetPath}${recipe.heroImage}`}
                alt={recipe.heroAlt}
              />
              <figcaption>
                Medium rare inside, fiercely seared outside.
              </figcaption>
            </figure>
            <figure className="cat-art recipe-cat lamb-gyros-cat">
              <img src={`${assetPath}${recipe.catImage}`} alt={recipe.catAlt} />
              <figcaption>long-tongs department</figcaption>
            </figure>
          </header>

          <div className="recipe-content">
            <section
              className="ingredients-card"
              aria-labelledby="ingredients-title"
            >
              <div className="paperclip" aria-hidden="true" />
              <p className="handwritten">Herbs in the bag, fire at the end</p>
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
                  <span aria-hidden="true">↯</span>
                  <p>
                    <strong>{recipe.familyNote.title}</strong>
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
                <p className="eyebrow">Low and slow, then very fast</p>
                <h2 id="process-title">From garden herbs to gyro night</h2>
              </div>
              <p>At 800 degrees, “keep an eye on it” means every second.</p>
            </div>
            <div className="gallery-grid gallery-grid-three">
              <figure>
                <img
                  src={`${assetPath}/photos/dads-lamb-gyros-herbs.webp`}
                  alt="Boneless lamb pieces covered with sage, chives, garlic chives, and cutting celery"
                />
                <figcaption>Salt, pepper, and very large handfuls.</figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/dads-lamb-gyros-sous-vide.webp`}
                  alt="Herb-packed lamb sealed in bags in a sous-vide water bath"
                />
                <figcaption>
                  132.5°F, with the herbs packed right in.
                </figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/dads-lamb-gyros-grill.webp`}
                  alt="Pieces of lamb searing on a very hot grill as the fat flames up"
                />
                <figcaption>
                  Long tongs. Quick sear. Respect the flames.
                </figcaption>
              </figure>
              <figure>
                <img
                  src={`${assetPath}/photos/dads-lamb-gyros-toppings.webp`}
                  alt="Bowls of tzatziki, cucumbers, tomatoes, grilled onions, and crumbled feta"
                />
                <figcaption>
                  The build-your-own-gyro supporting cast.
                </figcaption>
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
