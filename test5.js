/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  let prefix = '';
  let firstWord = words[0];
  for(let i = 0; i < firstWord.length; i++) {
    let j = 1;
    let isSame = false;
    while(j < words.length) {
      if(firstWord[i] === words[j][i]) {
        isSame = true;
        j++;
      }
      else {
        isSame = false;
        break;
      }
    }
    if(isSame) {
      prefix += firstWord[i];
    }
  }

  return prefix;
}

console.log(result(words));
