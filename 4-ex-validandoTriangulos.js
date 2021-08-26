/**
 * 
 *  Triângulos são polígonos que possuem três lados. Como qualquer outra figura geométrica, 
 *  os triângulos possuem alguns elementos, que são:

    Lados: São segmentos de reta que se encontram nas suas extremidades. Todo triângulo é uma figura 
    geométrica que possui três lados. Os triângulos podem ser definidos de três formas diferentes.
    
    Vértices: Os vértices são os pontos de encontro entre os lados.
    
    Ângulos internos: Na união dos lados de um triângulo, se forma um ângulo. Os triângulos possuem 
    três ângulos internos. Os vértices e os lados destes ângulos são, respectivamente, os vértices e 
    os lados do triângulo.
    
    Neste exercício, você deverá criar uma função para validar se os valores passados como parâmetro 
    formam um triângulo equilátero, escaleno ou isósceles.

    Requisitos:
    Para realizar este exercício, você deverá ter conhecimento sobre:

    Condicionais;
    Comparadores.
    Como realizar:
    Crie uma função chamada validarForma(). Esta função deverá receber três parâmetros: a, b, c.

    Dentro da função, utilizando condicionais e comparadores, verifique se:

    Todos os lados são iguais, o triângulo será equilátero;
    Se todos os lados forem diferentes, será escaleno;
    Se nenhuma das duas condições anteriores for atendida, será isósceles.
 * 
 */


 function validarForma(a,b,c) {

     if (a === b && a == c && b == c) {
        return 'triangulo equilatero';
     }else if (a != b && a != c && b != c) {
        return 'triangulo escaleno';
     }else {
        return 'triangulo isosceles' 
     }
 }

console.log(validarForma(2,2,5));

// Correto, solução do site dá a mesma resposta que a minha.
/**
     *  function validarForma(a, b, c){
            if ( a == b && b == c){
                console.log("Triângulo Equilátero");      
            }else if(a != b && b != c && c != a){
                console.log("Triângulo Escaleno!"); 
            }else{
                console.log("Triângulo Isósceles");
            }
        }

        validarForma(4, 5, 6);
 */