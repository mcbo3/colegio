
  
  alert("Bienvenidos a la página web oficial del Colegio IES Cavanilles Fullstack"); 
  document.write("Hello world! En el contenido de la página"); 
  console.log("Hello world! Desde la consola")


  let identificadorDeTemporizador;

function temporizadorDeRetraso() {
  identificadorDeTemporizador = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
  alert("Three seconds have elapsed.");
}

function borrarAlerta() {
  clearTimeout(identificadorDeTemporizador);
}