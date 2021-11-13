/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  let sortedData = data.sort((a, b) => a - b);
  for(let i = 0; i< sortedData.length; i++) {
    if(sortedData[i] === sortedData[i + 1]) {
      sortedData.splice(i, 1);
    }
  }
  return sortedData;
}

console.log(result(data));
