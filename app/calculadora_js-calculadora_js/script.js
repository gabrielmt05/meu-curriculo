document.addEventListener("DOMContentLoaded", function () {
    // Referência aos elementos HTML
    const botaoCalc = document.getElementById("calcular");
    
    // Variaves da view da calculadora.
    const apagaCalc = document.querySelector("#apagarCalc");
    const apagarUltimoCaractere = document.querySelector("#apagarnumero");
    var viewCalc = document.querySelector("#telacalc"); // const resultView = document.getElementById("resultado");

    // Constantes dos botões de operações. 
    const addition = document.querySelector("#adicao");
    const subtration = document.querySelector("#subtracao");
    const multiplication = document.querySelector("#multiplicacao")
    const division = document.querySelector("#divisao");
    
    // Constantes dos botões númericos.
    const numberOne = document.querySelector("#um");
    const numberTwo = document.querySelector("#dois");
    const numberThree = document.querySelector("#tres");
    const numberFour = document.querySelector("#quatro");
    const numberFive = document.querySelector("#cinco");
    const numberSix = document.querySelector("#seis");
    const numberSeven = document.querySelector("#sete");
    const numberEight = document.querySelector("#oito");
    const numberNine = document.querySelector("#nove");
    const numberZero = document.querySelector("#zero");

    // EVENTO DAS OPERAÇÕES.
    // ao clicar no botão com id "adicao" ira retornar "+"
    addition.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "+";
    });
    subtration.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "-";
    });
    division.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "/";
    });
    multiplication.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "*";
    });

    // EVENTOS DOS NÚMEROS.
    // ao cliclar no botão com id "um" ira retornar "1". 
    numberOne.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "1";
    });
    // ao cliclar no botão com id "dois" ira retornar "2". 
    numberTwo.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "2";
    });
    // ao cliclar no botão com id "tres" ira retornar "3".  
    numberThree.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "3";
    });
    // ao cliclar no botão com id "quatro" ira retornar "4". 
    numberFour.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "4";
    });
    // ao cliclar no botão com id "cinco" ira retornar "5". 
    numberFive.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "5";
    });
    // ao cliclar no botão com id "seis" ira retornar "6".  
    numberSix.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "6";
    });
    // ao cliclar no botão com id "sete" ira retornar "7".  
    numberSeven.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "7";
    });
    // ao cliclar no botão com id "oito" ira retornar "8". 
    numberEight.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "8";
    });
    // ao cliclar no botão com id "nove" ira retornar "9".     
    numberNine.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "9";
    });
    // ao cliclar no botão com id "zero" ira retornar "0". 
    numberZero.addEventListener("click", function (e) {
        e.preventDefault();
        viewCalc.value += "0";
    });

    // Botões que apagam as strings geradas.
    apagaCalc.addEventListener("click", function () {
            viewCalc.value = " ";
    })

    apagarUltimoCaractere.addEventListener("click", function () {
        var viewCalc = document.querySelector("#telacalc");
        var valorAtual = viewCalc.value;
    
        if (valorAtual.length > 0) {
            // Verificar se há pelo menos um caractere no campo
            var novoValor = valorAtual.slice(0, -1); // Remover o último caractere
            viewCalc.value = novoValor;
        }
    });

    botaoCalc.addEventListener("click", function (e) {
        e.preventDefault();
        var result;
        const partes = viewCalc.value.split(/([+\-*/])/);
        const primeiroNumero = parseFloat(partes[0]);
        const operador = partes[1];
        const segundoNumero = parseFloat(partes[2]);

        var formatedValue = viewCalc.value + " = " + result;

        if (!isNaN(primeiroNumero) && !isNaN(segundoNumero)) {
            switch (operador) {
                case "+":
                    result = primeiroNumero + segundoNumero;
                    break;
                case "-":
                    result = primeiroNumero - segundoNumero;
                    break;
                case "*":
                    result = primeiroNumero * segundoNumero;
                    break;
                case "/":
                    result = primeiroNumero / segundoNumero;
                    break;
                default:
                    console.log("Operador inválido");
            }
            console.log(`Resultado: ${result}`);
            viewCalc.value = result;
            // Função para limpar o conteúdo da caixa de texto
            function limparTexto() {
                const viewCalc = document.getElementById("viewCalc");
                viewCalc.value = "";
            }
            // Função para limpar o conteúdo da caixa de texto
            function limparTextoAutomaticamente() {
                viewCalc.value = ""; // Limpa o conteúdo da caixa de texto
            }
            
            // Adicionar um ouvinte de clique ao botão "apagaCalc" para iniciar a limpeza automática
            const intervalID = setInterval(limparTextoAutomaticamente, 4000);
            // Define um temporizador para parar a limpeza automática após 10 segundos
            setTimeout(function () {
                clearInterval(intervalID); // Para o setInterval
                alert("Atenção sua calculadora será limpada");
            }, 4000); // 5 segundos
        } else {
            alert("Por favor, insira um calculo valido ou insira números válidos.");
        }
    });

});



