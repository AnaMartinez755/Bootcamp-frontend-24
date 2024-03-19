function getUniqueValue(array) {
  return array.filter(
    (value) => array.indexOf(value) === array.lastIndexOf(value)
  );
}
const array1 = [7, 1, 1, 2, 4, 4, 1, 2, 4];
const array2 = [1, 2, 2, 1, 3];

console.log(getUniqueValue(array1));
console.log(getUniqueValue(array2));
