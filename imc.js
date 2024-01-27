
var calcular = document.getElementById('botao')

function calculadora() {
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var resultado = document.getElementById('resultado')

    var valorIMC = (peso / (altura * altura))

    var classificacao = ''

    if (nome.length == 0 || altura.length == 0 || peso.length == 0) {
        alert('[ERROR!] Você deixou um campo em branco!')
    } else {
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso'
            document.getElementById('container').style.boxShadow = "5px 5px 10px #FFEE55"
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal'
            document.getElementById('container').style.boxShadow = "5px 5px 10px #58fa0dbd"
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso'
            document.getElementById('container').style.boxShadow = "5px 5px 10px #FE7246"
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I'
            document.getElementById('container').style.boxShadow = "5px 5px 10px #FF4C13"
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II'
            document.getElementById('container').style.boxShadow = "5px 5px 10px #D83400"
        } else {
            classificacao = 'com obesidade grau III'
            document.getElementById('container').style.boxShadow = "5px 5px 10px #CF3200"
        }
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC.toFixed(2)} e você está ${classificacao}!`
}

calcular.addEventListener('click', calculadora)
