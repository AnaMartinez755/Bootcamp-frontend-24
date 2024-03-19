counter = {};
function removeDeuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    counter[element] = (counter[element] || 0) + 1;
  }

  for (let j = 0; j < array.length; j++) {
    let element = array[j];
    counter[element] === 2 ? (array.splice(j, 1), j--) : null;
  }
  return array;
}

let array = [7, 9, 1, 1, 2, 3, 4, 4, "a", "a"];
console.log(removeDeuplicates(array));
