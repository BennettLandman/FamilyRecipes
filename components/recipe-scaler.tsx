'use client';

import { useState } from 'react';

type Ingredient = {
  amount?: number;
  range?: [number, number];
  unit?: string;
  pluralUnit?: string;
  item: string;
  approximate?: boolean;
};

type RecipeScalerProps = {
  baseYield: [number, number];
  yieldUnit: string;
  ingredients: Ingredient[];
};

const scaleOptions = [
  { value: 0.5, label: '½ batch' },
  { value: 1, label: 'Original' },
  { value: 1.5, label: '1½ batches' },
  { value: 2, label: 'Double' },
] as const;

function formatNumber(value: number) {
  const rounded = Math.round(value * 4) / 4;
  const whole = Math.floor(rounded);
  const remainder = rounded - whole;
  const fraction =
    remainder === 0.25
      ? '¼'
      : remainder === 0.5
        ? '½'
        : remainder === 0.75
          ? '¾'
          : '';

  if (!whole) return fraction || String(rounded);
  return `${whole}${fraction}`;
}

function formatAmount(ingredient: Ingredient, scale: number) {
  if (ingredient.range) {
    return `${formatNumber(ingredient.range[0] * scale)}–${formatNumber(ingredient.range[1] * scale)}`;
  }

  return ingredient.amount === undefined
    ? ''
    : formatNumber(ingredient.amount * scale);
}

function ingredientUnit(ingredient: Ingredient, scale: number) {
  if (!ingredient.unit) return '';
  const largestAmount = ingredient.range?.[1] ?? ingredient.amount ?? 0;
  return largestAmount * scale > 1
    ? (ingredient.pluralUnit ?? ingredient.unit)
    : ingredient.unit;
}

export function RecipeScaler({
  baseYield,
  yieldUnit,
  ingredients,
}: RecipeScalerProps) {
  const [scale, setScale] = useState(1);
  const scaledYield = `${formatNumber(baseYield[0] * scale)}–${formatNumber(baseYield[1] * scale)}`;

  return (
    <div className="recipe-scaler">
      <div className="scaler-heading">
        <p className="scaled-yield" aria-live="polite">
          <span>Makes about</span>
          <strong>
            {scaledYield} {yieldUnit}
          </strong>
        </p>
        <fieldset className="scale-controls no-print">
          <legend className="sr-only">Scale ingredient amounts</legend>
          {scaleOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className="scale-button"
              aria-pressed={scale === option.value}
              onClick={() => setScale(option.value)}
            >
              {option.label}
            </button>
          ))}
        </fieldset>
      </div>
      <ul aria-label={`Ingredients for about ${scaledYield} ${yieldUnit}`}>
        {ingredients.map((ingredient) => {
          const amount = formatAmount(ingredient, scale);
          const unit = ingredientUnit(ingredient, scale);

          return (
            <li key={ingredient.item}>
              {amount && (
                <strong>
                  {ingredient.approximate ? 'About ' : ''}
                  {amount}
                  {unit ? ` ${unit}` : ''}
                </strong>
              )}
              {amount ? ' ' : ''}
              {ingredient.item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
