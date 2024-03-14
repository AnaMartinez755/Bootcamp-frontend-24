const array = [4, "a", 1, 1, 3, 3, "c", "c", 2, 2];

const repeated = {};
const minValues = {};
array.forEach((element) => {
  if (!(element in repeated)) {
    repeated[element] = 1;
  } else {
    repeated[element] = repeated[element] + 1;
  }
});

const minValue = Math.min(...Object.values(repeated));

for (const clave in repeated) {
  if (repeated[clave] === minValue) {
    minValues[clave] = repeated[clave];
  }
}
console.log(`Least repeated values: `);
console.log(minValues);
