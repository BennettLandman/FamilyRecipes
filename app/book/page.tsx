/* eslint-disable next/no-img-element -- Recipe photographs and cat art are optimized WebP assets. */

import { Fragment } from 'react';
import type { Metadata } from 'next';
import { BookActions } from '@/components/book-actions';
import { formatIngredient } from '@/lib/recipe-format';
import {
  assetPath,
  recipes,
  recipeSections,
  type RecipeSection,
} from '@/lib/recipes';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The Recipe Book',
  description:
    'A print-ready edition of the complete Brentwood Bunch family recipe collection.',
};

const sectionDescriptions: Record<RecipeSection, string> = {
  Breakfast:
    'Slow mornings, quick school days, and the first good thing from the stove.',
  Lunch:
    'Midday favorites, leftovers worth planning for, and something good between bread.',
  Dinner: 'The recipes that bring everyone back through the kitchen.',
  Appetizers:
    'Small bites, first plates, and the things that disappear before dinner.',
  'Side dishes': 'The supporting cast that sometimes steals the whole meal.',
  Desserts: 'Something sweet, because there should usually be something sweet.',
};

const sectionCat = [
  '/cats/midcentury-kitchen-cat.webp',
  '/cats/watercolor-kitchen-cat.webp',
  '/cats/ink-kitchen-cat.webp',
  '/cats/collage-kitchen-cat.webp',
];

