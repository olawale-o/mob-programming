const arrayDiff = (a, b) => {
  const result = a.filter((value) => !b.includes(value));
  return result;
};

module.exports = arrayDiff;