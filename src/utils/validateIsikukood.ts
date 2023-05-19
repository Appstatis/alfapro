// todo: fix this

export function validateIsikukood(isikukood: string): boolean {
  if (!/^\d{11}$/.test(isikukood)) {
    return false;
  }

  const isikukoodDigits = isikukood.split("").map(Number);

  const firstDigit = isikukoodDigits[0];
  if (firstDigit < 1 || firstDigit > 6) {
    return false;
  }

  const yearDigits = isikukoodDigits.slice(1, 3);
  const yearPrefix = firstDigit < 3 ? 18 : firstDigit < 5 ? 19 : 20;
  const year = yearPrefix * 100 + yearDigits[0] * 10 + yearDigits[1];
  const currentYear = new Date().getFullYear();
  if (year > currentYear || year < currentYear - 150) {
    return false;
  }

  const monthDigits = isikukoodDigits.slice(3, 5);
  const month = monthDigits[0] * 10 + monthDigits[1];
  if (month < 1 || month > 12) {
    return false;
  }

  const dayDigits = isikukoodDigits.slice(5, 7);
  const day = dayDigits[0] * 10 + dayDigits[1];
  if (day < 1 || day > 31) {
    return false;
  }

  const checksumDigit = isikukoodDigits[10];
  const checksum =
    isikukoodDigits.reduce(
      (sum, digit, index) => sum + digit * ((index % 9) + 1),
      0
    ) % 11;
  if (checksum !== checksumDigit && !(checksum === 10 && checksumDigit === 0)) {
    return false;
  }

  return true;
}
