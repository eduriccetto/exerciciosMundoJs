/**
Neste exercício, criaremos uma função que calcula a quantidade mínima de passos que uma pessoa precisa dar para atravessar a rua.

A nossa pessoa deseja atravessar a rua. Inicialmente, a pessoa está localizada em uma posição X, e deseja chegar a uma posição maior ou igual a Y. A cada passo que a nossa pessoa dá, ela percorre uma distância fixa que denominaremos Z. Na nossa função, precisaremos:

Contar a quantidade mínima de passos que a nossa pessoa precisa dar para atravessar a rua, ou seja, sair da posição X e chegar ou ultrapassar a posição Y.
Em nossa função, precisamos passar os parâmetros. Por exemplo, daremos 3 números inteiros, X, Y e Z, e a função deverá retornar um número mínimo de passos que inicie da posição X e vá para uma posição maior ou igual a Y.

Dando como exemplo os números de entrada:

X = 5;
Y = 40;
D = 1;
Ao dar um passo, deve ser somada a distância inicial + a distância do passo dado, ou seja:

Ao dar um passo = 5 + 1;

Dois passos: 5 + 1 + 1.

E assim, sucessivamente, até chegar ou passar a distância final de 40.

Para realizar esse exercício, você precisará:

Criar uma função chamada atravessaRua;
Essa função deverá receber três parâmetros: X, Y e Z;
Calcular a distância necessária; */

function atravessaRua(x,y,z){
    
    var inicial = x
    var contador = x
    var contador2 = 0
    var final = y
    var passo = z
    
    while (contador < final) {
        var contador = contador + passo
        var contador2 = contador2 + 1
    }
    
    const result = `A pessoa deu ${contador2} passos até chegar da posição inicial ${inicial} até a final ${final}`
    
    console.log(result); 
}

atravessaRua(7,132,14);

// correto, solução do site da a mesma resposta que a minha
/**
 *      Solução do Site:
 * 
 *      function atravessaRua(X, Y, Z){
            let valor = ((Y - X) / Z);
            if (Number.isInteger(valor)){
                return valor;
            } else {
                valorCorreto = Math.floor(valor + 1);
                return valorCorreto;
            }
        }      
 */