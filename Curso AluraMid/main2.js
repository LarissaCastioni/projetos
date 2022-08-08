function tocaSom(idElementAudio) { //recebe como parametro o id de um elemento
    document.querySelector(idElementAudio).play() //colocamos esse id no querySelector junto com a função play, pra ele entender que se trata de audios
}

const listaDeTeclas = document.querySelectorAll('.tecla') //criamos essa referencia, para simplificar nosso código, para se a classe do querySelectorAll mudar, não precisar ficar caçando e arrumando
//esse querySelector, vai pegar todos os botoes, já que todos tem essa classe tecla

let contador = 0;
//Foi necessário usar o while como estrutura de repetição para auxiliar o acesso a cada elemento dentro da lista de teclas, podendo aplicar a rotina de associar uma função no atributo onclick de cada um destes elementos.
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador] //criamos essa referencia constante pra nao ter muitas repetições de codigos  
    //essa lista de teclas é aqueles botões, esse contador é pra acessar cada item da lista

    const instrumento = tecla.classList[1]
    //criamos essa referencia constante chamada instrumento, porque estamos pegando a segunda classe de todos os botoes

    //console.log(instrumento) trás todos os sons que temos, através da classList

    const idAudio = `#som_${instrumento}` //pegamos a variavel instrumento e concatenamos pra completar qual tipo de som seria no botao
    //console.log(idAudio)

    tecla.onclick = function () { //esse contador é pra acessar cada tecla, e com o onclick vai atribuir uma função anonima para chamar a função toca som
        tocaSom(idAudio) //como argumento da função, colocamos a const que guarda qual tipo de botão e som é
    }

    contador = contador + 1 //esse contator é para o while funcionar na incrementação 

    //console.log(contador)
}