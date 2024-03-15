function concatArray(data) {
  let dataConcat = [];
  data.map((element) => {
    dataConcat.push(element.join(" "));
  });
  return dataConcat;
}

let data = [
  ["The", "little", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Love", "the", "nature"],
];
console.log(concatArray(data));
