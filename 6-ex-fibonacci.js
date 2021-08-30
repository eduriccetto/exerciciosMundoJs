

/**
 *                                          Exercício:
        Neste exercício, você deverá reproduzir a Sequência de Fibonacci utilizando um laço de 
        repetição. Utilize o laço For ou o While pra resolver este problema.
 */

 function fibonacci(posicao) {
    let contador = 1;
    let proximo = 0;
    let n1 = 1;
    let n2 = 1;
    let fibonacci = [0,1,1];

    console.log(`O contador está na posição: 1`);
    console.log(`Numero fibonacci: 0`);
    console.log(`O contador está na posição: 2`);
    console.log(`Numero fibonacci: 1`);
    console.log(`O contador está na posição: 3`);
    console.log(`Numero fibonacci: 1`);
    
    while (contador != posicao) {
        console.log(`O contador está na posição: ${contador + 3}`);
        contador = contador + 1;
        proximo = n1 + n2;
        console.log(`Numero fibonacci: ${proximo}`);
        fibonacci.push(proximo);
        n2 = n1;
        n1 = proximo;
    }
    console.log(fibonacci);
 }

 fibonacci(17);