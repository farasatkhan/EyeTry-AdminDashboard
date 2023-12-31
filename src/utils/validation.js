export const validatePassword = (password) => {
  const lengthRegex = /.{8,}/;
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const numberSymbolWhitespaceRegex =
    /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]/;

  const isLengthValid = lengthRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasUppercase = uppercaseRegex.test(password);
  const hasNumberSymbolWhitespace = numberSymbolWhitespaceRegex.test(password);

  return (
    isLengthValid && hasLowercase && hasUppercase && hasNumberSymbolWhitespace
  );
};


export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isInteger = (value) => {
  return Number.isInteger(value);
}

export const isExpirationDateValid = (expirationDate) => {
  const today = new Date();
  const expDate = new Date(expirationDate);

  return expDate >= today;
}