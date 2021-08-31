// Authors
// Moise
// Usman
// Olawale

function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
    
  str.split('').forEach((vowel) => {
    if (vowels.includes(vowel)) vowelsCount += 1
  });
    
  return vowelsCount;
};

module.exports = getCount;
