'use client';

import { useState } from 'react';
import {
  formatIngredientAmount,
  formatRecipeNumber,
  ingredientUnit,
} from '@/lib/recipe-format';
import type { RecipeIngredient } from '@/lib/recipes';

type RecipeScalerProps = {
  baseYield: [number, number];
  yieldUnit: string;
  ingredients: RecipeIngredient[];
};

const scaleOptions = [
  { value: 0.5, label: '½ batch' },
  { value: 1, label: 'Original' },
  { value: 1.5, label: '1½ batches' },
  { value: 2, label: 'Double' },
] as const;

export function RecipeScaler({
  baseYield,
  yieldUnit,
  ingredients,
}: RecipeScalerProps) {
  const [scale, setScale] = useState(1);
  const scaledYield = `${formatRecipeNumber(baseYield[0] * scale)}–${formatRecipeNumber(baseYield[1] * scale)}`;

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
          const amount = formatIngredientAmount(ingredient, scale);
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
