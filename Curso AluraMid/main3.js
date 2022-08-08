function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play() //coloquei dentro de uma variavel esse retorno pra ser mais facil de utilizar
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    const tecla = listaDeTeclas[cont]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    //a tecla foi cliclada
    tecla.onkeydown = function (evento) { //quando apertamos tab, podemos com o space ou enter apertar as teclas de sons. Entretando, com o space, aparece que a tecla do som foi ativada, por conta da cor. Já quando apertamos o enter, apenas sai o som. Então criamos essas linhas de codigo

        //console.log(evento) aparece os eventos do objeto ao clicar com space, enter

        //console.log(evento.code) aparece se é enter ou space

        //console.log(evento.code === 'Enter') aparece que é true se apertamos com o enter, false se apertamos com space

        if (evento.code === 'Enter' || evento.code === 'Space') { //condição para que a tecla só seja apertada por space ou enter, sem essa condição, o tab também funciona e mantem pressionado
            tecla.classList.add('ativa')
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
