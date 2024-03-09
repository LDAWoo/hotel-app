export const validateName = (name) => {
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(name);
};

export const validateNameLength = (nameLength) => {
  const regex = /^[a-zA-Z\s]{4,32}$/;
  return regex.test(nameLength);
};

export function validateZipCode(zip) {
  zip = zip.trim();

  if (!(zip.length === 6 || zip.length === 10)) {
    return false;
  }

  for (let i = 0; i < zip.length; i++) {
    if (isNaN(parseInt(zip[i]))) {
      return false;
    }
  }

  if (zip.length === 10 && zip.charAt(6) !== "-") {
    return false;
  }

  return true;
}
