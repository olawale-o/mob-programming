const reverseWords = (words) => {
  const splitWords = words.split('');
  let str = '';
  for (let i = splitWords.length - 1; i >= 0 ; i--) {
    str += splitWords[i];
  }
  return str;
};

const spinWords = (words) => {
  const newWords  = words.split(' ');
  const formedWords = [];
  for (let i = 0; i < newWords.length; i++) {
    if (newWords[i].length >= 5) {
      formedWords.push(reverseWords(newWords[i]));
    } else {
        formedWords.push(newWords[i]);
    }
  }
  return formedWords.join(' ');
};

module.exports = spinWords;