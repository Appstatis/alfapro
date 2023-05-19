export const validatePhone = (phoneNumber: string): boolean => {
  const PhoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;

  if (!PhoneNumberRegex.test(phoneNumber)) {
    return false;
  }

  return true;
};
