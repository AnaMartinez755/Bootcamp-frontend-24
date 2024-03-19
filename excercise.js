function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => console.log("Se ejecuta después de 3 segundos"));
