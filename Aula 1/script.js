const arr = [
    "Frodo",
    "Sam",
    "Merry",
    "Pippin",
    "Gandalf",
    "Aragorn",
    "Legolas",
    "Gimli",
];
//console.log(arr);

//adicionando elementos
//push-> serve pra adicionar elementos no final do Array

arr.push("Boromir");
//console.log(arr);

//unshift -> adicionar elementos no começo do
arr.unshift("Boromir");
//console.log(arr);

//Remover elementos no final do array
//pop -> remove o ultimo elemento e devolve ela removida
const ultimoElemento = arr.pop();
//console.log(arr);
//console.log(ultimoElemento);

//Remove elementos no começo do Array
//Shift -> remove o primeiro elemento e devolve removida
const primeiroElemento = arr.shift();
//console.log(arr);
//console.log(primeiroElemento);

//Pesquisar por elementos dentro da Array
//includes
const inclui = arr.includes("Gandalf");
//console.log(inclui);

//indexOf -> apresenta um indice de onde se encontra o elemento dentro do Array
const indice = arr.indexOf("Gandalf");
//console.log(indice);

//cortar e concatenar
//slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
//console.log(arr);
//console.log(hobbits);

//concatenar
//concat
const sociedade = hobbits.concat(outros, "Boromir");
//console.log(sociedade);

//substituição de elementos
//splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandolf, o cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice];
    console.log(elemento + " se encontra na posição " + indice);
}
