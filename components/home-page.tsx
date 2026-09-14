'use client';

/* eslint-disable next/no-img-element -- Photographs and generated cat art are already optimized WebP assets. */

import { Search, UtensilsCrossed } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { assetPath, recipes, recipeSections } from '@/lib/recipes';

type Filter =
  | { kind: 'all' }
  | { kind: 'section' | 'ingredient'; value: string };

const commonIngredients = [
  'Eggs',
  'Flour',
  'Bread',
  'Milk',
  'Cinnamon',
  'Goat cheese',
  'Honey',
  'Figs',
  'Okra',
];

export function HomePage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>({ kind: 'all' });
  const [featuredRecipe, setFeaturedRecipe] = useState(recipes[0]);

  useEffect(() => {
    if (recipes.length < 2) return;

    const previousIndex = Number(
      window.sessionStorage.getItem('featured-recipe-index'),
    );
    const choices = recipes
      .map((recipe, index) => ({ recipe, index }))
      .filter(({ index }) => index !== previousIndex);
    const next = choices[Math.floor(Math.random() * choices.length)];

    window.sessionStorage.setItem('featured-recipe-index', String(next.index));
    const update = window.setTimeout(() => setFeaturedRecipe(next.recipe), 0);

    return () => window.clearTimeout(update);
  }, []);

  const visibleRecipes = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return recipes.filter((recipe) => {
      const matchesQuery =
        !needle ||
        [
          recipe.title,
          recipe.description,
          recipe.author,
          recipe.section,
          ...recipe.meals,
          ...recipe.commonIngredients,
          ...recipe.badges,
        ]
          .join(' ')
          .toLowerCase()
          .includes(needle);
      const matchesFilter =
        filter.kind === 'all' ||
        (filter.kind === 'section'
          ? recipe.section === filter.value
          : recipe.commonIngredients.includes(filter.value));
      return matchesQuery && matchesFilter;
    });
  }, [filter, query]);

  const chooseFilter = (kind: 'section' | 'ingredient', value: string) => {
    setFilter((current) =>
      current.kind === kind && current.value === value
        ? { kind: 'all' }
        : { kind, value },
    );
    document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero wrap" aria-labelledby="site-title">
          <div className="hero-copy">
            <p className="eyebrow">From the center of the house</p>
            <h1 id="site-title">Brentwood Bunch Recipes</h1>
            <p className="hero-lede">
              The things we actually cook, scribbled down before anyone forgets.
              A growing family cookbook with buttery fingerprints included.
            </p>
            <label className="search-box" htmlFor="recipe-search">
              <span className="sr-only">Search all recipes</span>
              <Search aria-hidden="true" />
              <input
                id="recipe-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search recipes or ingredients…"
              />
              <span className="search-note">
                Try a dish, cook, or ingredient
              </span>
            </label>
          </div>

          <a
            className="hero-photo"
            href={`${assetPath}/recipes/${featuredRecipe.slug}`}
          >
            <img
              src={`${assetPath}${featuredRecipe.heroImage}`}
              alt={featuredRecipe.heroAlt}
            />
            <span className="photo-tape" aria-hidden="true" />
            <span className="hero-photo-caption">
              <strong>Today’s page</strong>
              {featuredRecipe.title}
            </span>
          </a>
          <figure className="cat-art cat-home">
            <img
              src={`${assetPath}/cats/ink-kitchen-cat.webp`}
              alt="A playful ink-drawn cat stretching in the kitchen"
            />
            <figcaption className="sr-only">
              A quiet kitchen companion waiting for crumbs.
            </figcaption>
          </figure>
        </section>

        <section className="browse-band" aria-labelledby="browse-title">
          <div className="wrap browse-grid">
            <div>
              <p className="eyebrow">Open the cupboard</p>
              <h2 id="browse-title">Browse the family way</h2>
              <p>
                Start with what you have, or with the meal everyone is asking
                about.
              </p>
            </div>
            <div className="browse-group">
              <h3>By meal or course</h3>
              <div className="filter-row">
                {recipeSections.map((section) => (
                  <button
                    className={
                      filter.kind === 'section' && filter.value === section
                        ? 'active'
                        : ''
                    }
                    key={section}
                    type="button"
                    aria-pressed={
                      filter.kind === 'section' && filter.value === section
                    }
                    onClick={() => chooseFilter('section', section)}
                  >
                    <span>{section}</span>
                    <small>
                      {
                        recipes.filter((recipe) => recipe.section === section)
                          .length
                      }
                    </small>
                  </button>
                ))}
              </div>
            </div>
            <div className="browse-group">
              <h3>By common ingredient</h3>
              <div className="ingredient-row">
                {commonIngredients.map((ingredient) => (
                  <button
                    className={
                      filter.kind === 'ingredient' &&
                      filter.value === ingredient
                        ? 'active'
                        : ''
                    }
                    key={ingredient}
                    type="button"
                    aria-pressed={
                      filter.kind === 'ingredient' &&
                      filter.value === ingredient
                    }
                    onClick={() => chooseFilter('ingredient', ingredient)}
                  >
                    {ingredient}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="recipes-section wrap"
          id="recipes"
          aria-labelledby="recipes-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">The recipe box</p>
              <h2 id="recipes-title">
                {filter.kind === 'all' ? 'What we’re cooking' : filter.value}
              </h2>
            </div>
            {(filter.kind !== 'all' || query) && (
              <button
                type="button"
                className="clear-button"
                onClick={() => {
                  setFilter({ kind: 'all' });
                  setQuery('');
                }}
              >
                Clear search
              </button>
            )}
          </div>

          {visibleRecipes.length ? (
            <div className="recipe-grid">
              {visibleRecipes.map((recipe) => (
                <article className="recipe-card" key={recipe.slug}>
                  <a href={`${assetPath}/recipes/${recipe.slug}`}>
                    <div className="recipe-card-photo">
                      <img
                        src={`${assetPath}${recipe.heroImage}`}
                        alt={recipe.heroAlt}
                      />
                      <span className="badge">{recipe.badges[0]}</span>
                    </div>
                    <div className="recipe-card-body">
                      <div className="recipe-card-meta">
                        <span>{recipe.meals.join(' · ')}</span>
                        <span>By {recipe.author}</span>
                      </div>
                      <h3>{recipe.title}</h3>
                      <p>{recipe.description}</p>
                      <span className="read-recipe">
                        Open recipe <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <UtensilsCrossed aria-hidden="true" />
              <h3>Nothing on that stained page yet.</h3>
              <p>
                Try another ingredient or clear the search. This cookbook is
                just getting started.
              </p>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
