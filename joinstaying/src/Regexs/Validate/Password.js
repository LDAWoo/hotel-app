export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{10,}$/;
  return passwordRegex.test(password);
};
