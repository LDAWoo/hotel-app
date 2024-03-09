export const validatePassword = (password) => {
  const passwordRegex = /^.*(?=.{6,})(?=.+[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
  return passwordRegex.test(password);
};
