// with Math.min()
const array = [1, 54, 12, 5334, 8, 0];
let smallest = 0;
smallest = Math.min(...array);
console.log(smallest); // --> 0

//with reduce
const smallestReduce = array.reduce((acumulator, currentValue) => {
  Math.min(acumulator, currentValue);
});
console.log(smallestReduce);
