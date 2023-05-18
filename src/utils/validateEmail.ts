export const validateEmail = (email: string): boolean => {
  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return pattern.test(email);
};
