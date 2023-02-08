export const findLongestWord = (words) => {
    let mappedWords = words.map(word => ({word: word, length: word.length}));
    let longestWord = mappedWords.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
    return {word: longestWord.word, length: longestWord.length};
  }
  

