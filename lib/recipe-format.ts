import type { RecipeIngredient } from '@/lib/recipes';

const eighthFractions = ['', '⅛', '¼', '⅜', '½', '⅝', '¾', '⅞'];

export function formatRecipeNumber(value: number) {
  const precision = Number.isInteger(value * 16) ? 16 : 4;
  const rounded = Math.round(value * precision) / precision;
  const whole = Math.floor(rounded);
  const sixteenths = (rounded - whole) * 16;
  if (!sixteenths) return String(whole);

  const fraction = eighthFractions[sixteenths / 2];
  const prefix = whole ? String(whole) : '';
  if (fraction) return `${prefix}${fraction}`;
  return `${whole ? `${prefix} ` : ''}${sixteenths}/16`;
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
