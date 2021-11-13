/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  // Your Code Here
  function removeEmpty(_data) {
    _data.forEach(d => {
      for(const prop in d) {
        if(!d[prop]) {
          delete d[prop];
        }
        else if(Array.isArray(d[prop])) {
          d[prop] = removeEmpty(d[prop]);
        }
      }
    })
    return _data;
  }

  let newData = removeEmpty(data);
  return JSON.stringify(newData);
}

console.log(result(data));