export default function RecipeBookPage() {
  const activeSections = recipeSections.filter((section) =>
    recipes.some((recipe) => recipe.section === section),
  );
  const emptySections = recipeSections.filter(
    (section) => !recipes.some((recipe) => recipe.section === section),
  );

  return (
    <div className="book-shell">
      <header className="book-toolbar no-print">
        <div className="wrap book-toolbar-inner">
          <a href={`${assetPath}/`} className="back-link">
            <span aria-hidden="true">←</span> Back to the site
          </a>
          <div>
            <strong>Your on-demand recipe book</strong>
            <span>
              Always assembled from the recipes currently on the site.
            </span>
          </div>
          <BookActions />
        </div>
      </header>

      <main className="book-pages">
        <section className="book-page book-cover">
          <div className="book-cover-rule" aria-hidden="true" />
          <p className="book-kicker">From our kitchen to the page</p>
          <h1>
            Brentwood Bunch
            <br />
            Recipes
          </h1>
          <p className="book-subtitle">The things we actually cook.</p>
          <img
            className="book-cover-cat"
            src={`${assetPath}/cats/collage-kitchen-cat.webp`}
            alt="A collage-style kitchen cat"
          />
          <footer>
            <span>A family cookbook</span>
            <span>Living edition</span>
          </footer>
        </section>

        <section className="book-page book-about">
          <p className="book-kicker">A note from the kitchen</p>
          <h2>About us</h2>
          <div className="book-about-copy">
            <p>
              This is the working cookbook of the Brentwood Bunch: the
              breakfasts, dinners, treats, and dependable favorites that are
              worth making again.
            </p>
            <p>
              The recipes began as real cooking notes—not studio instructions—so
              they keep the useful details: how soft the bread should feel, when
              to turn down the heat, and the small preferences that make a
              recipe ours.
            </p>
            <p>
              This book grows whenever the site grows. Open it again after a new
              recipe is added and the latest edition will already be waiting.
            </p>
          </div>
          <aside className="book-margin-note">
            A little stained. Still legible. Usually delicious.
          </aside>
          <p className="book-copyright">
            © 2026 Brentwood Bunch Recipes. All rights reserved.
          </p>
          <img
            className="book-page-cat"
            src={`${assetPath}/cats/watercolor-kitchen-cat.webp`}
            alt="A subtle watercolor kitchen cat"
          />
        </section>

        <section className="book-page book-toc">
          <p className="book-kicker">Find your place</p>
          <h2>Table of contents</h2>
          <ol>
            {activeSections.map((section) => {
              const sectionRecipes = recipes.filter(
                (recipe) => recipe.section === section,
              );
              return (
                <li key={section}>
                  <a
                    href={`#section-${section.toLowerCase().replaceAll(' ', '-')}`}
                  >
                    <span>{section}</span>
                    <em>
                      {sectionRecipes.length}{' '}
                      {sectionRecipes.length === 1 ? 'recipe' : 'recipes'}
                    </em>
                  </a>
                  <ul>
                    {sectionRecipes.map((recipe) => (
                      <li key={recipe.slug}>
                        {recipe.title} <span>by {recipe.author}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
          {emptySections.length > 0 && (
            <p className="book-coming-soon">
              <strong>Pages waiting to be filled:</strong>{' '}
              {emptySections.join(', ')}.
            </p>
          )}
          <img
            className="book-page-cat toc-cat"
            src={`${assetPath}/cats/ink-kitchen-cat.webp`}
            alt="A small ink-drawn kitchen cat"
          />
        </section>

        {activeSections.map((section, sectionIndex) => {
          const sectionRecipes = recipes.filter(
            (recipe) => recipe.section === section,
          );
          const sectionSlug = section.toLowerCase().replaceAll(' ', '-');
          return (
            <Fragment key={section}>
              <section
                className={`book-page book-section-cover book-section-${sectionSlug}`}
                id={`section-${sectionSlug}`}
              >
                <p className="book-kicker">Section {sectionIndex + 1}</p>
                <h2>{section}</h2>
                <p>{sectionDescriptions[section]}</p>
                <span className="section-count">
                  {sectionRecipes.length}{' '}
                  {sectionRecipes.length === 1 ? 'recipe' : 'recipes'}
                </span>
                <img
                  className="book-section-cat"
                  src={`${assetPath}${sectionCat[sectionIndex % sectionCat.length]}`}
                  alt={`A quiet cat keeping watch over the ${section.toLowerCase()} section`}
                />
              </section>

              {sectionRecipes.map((recipe) => (
                <section
                  className={`book-page book-recipe ${
                    recipe.ingredients.length + recipe.steps.length > 15
                      ? 'book-recipe-compact'
                      : ''
                  }`}
                  key={recipe.slug}
                  id={`recipe-${recipe.slug}`}
                >
                  <header className="book-recipe-header">
                    <div>
                      <p className="book-kicker">
                        {recipe.section} · {recipe.badges.join(' · ')}
                      </p>
                      <h2>{recipe.title}</h2>
                      <p>{recipe.description}</p>
                      <dl>
                        <div>
                          <dt>By</dt>
                          <dd>{recipe.author}</dd>
                        </div>
                        <div>
                          <dt>Makes</dt>
                          <dd>{recipe.yield.replace(/^About /, '')}</dd>
                        </div>
                        <div>
                          <dt>Updated</dt>
                          <dd>{recipe.updated}</dd>
                        </div>
                      </dl>
                    </div>
                    <img
                      src={`${assetPath}${recipe.heroImage}`}
                      alt={recipe.heroAlt}
                    />
                  </header>
                  <div className="book-recipe-body">
                    <section>
                      <h3>Ingredients</h3>
                      <ul>
                        {recipe.ingredients.map((ingredient) => (
                          <li key={ingredient.item}>
                            {formatIngredient(ingredient)}
                          </li>
                        ))}
                      </ul>
                      {recipe.houseNote && (
                        <aside>
                          <strong>{recipe.houseNote.title}</strong>
                          <p>{recipe.houseNote.text}</p>
                        </aside>
                      )}
                    </section>
                    <section>
                      <h3>Method</h3>
                      <ol>
                        {recipe.steps.map((step, index) => (
                          <li key={step.title}>
                            <span>{index + 1}</span>
                            <div>
                              <strong>{step.title}</strong>
                              <p>{step.text}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                      {recipe.familyNote && (
                        <aside className="book-family-note">
                          <strong>{recipe.familyNote.title}</strong>
                          <p>{recipe.familyNote.text}</p>
                        </aside>
                      )}
                    </section>
                  </div>
                  <img
                    className="book-recipe-cat"
                    src={`${assetPath}${recipe.catImage}`}
                    alt={recipe.catAlt}
                  />
                </section>
              ))}
            </Fragment>
          );
        })}
      </main>
    </div>
  );
}
