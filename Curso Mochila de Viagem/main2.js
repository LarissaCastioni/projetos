const form = document.getElementById("novoItem")
const itens = JSON.parse(localStorage.getItem("itens")) || [] //criado array vazio para poder guardar todos os dados no localStorage do obj
//se o getItem for falso, ele vai criar o array
//o json parse é pq quando o localstorage recebe os dados, recebe em string, e precisamos dele em array pra manipular



//addEventListener é a forma correta de utilizar um evento no JavaScript. No projeto do curso é utilizado o evento do tipo submit.
form.addEventListener("submit", (evento) => { //usamos o escutar o evento de submit e executar uma função anonima
    //console.log("funcionou") // nao retorna porque por padrão, o form nao envia os dados pra nenhum lugar, envia os dados para a propria pagina, então não executa a função

    //então precisamos interromper o comportamento, entao pegamos o event padrao dele e interrompe com o prevent default, e passa o evento no parametro 
    evento.preventDefault()
    console.log("funcionou")

    // ********* forma de acessar cada elemento que queremos *****
    //com o console.log(evento), ele vai trazer o objeto do submit e as tags envolvidas para esse evento. Nele, temos o target que dentro tem um array para chegarmos nos inputs que vamos usar 

    //atraves do array do target:
    //console.log(evento.target[0].value) busca o elemento o input nome pelo [0]

    //atraves do element do evento, ou seja, nome do input
    //console.log(evento.target.elements["nome"].value)
    //console.log(evento.target.elements["quantidade"].value)

    const nome = evento.target.elements["nome"]
    const quantidade = evento.target.elements["quantidade"]

    criaElemento(nome.value, quantidade.value) //toda vez que o formulario for submetido, essa função deve ser executada 

    nome.value = "" //serve para limpar o valor do campo do input assim que clicar no "adicionar"
    quantidade.value = ""
})


function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)

    //para criar um elemento li, com classe item a cada vez que for clicado o submit
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    //sempre que o item for criado, queremos que apareça a quantidade em strong
    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade

    //console.log(numeroItem) vai mostrar quantos itens colocamos no campo quantidade

    //entao precisamos que esse novo item criado tenha o numero (quantidade) mais o nome, logo:
    novoItem.appendChild(numeroItem) //colocamos a quantidade como filho do novo item
    novoItem.innerHTML += nome // estamos falando que ???????
    //console.log(novoItem) esse console.log vai mostrar o nome e a quantidade do item 

    const lista = document.getElementById("lista") //pegando o id da lista
    lista.appendChild(novoItem) //colocando o novoItem como filho da lista

    //criamos um obj com chave e valor pra ele ter a possibilidade de salvar diversos items no localstorage
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }
    itens.push(itemAtual)
    //cria item no localStorage com chave "nome" e "quantidade"
    //localStorage.setItem("item", itemAtual) se mandarmos só assim, ele vai aparecer como object então precisamos transformar pra json (string)

    localStorage.setItem("item", JSON.stringify(itens)) //como o localStorage só aceita string esse stringfy transforma o obj em string
}


//colocar const lista na linha 2, pra ser melhor