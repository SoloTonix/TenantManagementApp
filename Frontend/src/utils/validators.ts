export const validateEmail = (email: string) => /\[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}\b/.test(email);
