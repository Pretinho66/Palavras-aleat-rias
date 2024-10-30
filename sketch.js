let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
    let palavras = ["Escuridão","Preto","Sombra","Dark"];
  return random(palavras);
}
function inicializaCores(){
   background("gray");
  fill("black");
  textSize(50);
  textAlign(CENTER,CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);  
  text(texto, 200, 200);
  
  
  /*if(mouseX < 50){
    let palavra = "E";
  text(palavra,200,200);
  } else if (mouseX < 100){
    let palavra = "Es";
    text(palavra, 200, 200);
  } else if (mouseX < 150){
    let palavra = "Esc";
    text(palavra, 200, 200);
  } else if (mouseX < 200){
    let palavra = "Escu";
    text(palavra, 200, 200);
  } else if (mouseX < 250){
    let palavra = "Escur";
    text(palavra, 200, 200);
  } else if (mouseX < 300){
    let palavra = "Escuri";
    text(palavra, 200, 200);
  } else if (mouseX < 300){
    let palavra = "Escurid";
    text(palavra, 200, 200);
  } else if (mouseX < 350){
    let palavra = "Escuridã";
    text(palavra, 200, 200);
  } else if (mouseX < 400){
    let palavra = "Escuridão";
    text(palavra, 200, 200);
  }*/
  
}