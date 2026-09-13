import type { RecipeIngredient } from '@/lib/recipes';

export function formatRecipeNumber(value: number) {
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

export function formatIngredientAmount(
  ingredient: RecipeIngredient,
  scale = 1,
) {
  if (ingredient.range) {
    return `${formatRecipeNumber(ingredient.range[0] * scale)}–${formatRecipeNumber(ingredient.range[1] * scale)}`;
  }

  return ingredient.amount === undefined
    ? ''
    : formatRecipeNumber(ingredient.amount * scale);
}

export function ingredientUnit(ingredient: RecipeIngredient, scale = 1) {
  if (!ingredient.unit) return '';
  const largestAmount = ingredient.range?.[1] ?? ingredient.amount ?? 0;
  return largestAmount * scale > 1
    ? (ingredient.pluralUnit ?? ingredient.unit)
    : ingredient.unit;
}

export function formatIngredient(ingredient: RecipeIngredient, scale = 1) {
  const amount = formatIngredientAmount(ingredient, scale);
  const unit = ingredientUnit(ingredient, scale);
  if (!amount) return ingredient.item;
  return `${ingredient.approximate ? 'About ' : ''}${amount}${unit ? ` ${unit}` : ''} ${ingredient.item}`;
}
