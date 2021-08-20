/*
Um vetor é um conjunto de dados que pode armazenar vários dados em apenas um lugar. Por exemplo, em um vetor, podemos armazenar uma lista de itens de, por exemplo, uma lista de compras.

Uma lista de compras armazenada em um vetor seria algo como:

let listaDeCompras = ["arroz", "massa", "carne", "alface"];
Um vetor também pode ser criado vazio e, depois, utilizando métodos de inserção, podemos inserir itens neste vetor.

let vetor = [];
Podemos inserir no vetor utilizando o método push(), e remover itens usando o método pop().

O método push() adiciona um valor ao fim do vetor, e o método pop() remove o elemento do final do vetor. Também temos outros métodos, por exemplo:

unshift(): adiciona um elemento na primeira posição do vetor;
shift(): remove o elemento na primeira posição do vetor.
Entre outros métodos. Você pode verificar os outros métodos em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

Exercício:
Neste exercício, criaremos uma função que rotaciona o nosso vetor. Levaremos em consideração as letras do alfabeto, de A a E.

let vetorAlfabeto = ["A", "B", "C", "D", "E"];
O que queremos que aconteça é: rotacionar o vetor a quantidade de vezes indicada. Essa quantidade será representada pela letra Q.

Caso o valor apresentado por Q for 1, o array deverá rotacionar um elemento:

["E", "A", "B", "C", "D"]
Para realizar esse exercício, você precisará:

Criar uma função rotacao(), que receberá dois parâmetros. O vetor e a quantidade (V, Q);
Adicione um índice para percorrer o vetor;
Caso o vetor passado por parâmetro for um vetor vazio, retorne um vetor vazio.*/

function rotacao(v,q) {
    let vetor = v
    let contador = 0
    let ultima = 0
    let tamanho = vetor.length
    while (contador != q) {
       ultima = vetor[tamanho - 1]
       vetor.pop()
       vetor.unshift(ultima)
       contador = contador + 1
    }
    console.log(vetor);
}

rotacao(['a','b','c','d','e'],4);

// Correto, solução do site da a mesma resposta que a minha
/**
 * function rotacao(V, Q) {
        let index = 0;
        if (V.length > 0){
            while(index < Q){
                V.unshift(V.pop());
                index++;
            }
            return V;
        } else {
            return V;
        }    
    }   

    console.log(rotacao(["A", "B", "C", "D", "E"], 2))
 */
