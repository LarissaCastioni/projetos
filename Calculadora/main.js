let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clicou, false);
}
//a função clicou é sempre ativada em qualquer botão da calculadora, pois é identificado pelo addEventListener acima, que todos os botões terão uma função de onclick. Todos os botões recem os addEvent, pois identificamos via getElementsByTagName os botões da página e utilizamos do laço de repetição, para que cada botão tenha seu addEvent. Dessa forma, não precisamos colocar em cada linha do html uma função de onclick.

function clicou(e) {
  //O parametro "e", pega o event pelo addEventListener, que significa que ouviu o evento e capturou a interação com elemento html, o parametro "e", pode ser utlizado para pegar e manipular via DOM diversos aspectos do html e o que utilizamos foi o valor (propriedade value) da tag html button
  //Seria possível também pegar o valor de texto do html. Para isso escreveriamos "e.target.innerText", isso seria o valor dentro da tag de html button, podendo nos poupar de colocar propriedade value em todos os botoes.
  let valor = e.target.value;

  //Para armazenar os valores da calculadora utilizaremos o localStorage que salvará os valores clicados. Para verificar se algum valor já está salvo, utilizamos o localStorage.getItem e entre parênteses passamos o nome da chave que iremos identificar os valores no localStorage.
  //Salvamos na váriavel ls (localStorage) o possível valor que está salvo no localStorage, e se nenhum valor estiver salvo o retorno para variável será "null"
  let ls = localStorage.getItem("calculadora");
  console.log("ls", ls);

  //Para cada click, vamos validar os valores clicados e dependendo do botão iremos ter uma ação diferente.
  if (valor === "clear") {
    // Se o botão clicado for clear, queremos que a calculadora apague o valor do localStorage do cálculo atual e zere o valor do input
    localStorage.removeItem("calculadora");
    document.getElementById("total").value = "0";
  } else if (valor === "=" && ls) {
    // Se o botão clicado for o "=" e houver valor no localStorage de calculadora, queremos que: 
    //1. Vamos capturar o valor já existente no localStorage de calculadora e atribuiremos o "=" no final
    let calculoFinal = ls + "=";
    //2. Executaremos a função "eval()" do js que executará o cálculo, do valor existente, no localStorage de calculadora
    let totalInput = eval(ls);
    //3. Colocaremos o valor retornardo de eval no final da variável calculoFinal para então podermos salvar esse valor numa lista de histórico de cálculos do localStorage
    calculoFinal += totalInput;
    console.log("calculoFinal", calculoFinal);
    console.log("totalInput", totalInput);
    //4. Atribuimos no input com Id total o valor do calculo feito pelo eval()
    document.getElementById("total").value = totalInput;
    //5. Para criar o histórico de calculo do localStorage, executamos o getItem para verificar se existe algum valor.
    let calculos = localStorage.getItem("calculos");
    console.log("calculos", calculos);
    //6. Como criamos um array, para manipulação no codigo criamos uma variavel aonde verificaremos se já existe um valor no localStorage ou se iremos colocar um primeiro valor.
    let arrayCalculos = [];

    if (calculos) {
      //Caso então exista um valor de historico de calculos, colocaremos esse valor no nosso array acima
      arrayCalculos.push(calculos);
      console.log(arrayCalculos);
    }
    //Adicionamos no array o calculo final gerado (todos os numeros, tipos de contas, e valor gerado) 
    arrayCalculos.push(calculoFinal);
    //Tendo o array com todos os valores prontos, setamos no localStorage o historico de calculos 
    localStorage.setItem("calculos", arrayCalculos);
    //7. Por último apagamos o valor de calculadora no localStorage para poder executar uma nova conta. Compreendemos que toda vez que for clicado o botão "=", uma nova conta deve ser iniciado, por isso removemos o item abaixo.
    localStorage.removeItem("calculadora");

  } else if (valor != "=") {
    //Caso qualquer outro botao seja clicado que nao seja o "=", (pois acima validamos o = contendo valor no localStorage de calculadora, poderia cair nessa regra, caso o = seja clicado e não tendo valores no localStorage de calculadora) atribuimos o calculo no localStorage de calculadora
    if (ls) {
      //Caso exista um valor no localStorage da calculadora (no caso o calculo que estamos executando no momento), atribuimos que a variavel valor é igual ao valor do  localStorage + o valor clicado 
      valor = ls + valor ;
      //O "valor" original sempre será o valor clicado, porém para setar no localStorage e no input modificamos o valor com o que temos salvo no LocalStorage
    } 
    //Atribuimos no localStorage o valor
      localStorage.setItem("calculadora", valor);
  
      // Atribuimos o valor da calculadora pro input da tela
    document.getElementById("total").value = valor;
  }
}
