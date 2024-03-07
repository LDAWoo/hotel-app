export const validatePhone = (phone) => {
  const regex = /^0\d{9}$/;
  return regex.test(phone);
};

export const validateNumber = (number) => {
  const regex = /^\d$/;
  return regex.test(number);
};
