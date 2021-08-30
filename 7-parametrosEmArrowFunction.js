/**
 *                                                              Explicação:
    Uma Arrow Function é uma expressão de função. Foi introduzida no ES6 (que trouxe novas features, incluindo essa nova 
    forma de criar funções, utilizando o =>)

    Uma Arrow Function possui uma sintaxe curta e possuem alguns benefícios, por exemplo:

    O this é definido à partir das funções onde foram definidas, tornando desnecessário o bind();
    São menos verbosas que as maneiras anteriores de expressar funções.
    As Arrow Functions não podem ser usadas como funções construtoras, pois não se pode aplicar o operador new a elas.

    Vamos ao Exercício:
    ------------------------------------------------------------

                                                                Exercício 1:
    Declare uma função comum, utilizando uma declaração ou expressão de função. Essa nossa função deverá possuir dois 
    parâmetros (name, lastName). A nossa função deve mostrar no console a seguinte frase: “Olá name lastName, eu sou uma 
    função!”.

    Realizada esta parte do exercício, você deverá:

    Replicar o exercício anterior, utilizando Arrow Function. Utilize os mesmos parâmetros e retorne no console a mesma frase.

 * 
 */

 function test(name, lastName){
     return (`Olá ${name} ${lastName}, eu sou uma função!`);
 };

 console.log(test('Eduardo', 'Riccetto'));

 const retornoDaFuncao = (name, lastName) => {
    return (`Olá ${name} ${lastName}, eu sou uma função!`);
 };

console.log(retornoDaFuncao('Eduardo', 'Peixoto'));

 /**
  *                                                             Exercício 2:
    Agora, no exercício dois, criaremos uma função chamada descobreDiametro, onde receberemos um parâmetro chamado raio. 
    Dentro da função, retornaremos o resultado do seu diâmetro.

    Realizada a primeira parte do exercício, replique o exercício 2 utilizando Arrow Function.

    Não esqueça de mostrar o resultado no console!
  * 
  */


  function descobreDiametro(raio){    
    return  `O diâmetro é de ${raio * 2} = por função padrão`;
  }

  console.log(descobreDiametro(2,4));


  const retornoDoDiametro = (raio) => {
    return `O diâmetro é de ${raio * 2} = por função de arrow function`;
  }

  console.log(retornoDoDiametro(2));





