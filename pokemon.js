var pokemones =[];
var pokemones2 =[];

function Pokemon(nombre, color, puntosAtaque){
  this.nombre = nombre;
  this.color = color
  this.nivelDeAmistad = 0; //o podemos no pasarlo como parametro u poner =0
  this.vida=100;
  this.puntosAtaque = puntosAtaque;

  // this.saludar = function(){
  //   console.log("Hola, me llamo " + this.nombre);
  // };
  // this.beber = function(tipoAlcohol){
  //   if(tipoAlcohol=="chelas"){
  //     this.nivelDeAmistad +=80;
  //   }
  //   else if(tipoAlcohol=="vodka"){
  //     this.nivelDeAmistad +=10;
  //   }
  // };
  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida-this.puntosAtaque;
  }
}
// var pikachu = new Pokemon ("Pikachu", "Amarillo", 80);
// var charmander = new Pokemon ("Charmander", "Rojo", 30);
//
// console.log(pikachu);
// console.log(charmander);
//
// console.log(pikachu.nivelDeAmistad);
// console.log(charmander.nivelDeAmistad);
//
// pikachu.pelear(charmander);
// console.log(charmander.vida);

function crearPokemon() {
  var nombre = document.getElementById("nombrePokemon").value;
  var color = document.getElementById("colorPokemon").value;
  var poder = document.getElementById("puntosAtaque").value;

  var pokemon = new Pokemon(nombre, color, parseInt(poder));
  pokemones.push(pokemon);
  pokemones2.push(pokemon);
  mostrarPokemones();
}

function mostrarPokemones(){
  var listaPokemones = document.getElementById("listaPokemones");
  var lista = document.createElement("ul");
  var elemento = document.createElement("li");
    pokemones.forEach(function(pokemon){
      elemento.innerText=pokemon.nombre + pokemon.color +pokemon.puntosAtaque;
      lista.appendChild(elemento);
  });
  listaPokemones.appendChild(lista);
}

var lista = document.createElement("select");
function opcionesPokemones(){
  var listaPokemones = document.getElementById("opcionesPokemones");
    var elemento = document.createElement("option");
    pokemones.forEach(function(pokemon){
      elemento.innerText=pokemon.nombre;
      lista.appendChild(elemento);
  });
  listaPokemones.appendChild(lista);
}

function clone(){
  var elemento = document.getElementById("opcionesPokemones");
  var clone = elemento.cloneNode(true);
  document.getElementById("clonePokemones").appendChild(clone);
}
