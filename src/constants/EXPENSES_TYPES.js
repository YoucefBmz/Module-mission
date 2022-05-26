export const KEYS = ["WITHOUT_EXPENSES", "WITH_EXPENSES"];
export const LABLES = ["Without expenses", "With expenses"];
export const COLORS = ["red", "green"];
export const KEYS_LABLES = {};

KEYS.forEach((key, index) => {
  KEYS_LABLES[key] = LABLES[index];
});
