// verify if the first index of the value is === to the last one

function getUniqueValue(array) {
  return array.filter(
    (value) => array.indexOf(value) === array.lastIndexOf(value)
  );
}
// mode prove
const array1 = [1, 2, 4, 7, 4, 2, 1];
const array2 = [1, 2, 3, 2, 1];

console.log(getUniqueValue(array1));
console.log(getUniqueValue(array2));
