export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}$/;
  return passwordRegex.test(password);
};
