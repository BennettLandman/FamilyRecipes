/* eslint-disable next/no-img-element -- Recipe photographs and cat art are already optimized WebP assets. */

import type { Metadata } from 'next';
import { PrintButton } from '@/components/print-button';
import { RecipeScaler } from '@/components/recipe-scaler';
import { SiteHeader } from '@/components/site-header';
import { assetPath, dadsFrenchToast as recipe } from '@/lib/recipes';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: recipe.title,
  description: recipe.description,
  openGraph: {
    title: recipe.title,
    description: recipe.description,
    type: 'article',
    images: [{
      url: 'https://bennettlandman.github.io/FamilyRecipes/photos/dads-french-toast-finished.webp',
      alt: recipe.heroAlt,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: recipe.title,
    description: recipe.description,
    images: ['https://bennettlandman.github.io/FamilyRecipes/photos/dads-french-toast-finished.webp'],
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
  image: ['https://bennettlandman.github.io/FamilyRecipes/photos/dads-french-toast-finished.webp'],
  recipeCategory: 'Breakfast',
  recipeYield: recipe.yield,
  recipeIngredient: [
    '3 eggs',
    '1½ cups milk',
    '2 tablespoons cinnamon sugar',
    'About 1 tablespoon vanilla extract',
    '4–5 pieces of bread, bagel halves, or other mildly stale bread',
    'Butter, for the pan',
  ],
  recipeInstructions: [
    'Whisk the eggs, milk, cinnamon sugar, and vanilla together gently.',
    'Soak the bread for at least 3 to 4 minutes, until soft but still holding together.',
    'Melt a little butter in a pan over medium to medium-low heat.',
    'Cook slowly, turning once, until the outside caramelizes and the custardy center cooks through.',
  ].map((text) => ({ '@type': 'HowToStep', text })),
};

export default function DadsFrenchToastPage() {
  return (
    <div className="site-shell recipe-page">
      <SiteHeader />
      <main className="wrap recipe-wrap">
        <a className="back-link no-print" href={`${assetPath}/#recipes`}><span aria-hidden="true">←</span> Back to the recipe box</a>
        <article>
          <header className="recipe-hero">
            <div className="recipe-hero-copy">
              <p className="eyebrow">{recipe.meals.join(' · ')}</p>
              <div className="recipe-badges">{recipe.badges.map((badge) => <span key={badge}>{badge}</span>)}</div>
              <h1>{recipe.title}</h1>
              <p className="recipe-deck">{recipe.description}</p>
              <dl className="recipe-dates">
                <div><dt>By</dt><dd>{recipe.author}</dd></div>
                <div><dt>Added</dt><dd>{recipe.added}</dd></div>
                <div><dt>Updated</dt><dd>{recipe.updated}</dd></div>
              </dl>
              <PrintButton />
            </div>
            <figure className="recipe-hero-photo">
              <img src={`${assetPath}${recipe.heroImage}`} alt={recipe.heroAlt} />
              <figcaption>Finished, dusted, and ready before anyone gets impatient.</figcaption>
            </figure>
            <figure className="cat-art recipe-cat">
              <img src={`${assetPath}/cats/midcentury-kitchen-cat.webp`} alt="A watchful mid-century print cat beside a tomato" />
              <figcaption>breakfast supervisor</figcaption>
            </figure>
          </header>

          <div className="recipe-content">
            <section className="ingredients-card" aria-labelledby="ingredients-title">
              <div className="paperclip" aria-hidden="true" />
              <p className="handwritten">Pull these out first</p>
              <h2 id="ingredients-title">Ingredients</h2>
              <RecipeScaler
                baseYield={[4, 5]}
                yieldUnit="pieces"
                ingredients={[
                  { amount: 3, item: 'eggs' },
                  { amount: 1.5, unit: 'cup', pluralUnit: 'cups', item: 'milk' },
                  { amount: 2, unit: 'tablespoon', pluralUnit: 'tablespoons', item: 'cinnamon sugar' },
                  { amount: 1, unit: 'tablespoon', pluralUnit: 'tablespoons', item: 'vanilla extract', approximate: true },
                  { range: [4, 5], unit: 'piece', pluralUnit: 'pieces', item: 'of bread, bagel halves, or other mildly stale bread' },
                  { item: 'Butter, for the pan' },
                ]}
              />
              <aside className="house-note">
                <strong>The house cinnamon sugar</strong>
                <p>Mix light brown sugar or white sugar with a generous helping of cinnamon, shake it together, and keep it in a jar for next time.</p>
              </aside>
            </section>

            <section className="method" aria-labelledby="method-title">
              <p className="eyebrow">What Dad did</p>
              <h2 id="method-title">Method</h2>
              <ol>
                <li><span>1</span><div><h3>Make the custard</h3><p>Gently whisk together the eggs, milk, cinnamon sugar, and vanilla.</p></div></li>
                <li><span>2</span><div><h3>Give the bread time</h3><p>Soak the bread or bagels for at least 3 to 4 minutes. It should become soft without completely falling apart—you’re making a custard inside the bread.</p></div></li>
                <li><span>3</span><div><h3>Warm the pan</h3><p>Set a pan over medium to medium-low heat and add a little butter for flavor around the edges of the toast.</p></div></li>
                <li><span>4</span><div><h3>Cook it slowly</h3><p>Cook, turning once, with enough heat to caramelize the outside but slowly enough to cook the custardy center all the way through.</p></div></li>
              </ol>
              <aside className="favorite-note"><span aria-hidden="true">★</span><p><strong>Family table note</strong> Orinda only likes the end pieces of bread.</p></aside>
            </section>
          </div>

          <section className="process-gallery no-print" aria-labelledby="process-title">
            <div className="section-heading">
              <div><p className="eyebrow">A little evidence</p><h2 id="process-title">From the kitchen</h2></div>
              <p>Not styled. Not spotless. Definitely breakfast.</p>
            </div>
            <div className="gallery-grid">
              <figure>
                <img src={`${assetPath}/photos/dads-french-toast-cinnamon-sugar.webp`} alt="A small glass bowl of homemade cinnamon sugar on the kitchen counter" />
                <figcaption>The jar mixture: sugar, plenty of cinnamon, shake.</figcaption>
              </figure>
              <figure>
                <img src={`${assetPath}/photos/dads-french-toast-soaking.webp`} alt="Bread soaking in French toast custard in a stainless steel mixing bowl" />
                <figcaption>Soak until custardy, but rescue it before collapse.</figcaption>
              </figure>
            </div>
          </section>
        </article>
      </main>
      <footer className="site-footer no-print"><div className="wrap"><p>Made around one well-used kitchen table.</p><span>Brentwood Bunch Recipes · Since 2026</span></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredRecipe) }} />
    </div>
  );
}
