export class PhoneNumberValidator {
  static validate(phoneNumber: string): boolean {
    const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, "");

    const PhoneNumberRegex = /^\d{10}$/;

    if (!PhoneNumberRegex.test(sanitizedPhoneNumber)) {
      return false;
    }

    return true;
  }
}
