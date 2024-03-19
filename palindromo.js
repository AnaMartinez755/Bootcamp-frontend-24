function Palindromo(palabra) {
  palabra = palabra.toLowerCase().replace(/[^a-z]/g, "");

  let palabraInvertida = palabra.split("").reverse().join("");

  return palabra === palabraInvertida;
}

console.log(Palindromo("Anita lava la tina"));
