/* eslint-disable next/no-img-element -- The illustrated cat crew is a project-local WebP asset. */

import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { assetPath } from '@/lib/recipes';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About this cookbook',
  description:
    'How Brentwood Bunch Recipes turns real family cooking notes into a searchable website and an always-current printable cookbook.',
};

const recipeSteps = [
  {
    number: '01',
    title: 'Start with the real recipe',
    text: 'A family cook dictates the method and sends food-only photographs. We keep the useful quirks, corrections, shortcuts, and opinions that make it their recipe.',
  },
  {
    number: '02',
    title: 'Sort out the details',
    text: 'Before publishing, we settle name spellings, unclear transcription, yield, cookbook section, photo privacy, and which images tell the story best.',
  },
  {
    number: '03',
    title: 'Add one shared recipe record',
    text: 'Ingredients, method, dates, author, photographs, and family notes go into one structured source. Search, filters, scaling, recipe pages, and the book all read from it.',
  },
  {
    number: '04',
    title: 'Give it a little personality',
    text: 'Each page gets its own captions, family humor, and a distinct cat observer. The cat may supervise. The cat may not be qualified.',
  },
  {
    number: '05',
    title: 'Check everything, then publish',
    text: 'The site is rebuilt and checked so the new recipe appears in browsing, search, its own page, and the printable book—with no separate book editing required.',
  },
];

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="about-hero wrap">
          <div className="about-hero-copy">
            <a className="back-link" href={`${assetPath}/`}>
              <span aria-hidden="true">←</span> Back to the recipes
            </a>
            <p className="eyebrow">Behind the mixing bowl</p>
            <h1>How this cookbook is made</h1>
            <p className="about-lede">
              Brentwood Bunch Recipes is part family archive, part working
              kitchen notebook, and part highly organized excuse to draw more
              cats. It keeps the recipes we actually cook in one warm,
              searchable place—and turns the same collection into a printable
              book whenever we want one.
            </p>
          </div>
          <figure className="about-crew-art">
            <span className="photo-tape" aria-hidden="true" />
            <img
              src={`${assetPath}/cats/about-kitchen-crew.webp`}
              alt="Seven illustrated cats cooking, photographing food, checking a recipe card, and typing at a laptop together"
            />
            <figcaption>
              The publishing department is requesting more counter space.
            </figcaption>
          </figure>
        </section>

        <section className="about-foundation">
          <div className="wrap about-foundation-grid">
            <div>
              <p className="eyebrow">One recipe, many places</p>
              <h2>Built to stay in sync</h2>
            </div>
            <div className="about-foundation-copy">
              <p>
                The site is a static React cookbook, built with Vinext and
                published on GitHub Pages. Its visual style comes from custom
                CSS, family food photography, and a rotating cast of kitchen
                cats.
              </p>
              <p>
                The important trick is less glamorous: every recipe has one
                structured record. The homepage, ingredient search, meal and
                section filters, serving scaler, individual recipe pages, and
                PDF-ready book all use that same record. A correction made once
                travels everywhere.
              </p>
            </div>
          </div>
        </section>

        <section className="about-process wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">From voice note to family favorite</p>
              <h2>How a recipe joins the book</h2>
            </div>
            <p>Five steps. Several cats. Surprisingly little paperwork.</p>
          </div>
          <ol className="about-process-list">
            {recipeSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="about-promise">
          <div className="wrap about-promise-inner">
            <p className="eyebrow">House rules</p>
            <h2>The food stays the star.</h2>
            <p>
              Public pages use first names only. Recipe photographs show food,
              not people or locations, and their metadata is removed before
              publication. The writing keeps each cook’s voice while repairing
              obvious dictation tangles. Every page gets a cat, but never at the
              expense of a readable ingredient list.
            </p>
            <a className="about-book-link" href={`${assetPath}/book`}>
              Open the living recipe book →
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
