/**
 *                                  Exercício 1:
        Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma 
        fruta. Após, crie uma estrutura condicional switch que receba esta variável e que possua três 
        casos: caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: 
        “Estamos com escassez de kiwis” e caso melancia, retorne: “Aqui está, são 3 reais o quilo”. 
        Teste com estas três opções e verifique o console do seu navegador. Crie também um default, 
        que retornará uma mensagem de erro no console.
 */



 function temEstaFruta(a) {
    
    let fruta = a;

    switch (fruta) {
        case 'maça':
            console.log(`Nao vendemos ${fruta} aqui`);
            break;
        case 'kiwi':
            console.log(`Estamos em escassez de ${fruta}`);
            break;
        case 'melancia':
            console.log(`Aqui esta, sao 3 reais o quilo da ${fruta}`);
            break;
        default:
            console.error(`Erro, fruta ${fruta} não é uma fruta válida: `);
            break;
    }
 }

 temEstaFruta('batata');

 // Corretos!!!

 /**
  *                                         Exercício 2:
        Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a 
        revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma 
        estrutura switch/case, caso o comprador queira o hatch, retorne: “Compra efetuada com 
        sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. Caso seja 
        especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este 
        tipo de automóvel aqui”.
  */

 function escolhaCarro(a) {
    
    let veiculo = a;
    
    switch (veiculo) {
        case 'hatch':
            console.log('Compra efetuada com sucesso!');
            break;
        case 'sedan':
            console.log(`Tem certeza que prefere um ${veiculo} a outro modelo?`);
            break;
        case 'motocicleta':
            console.log(`Tem certeza que prefere um ${veiculo} a outro modelo?`);
            break;
        case 'caminhonete':
            console.log(`Tem certeza que prefere um ${veiculo} a outro modelo?`);
            break;
        default:
            console.error(`${veiculo}? Infelizmente não trabalhamos com este tipo de veiculo aqui`);
            break;
    }
 }

 escolhaCarro('barco');

 // Correto!
 