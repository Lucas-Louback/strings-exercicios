// # Exercício 2

// Observe a string abaixo:

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// a) **Remova** o excesso de espaços no final da string;
const stringNova = minhaString.trim()
// b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;
console.log(minhaString.length,stringNova.length)
// c) **Substitua** os traços `________` por “sticioso”.
console.log(stringNova.replaceAll("________","sticio"))
