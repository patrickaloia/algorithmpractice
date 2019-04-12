function levenshteinDistance(word1, word2) {
  let distanceMatrix = new Array(word2.length + 1).fill(null).map(() => new Array(word1.length + 1).fill(null));

  for(let i = 0; i <= word2.length; i++) {
    distanceMatrix[i][0] = i;
  }

   for(let j = 0; j <= word1.length; j++) {
    distanceMatrix[0][j] = j;
  }

  for(let i = 1; i <= word2.length; i++) {
   for (let j = 1; j <= word1.length; j++) {
    indicator = word1[j - 1] === word2[i - 1] ? 0 : 1
    distanceMatrix[i][j] = Math.min(
      distanceMatrix[i][j - 1] + 1,
      distanceMatrix[i - 1][j] + 1,
      distanceMatrix[i - 1][j - 1] + indicator
    )
  }
}
console.log(distanceMatrix)

  return distanceMatrix[word2.length][word1.length]


}


// levenshteinDistance('angel', 'dangelo')

// const set1 = new Set();
// const newObj = {a: 43}
// set1.add(42);
// set1.add(42);
// set1.add(13);

// console.log(set1)
// for (let item in newObj) {
//   set1.add(newObj[item])
// }
