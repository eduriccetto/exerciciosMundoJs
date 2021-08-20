/**
Neste exercício, temos um array composto de letras repetidas e uma letra isolada. Por exemplo, temos um array chamado vetor:

let vetor = ["a", "b", "a", "a", "c", "b"]
Aqui, temos:

vetor[0] = "a";
vetor[1] = "b";
vetor[2] = "a";
vetor[3] = "a";
vetor[4] = "c";
vetor[5] = "b";
Sabemos que a única letra que não possui repetição está na posição [4], elemento “c”. Então, precisamos retornar este elemento.

No nosso exercício, faremos:
Criaremos uma variável que terá o nosso vetor ordenado de forma crescente;
Criaremos uma variável chamada odd, que receberá futuramente o valor isolado;
Percorreremos o vetor ordenado;
Armazenaremos em variáveis o elemento atual e o próximo elemento;
Se o elemento atual for igual ao próximo, seguimos a iteração;
Senão, a variável odd recebe o valor isolado.*/

let vetor = ["a", "b", "a", "a", "c", "b"]

let vet = vetor.sort()

let odd = 0
let atual = 0
let proximo = 0

for (let index = 0; index < vet.length; index++) {
    
    atual = vet[index]
    proximo = vet[index + 1]
    if (atual != proximo) {
        odd = vet[index]
    }
}

console.log(vetor);
console.log('');
console.log(`A letra isolada deste array é: ${odd}`);

// Correto, solução do site da a mesma resposta que a minha
/**
 * function encontraIsolado(vetor){
        let sorted = vetor.sort();
        let odd;
        sorted.forEach((element, index) => {
            let thisElement = sorted[index];
            let nextEle = sorted[index +1];

            if (thisElement == nextEle){
                index++;
            } else {
                odd = thisElement;
            }
        })
        return odd;
        
    }   
    console.log(encontraIsolado(["a", "b", "a", "a", "c", "b"]));
 */
