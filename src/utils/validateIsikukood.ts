export function validateIsikukood(isikukood: string): boolean {
  isikukood = isikukood.replace(/\s/g, "");

  if (!/^\d{11}$/.test(isikukood)) {
    return false;
  }

  const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
  const controlDigit =
    isikukood
      .split("")
      .map(Number)
      .slice(0, 10)
      .reduce((sum, digit, index) => sum + digit * weights[index], 0) % 11;

  const lastDigit = Number(isikukood[10]);
  if (controlDigit === 10) {
    return lastDigit === 0;
  } else {
    return lastDigit === controlDigit;
  }
}
