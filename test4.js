/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  let sorted = numbers.sort((a, b) => a - b);
  let missingNum;
  for(let i = 0; i < numbers.length; i++) {
    let offset = 0;
    if(i + offset === numbers[i]) {
      missingNum = i + 1;
      offset += 1;
    }
  }
  return missingNum;
}

console.log(result(numbers));
